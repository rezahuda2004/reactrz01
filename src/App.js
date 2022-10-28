import logo from './logo.svg';
import './App.css';
import Card from './components/Card/Card';
import Text from './components/Text/Text';
import Button from './components/Button/Button';
import Loginpages from './pages/loginpages/Loginpages';

function App() {
  return (
    <div className="App">
    <Card/>
    <Text/>
    <Button/>
    <Loginpages/>
    </div>
  );
}

export default App;
