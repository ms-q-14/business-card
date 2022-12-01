import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpperText from "./components/UpperText";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <UpperText />
        <Footer />
      </div>
    </div>
  );
}

export default App;
