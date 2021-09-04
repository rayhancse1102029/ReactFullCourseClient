import logo from './logo.svg';
import './App.css';
import GetDataFromServer from './components/basic/GetDataFromServer';
import GetDataFromServer02 from './components/basic/GetDataFromServer02';
import 'semantic-ui-css/semantic.min.css'
import ListExampleDivided from './components/bind-handler/ListExampleDivided';
import HomePage from './components/intermidate/HomePage';
import Footer from './components/intermidate/Footer';
import Navbar from './components/intermidate/Navbar';
import EmployeeList from './components/intermidate/EmployeeList';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
      </header> */}
      
      {/* <GetDataFromServer02></GetDataFromServer02>
      <GetDataFromServer></GetDataFromServer> */}

      {/* <HomePage></HomePage> */}
      <Navbar></Navbar>
      <EmployeeList></EmployeeList>
      <Footer></Footer>

    </div>
  );
}

export default App;
