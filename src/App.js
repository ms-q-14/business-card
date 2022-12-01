import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import UpperText from "./components/UpperText";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <UpperText />
      </div>
    </div>
  );
}

export default App;
