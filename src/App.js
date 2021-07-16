import Navbar from './components/Navbar'
import Main  from './Router';
import {HashRouter as Router} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Main />
    </div>
    </Router>
  );
}

export default App;
