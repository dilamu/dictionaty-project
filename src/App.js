import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
      
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eo_circle_blue_letter-d.svg/1024px-Eo_circle_blue_letter-d.svg.png" alt="dictionary" className="DictionaryImg" />
          
        
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Diana L. Muñoz</small>
      </footer>
      </div>
    </div>
  );
}
