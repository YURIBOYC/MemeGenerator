import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "/components/Header.jsx"
import Meme from "/components/Meme.jsx"

function App() {
  return (
    <div>
      <Header/>
      <Meme/>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />); 