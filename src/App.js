import logo from './logo.svg';
import './App.css';
import GetDataFromServer from './components/basic/GetDataFromServer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header> */}
      <GetDataFromServer></GetDataFromServer>
    </div>
  );
}

export default App;
