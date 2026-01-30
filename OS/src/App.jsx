import "./App.scss";
import { Dock } from "./components/Dock";
import Nav from "./components/Nav";
import GitHub from "./windows/GitHub";
import Note from "./windows/Note";

function App() {
  return (
    <>
      <main>
        <Nav></Nav>
        <div className="windows">
          <GitHub></GitHub>
          <Note></Note>
        </div>

        <Dock></Dock>
      </main>
    </>
  );
}

export default App;
