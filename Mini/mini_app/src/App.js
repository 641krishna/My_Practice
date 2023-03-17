import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Single from './Pages/Single';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movie/:id' element={<Single />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>

    </div>
  );
}

export default App;
