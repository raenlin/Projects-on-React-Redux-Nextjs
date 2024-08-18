import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Uncontrolled from './pages/Uncontrolled/Uncontrolled';
import Controlled from './pages/Controlled/Controlled';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="uncontrolled" element={<Uncontrolled />} />
        <Route path="controlled" element={<Controlled />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
