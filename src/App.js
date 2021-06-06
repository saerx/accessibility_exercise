import './App.css';
import MainContentContainer from "./containers/MainContentContainer"

function App() {
  return (
    <>
    <header >
      <a href="#maincontent" class="skiptocontent">Skip to content</a>
    </header>
    <br/>
    <div class="navigation">
      <nav>
        <button>Button 1</button>
      </nav>
      <nav>
        <button>Button 2</button>
      </nav>
      <nav>
        <button>Button 3</button>
      </nav>
    </div>
      <MainContentContainer/>
    </>
  );
}

export default App;
