import React, { useState } from 'react';
import './App.css';

function App() {
  const [paragraph, setParagraph] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setParagraph(text);
    const count = text.trim().split(/\s+/).length;
    setWordCount(count);
  };

  return (
    <div className="App">
      <h1>Word Counter</h1>
      <div className="container">
        <textarea
          placeholder="Enter a paragraph"
          value={paragraph}
          onChange={handleInputChange}
        ></textarea>
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
