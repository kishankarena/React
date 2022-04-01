import "./App.css";
import Signup from "./components/SignUp/SignUp";
import bgimage from "./Images/bgimage.png";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Signup />
        </div>
        <div className="col">
          <img src={bgimage} className="" alt="bgimage" />
        </div>
      </div>
    </div>
  );
}

export default App;
