from flask import Flask, request, jsonify
import joblib
import nltk
import re
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer
from flask_cors import CORS

# Download stopwords
nltk.download('stopwords')
stop_words = set(stopwords.words('english'))  # Load stopwords once

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from frontend

# Load model and vectorizer
model = joblib.load('model.sav')
vectorizer = joblib.load('vectorizer.sav')

# Initialize Porter Stemmer
port_stem = PorterStemmer()

def stemming(content):
    stemmed_content = re.sub(r'[^a-zA-Z]', ' ', content)  # Remove non-alphabetic characters
    stemmed_content = stemmed_content.lower().split()  # Convert to lowercase and split
    stemmed_content = [port_stem.stem(word) for word in stemmed_content if word not in stop_words]
    return ' '.join(stemmed_content)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    processed_text = stemming(text)
    text_vector = vectorizer.transform([processed_text])
    prediction = model.predict(text_vector)[0]
    

    return jsonify({"sentiment": str(prediction)})

if __name__ == '__main__':
    app.run(debug=True)
