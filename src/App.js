import './App.css';
import MainContentContainer from "./containers/MainContentContainer"

function App() {
  return (
    <>
    <div class="skiptocontent">
      <a href="#maincontent">Skip to content</a>
    </div>
    <header class="header">
      <nav>
        <button>Button 1</button>
      </nav>
      <nav>
        <button>Button 2</button>
      </nav>
      <nav>
        <button>Button 3</button>
      </nav>
    </header>
      <MainContentContainer/>
    </>
  );
}

export default App;
