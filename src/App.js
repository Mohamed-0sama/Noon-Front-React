// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';
// import Header2 from './components/Header2';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Routes>
          <Route  path="/" exact element={<Header />} />
          <Route  path="/header" element={<Header />} />
          <Route  path="/footer" element={<Footer />} />
        </Routes>
       
    </div>
  );
}

export default App;
