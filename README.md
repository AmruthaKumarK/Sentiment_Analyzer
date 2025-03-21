# \ud83e\udde0 Sentiment Analyzer  

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/SanskarBajaj123/Sentiment_Analyzer/issues)  
[![Deployed on Render](https://img.shields.io/badge/Deployed%20on-Render-blue)](https://sentiment-analyzer-frontend.onrender.com/)  

> **Instantly analyze the sentiment of any text with the power of Machine Learning!** \ud83d\udd25  

## \ud83c\udf1f [Try it Live](https://sentiment-analyzer-frontend.onrender.com/)  

---

## \ud83d\udccc Overview  

**Sentiment Analyzer** is an intelligent web application that leverages **Natural Language Processing (NLP)** and **Machine Learning** to determine whether a given text expresses **positive** or **negative** sentiment. Trained on large-scale Twitter data, it provides **real-time** insights into the emotions behind the text.  

<p align="center">
  <img src="https://i.imgur.com/YourDemoImage.png" alt="Sentiment Analysis Demo" width="600"/>
</p>  

---

## \ud83d\ude80 Features  

\u2714\ufe0f **Real-time Sentiment Analysis** \u2013 Instant feedback on text sentiment  
\u2714\ufe0f **ML-Powered** \u2013 Uses a **Logistic Regression** model with ~78% accuracy  
\u2714\ufe0f **Fast & Lightweight** \u2013 Optimized for quick responses  
\u2714\ufe0f **Scalable API** \u2013 Easily integrates into other applications  
\u2714\ufe0f **Responsive UI** \u2013 Fully optimized for **mobile & desktop**  
\u2714\ufe0f **Cloud Deployed** \u2013 Hosted on **Render** for seamless access  
\u2714\ufe0f **User-Friendly** \u2013 Simple, intuitive, and easy to use  

---

## \ud83d\udee0\ufe0f Tech Stack  

### \ud83c\udfaf Backend  
- **Python** (Flask for API)  
- **NLTK** (Natural Language Toolkit)  
- **scikit-learn** (ML Model)  
- **Pandas** (Data Processing)  

### \ud83c\udfa8 Frontend  
- **React.js** (Modern UI)  

### \ud83c\udff7\ufe0f Deployment  
- **Render** (Cloud Hosting)  

---

## \ud83d\udd0d How It Works  

1\ufe0f\u20e3 **Data Preparation** \u2013 Trained on **1.6M tweets** from the Sentiment140 dataset  
2\ufe0f\u20e3 **Text Preprocessing** \u2013  
   - Removes special characters & noise  
   - Converts text to lowercase  
   - Eliminates common **stopwords**  
   - Applies **stemming** to standardize words  
3\ufe0f\u20e3 **Feature Extraction** \u2013 Uses **TF-IDF vectorization**  
4\ufe0f\u20e3 **Sentiment Classification** \u2013 Predicts **positive (1) or negative (0)** sentiment using **Logistic Regression**  
5\ufe0f\u20e3 **Instant Results** \u2013 Provides real-time feedback on text sentiment  

---

## \ud83c\udfc6 Model Performance  

| Metric         | Accuracy  |  
|---------------|----------|  
| **Training**  | 79.87%   |  
| **Testing**   | 77.67%   |  

---

## \ud83d\udcfa Installation  

### \ud83d\udd39 Prerequisites  
- **Python 3.11+**  
- **Node.js & npm**  

### \ud83d\udd39 Setup  

```bash
# Clone the repository
git clone https://github.com/SanskarBajaj123/Sentiment_Analyzer.git
cd Sentiment_Analyzer
```

#### \ud83d\udd39 Backend Setup  
```bash
pip install -r requirements.txt
python app.py
```
\u27a1\ufe0f The backend server runs at **http://localhost:5000**  

#### \ud83d\udd39 Frontend Setup  
```bash
cd sentiment-app
npm install
npm start
```
\u27a1\ufe0f The frontend runs at **http://localhost:3000**  

---

## \ud83d\udd17 API Usage  

### **POST** `/predict`  
#### \ud83d\udce9 Request  
```json
{
  "text": "I really love this movie!"
}
```
#### \ud83d\udce4 Response  
```json
{
  "sentiment": "1"
}
```
(0 = Negative, 1 = Positive)  

### Example API Call in Python  
```python
import requests
response = requests.post(
    "http://localhost:5000/predict",
    json={"text": "This is amazing!"}
)
print(response.json())  # Output: {"sentiment": "1"}
```

---

## \ud83d\udc1c Future Enhancements  

\u2705 Multi-class Sentiment (Negative, Neutral, Positive)  
\u2705 Deep Learning Model (LSTM/BERT) for higher accuracy  
\u2705 Sentiment Score Visualization & Trends  
\u2705 Multi-Language Support \ud83c\udf0d  
\u2705 Real-time Sentiment Dashboard  

---

## \ud83e\udd1d Contributing  

We welcome contributions to improve the **Sentiment Analyzer**! \ud83d\ude80  

1\ufe0f\u20e3 **Fork** the repository  
2\ufe0f\u20e3 **Create a new branch** (`git checkout -b feature/AmazingFeature`)  
3\ufe0f\u20e3 **Commit your changes** (`git commit -m 'Added an amazing feature'`)  
4\ufe0f\u20e3 **Push to GitHub** (`git push origin feature/AmazingFeature`)  
5\ufe0f\u20e3 **Open a Pull Request** \ud83c\udf89  

---

## \ud83d\udc1f License  

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.  

---

## \ud83d\udc68\u200d\ud83d\udcbb Author  

**Sanskar Bajaj**  
\ud83d\udd17 [GitHub](https://github.com/SanskarBajaj123) | \ud83c\udfc6 Open-Source Contributor  

---

