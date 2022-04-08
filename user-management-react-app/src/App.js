import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

import "./App.css";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute isLogged={isLogged} path="/home" />}>
            <Route exact path="/" element={<SignUp />}></Route>
          </Route>

          <Route element={<PrivateRoute isLogged={!isLogged} path="/" />}>
            <Route path="/home" element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
