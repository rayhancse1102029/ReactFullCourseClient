import logo from './logo.svg';
import './App.css';
import GetDataFromServer from './components/basic/GetDataFromServer';
import GetDataFromServer02 from './components/basic/GetDataFromServer02';
import 'semantic-ui-css/semantic.min.css'
import ListExampleDivided from './components/bind-handler/ListExampleDivided';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
      </header> */}
      
      <GetDataFromServer02></GetDataFromServer02>
      <GetDataFromServer></GetDataFromServer>

    </div>
  );
}

export default App;
