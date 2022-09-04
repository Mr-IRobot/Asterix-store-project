import Home from './pages/Home';
import Products from './pages/Products';
import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Signin from './pages/Signin';
import CreateAccount from './pages/CreateAccount';
import CreateAccounts from './pages/CreateAccounts';
import Item from './pages/Item';
import Onboard from './pages/Onboard';
import Verify from './pages/Verify';
// import {ReactComsponent as Illustration} from './image/illustration.svg';

function App() {
  return (
    
    <Router>

      <Header />

      <Routes>
        
        <Route exact path="/" element={<Home/>} />

        <Route exact path="/Products" element={<Products/>} />

        <Route exact path="/Signin" element={<Signin/>} />

        <Route exact path="/CreateAccount" element={<CreateAccount/>} />

        <Route exact path="/CreateAccounts" element={<CreateAccounts/>} />

        <Route exact path="/Item" element={<Item/>} />

        <Route exact path="/Onboard" element={<Onboard/>} />

        <Route exact path="/Verify" element={<Verify/>} />
        
      </Routes>
        
      <Footer />
      
    </Router>
    
  );
}

export default App;
