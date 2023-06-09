import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{props.title}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the future.
        </p>
        <p>{props.name}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
