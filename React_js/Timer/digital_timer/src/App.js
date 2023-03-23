import logo from './logo.svg';
import './App.css';
import Digital from './Components/Digital';
import Usememo from './Components/Usememo';
import Stopwatch from './Components/Stopwatch';
import FetchAPI from './Components/FetchAPI';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <Digital />
      ------------------------------------------
      <Usememo />
      --------------------------------------------
      <Stopwatch />
      --------------------------------------------
      <FetchAPI />
      --------------------------------------------
      <Calculator />
    </div>
  );
}

export default App;
