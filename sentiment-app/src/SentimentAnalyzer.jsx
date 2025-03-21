import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./SentimentAnalyzer.css";

// Import icons (these would normally be imported from a package)
// We're defining SVG components directly here for simplicity
const PositiveIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

const NegativeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="8" y1="15" x2="16" y2="15"></line>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

const NeutralIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="8" y1="12" x2="16" y2="12"></line>
    <line x1="9" y1="9" x2="9.01" y2="9"></line>
    <line x1="15" y1="9" x2="15.01" y2="9"></line>
  </svg>
);

// New analyze icon - lightning bolt for speed
const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="button-icon">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
  </svg>
);

const BrainLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="logo-icon">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04z"></path>
  </svg>
);

export default function SentimentAnalyzer() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeSentiment = async () => {
    if (!text.trim()) {
      setError("Please enter some text to analyze");
      return;
    }
    
    setError("");
    setLoading(true);
    
    try {
      const response = await axios.post("https://sentiment-analyzer-backend-195n.onrender.com/predict", { text });
      setSentiment(response.data.sentiment);
    } catch (error) {
      console.error("Error fetching sentiment:", error);
      setError("Failed to analyze. Please try again.");
    }
    
    setLoading(false);
  };

  const getSentimentText = () => {
    // Check if sentiment is a number (1 for positive, 0 for negative)
    if (sentiment === 1 || sentiment === "1") return "Positive";
    if (sentiment === 0 || sentiment === "0") return "Negative";
    
    // If it's already a text value, return as is
    if (sentiment === "Positive" || sentiment === "Negative" || sentiment === "Neutral") {
      return sentiment;
    }
    
    return "Unknown";
  };

  const getSentimentIcon = () => {
    const sentimentText = getSentimentText();
    
    if (sentimentText === "Positive") return <PositiveIcon />;
    if (sentimentText === "Negative") return <NegativeIcon />;
    if (sentimentText === "Neutral") return <NeutralIcon />;
    
    return null;
  };

  const getSentimentClass = () => {
    const sentimentText = getSentimentText();
    
    if (sentimentText === "Positive") return "positive";
    if (sentimentText === "Negative") return "negative";
    if (sentimentText === "Neutral") return "neutral";
    
    return "";
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="logo-container">
          <BrainLogo />
          <motion.h1 
            className="app-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sentiment Analyzer
          </motion.h1>
        </div>
        
        <p className="app-description">
          Enter your text below and let our AI analyze the sentiment
        </p>
        
        <div className="input-container">
          <textarea
            className="text-input"
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
          />
          
          {error && <p className="error-message">{error}</p>}
          
          <motion.button
            className="analyze-button"
            onClick={analyzeSentiment}
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <LightningIcon />
            {loading ? "..." : "Analyze"}
          </motion.button>
        </div>
        
        {sentiment !== null && (
          <motion.div
            className={`result-container ${getSentimentClass()}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="result-icon">
              {getSentimentIcon()}
            </div>
            <div className="result-content">
              <span className="result-label">Sentiment</span>
              <span className="result-value">{getSentimentText()}</span>
            </div>
          </motion.div>
        )}
        
        <div className="footer">
          <p>Powered by Machine Learning</p>
          <p>Made By Sanskar, Astha, Amrutha</p>
        </div>
      </div>
    </div>
  );
}