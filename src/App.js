import './App.css';
import { Header } from "./ImHeader.js";
import {Sidebar} from "./ImSidebar.js";
import {Main} from  "./ImMainContainer.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Sidebar />
        <Main />
      </header>
    </div>
  );
}

export default App;
