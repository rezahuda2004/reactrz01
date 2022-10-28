import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Text from './components/Text/Text';
import Button from './components/Button/Button';
import Loginpages from './pages/loginpages/Loginpages';
import Login from './pages/loginpages/Loginpages';
import Profile from './pages/profilepages/Profilepages';
import About from './pages/aboutpages/Aboutpages';
import Home from './pages/homepages/Homepages';
import Faq from './pages/faqpages/Faqpages';
import Donate from './pages/donatepages/Donatepages';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
    <Card/>
    <Text/>
    <Button/>
    <Loginpages/>
    <Profile/>
    <About/>
    <Login/>
    <About/>
    <Home/>
    <Faq/>
    <Donate/>
    <Cart/>
    </div>
  );
}

export default App;
