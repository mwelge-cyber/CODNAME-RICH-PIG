import logo from './logo.svg';
import './App.css';
import StockGraph from './stockgraph'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Richpig
        </p>
        <StockGraph />
      </header>
    </div>
  );
}

export default App;
