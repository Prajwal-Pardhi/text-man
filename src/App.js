// import logo from "./logo.svg";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Text_input_form from "./Components/TextInputForm";

function App() {
  return (
    <>
      <Navbar title="TextMan" aboutText="About" />
      <div className="container mt-5">
        <Text_input_form />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
