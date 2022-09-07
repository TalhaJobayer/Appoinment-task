import logo from './logo.svg';
import './App.css';
import Appoinment from './Component/Appoinment/Appoinment';
import Navbar from './Component/Navbar/Navbar';

function App() {
  
  return (
    <div className="App">
     <Navbar></Navbar>
     <Appoinment></Appoinment>
    </div>
  );
}

export default App;
