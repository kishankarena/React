import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Signup />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
