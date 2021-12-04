// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
// import Header2 from './components/Header2';
// import Footer from './components/Footer/Footer';
import TestRouting from "./components/TestRouting";
import FooterThree from "./components/Footer/Footer components/FooterThree";
import RoutingDiv from './components/RoutingDiv';
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
     {/* <Header />
     <TestRouting />
     <FooterThree /> */}
     

      <Routes>
        <Route path="/" exact element={<Home />} />                  
        <Route path="/Home" element={<Home />} >
          <Route path="/Home/TestRouting" element={<RoutingDiv />} />
          <Route path="/Home/test" element={<TestRouting />} />
        </Route>                  
        <Route path="/header" element={<Header />} />  
        <Route path="/footer" element={<Footer />} />
        
      </Routes>
    </div>
  );
}

export default App;
