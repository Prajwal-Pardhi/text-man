// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Text_input_form from "./Components/Text_input_form";

function App() {
  return (
    <>
      <Navbar title="TextMan" aboutText="About" />
      <div className="container mt-5">
        <Text_input_form />
      </div>
    </>
  );
}

export default App;
