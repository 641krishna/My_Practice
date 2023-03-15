import logo from './logo.svg';
import './App.css';
import Digital from './Components/Digital';
import Usememo from './Components/Usememo';
import Stopwatch from './Components/Stopwatch';

function App() {
  return (
    <div className="App">
      <Digital />
     ------------------------------------------
      <Usememo />
     --------------------------------------------
      <Stopwatch/>
    </div>
  );
}

export default App;
