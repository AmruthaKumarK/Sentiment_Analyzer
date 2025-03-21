# 🧠 Sentiment Analyzer

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/SanskarBajaj123/Sentiment_Analyzer/issues)

> Instantly analyze the sentiment of any text with machine learning magic! ✨

## 🌟 [Try it live!](https://sentiment-analyzer-frontend.onrender.com/)

## 📝 Overview

**Sentiment Analyzer** is an intuitive web application that uses natural language processing and machine learning to determine if text expresses positive or negative sentiment. Trained on Twitter data, it accurately captures the emotional tone behind words.
![image](https://github.com/user-attachments/assets/8aaa62b6-ec49-45fb-bcc1-72d644b08711)





## ✨ Features

- 🔍 **Instant Analysis** - Get immediate sentiment results for any text
- 🧠 **ML-Powered** - Leverages a trained Logistic Regression model with ~78% accuracy
- 🔄 **Simple API** - Easy integration with other applications
- 📱 **Responsive Design** - Works on desktop and mobile devices
- 🚀 **Fast and Lightweight** - Optimized for quick response times
- 🔬 **High Scalability** - Can handle multiple requests efficiently
- 🖥️ **User-Friendly Interface** - Simple and clean UI for better user experience
- 🔗 **Easily Deployable** - Can be hosted on cloud platforms with minimal setup

## 🛠️ Technologies Used

### Backend
- Python
- Flask
- NLTK (Natural Language Toolkit)
- scikit-learn
- Pandas

### Frontend
- React.js

## 🔧 How It Works

1. **Data Foundation**: Trained on 1.6 million tweets from the Sentiment140 dataset
2. **Text Processing**:
   - Removes special characters and noise
   - Converts to lowercase
   - Eliminates common stopwords
   - Applies stemming to standardize words
3. **Smart Analysis**: Uses TF-IDF vectorization and Logistic Regression
4. **Instant Results**: Classifies text as positive or negative in real-time

## 🧪 Model Performance

```
Training accuracy: 79.87%
Testing accuracy:  77.67%
```

## 🚀 Installation

### Prerequisites
- Python 3.11+
- Node.js and npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/SanskarBajaj123/Sentiment_Analyzer.git
cd Sentiment_Analyzer
```

2. Install Python dependencies:
```bash
pip install -r requirements.txt
```

3. Install frontend dependencies:
```bash
cd sentiment-app
npm install
```

## 💻 Usage

### Running the API server

```bash
python app.py
```
The server will run at http://localhost:5000

### API Endpoint

- **POST** `/predict`
  - Request: `{"text": "Your text here"}`
  - Response: `{"sentiment": "0"}` (0 = negative, 1 = positive)

### Example API Request

```python
import requests
response = requests.post(
    "http://localhost:5000/predict",
    json={"text": "I really enjoyed this movie!"}
)
print(response.json())
```

## 🔮 Future Improvements

- 🌈 Multi-class sentiment (negative, neutral, positive)
- 🧠 Enhanced accuracy with deep learning models
- 📊 Visualization of sentiment scores
- 📱 Native mobile application
- 🔥 Real-time streaming sentiment analysis for social media
- 📈 Dashboard with analytics and trends over time
- 🌍 Multi-language support for broader applicability

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 👨‍💻 Author

**Sanskar Bajaj** - [GitHub](https://github.com/SanskarBajaj123)

