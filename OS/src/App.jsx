import "./App.scss";
import { Dock } from "./components/Dock";
import Nav from "./components/Nav";
import GitHub from "./windows/GitHub";

function App() {
  return (
    <>
      <main>
        <Nav></Nav>
        <div className="windows">
          <GitHub></GitHub>
        </div>

        <Dock></Dock>
      </main>
    </>
  );
}

export default App;
