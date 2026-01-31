import "./App.scss";
import { Dock } from "./components/Dock";
import Nav from "./components/Nav";
import Finder from "./windows/Finder";
import GitHub from "./windows/GitHub";
import Note from "./windows/Note";

function App() {
  return (
    <>
      <main>
        <Nav></Nav>
        <div className="windows">
          {/* <GitHub></GitHub>
          <Note></Note> */}
          <Finder></Finder>
        </div>

        <Dock></Dock>
      </main>
    </>
  );
}

export default App;
