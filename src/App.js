import logo from "./dictionary.png";
import './styles/App.css';
import Dictionary from "./components/Dictionary";

const  App = () => {
  return (
    <div className="container">
      <header>
        <div className="App mt-3">
            <img src={logo} className="App-logo img-fluid" alt="logo" />
        </div>
      </header>
      <main>
        <Dictionary defaultKeyword="crystals"/>
      </main>
    </div>
  );
}

export default App;
