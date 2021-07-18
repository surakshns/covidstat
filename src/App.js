import {useEffect} from 'react'
import Navbar from './components/Navbar'
import Main  from './Router';
import {HashRouter as Router} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
