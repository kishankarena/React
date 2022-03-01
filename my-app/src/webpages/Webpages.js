import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

import Home from "./Home";
import MyBooks from "./Mybooks";
import Favorites from "./Favorites";

const Webpages = () => {

    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home />} ></Route>
                <Route path="/MyBooks" element={<MyBooks />}></Route>
                <Route path="/Favorites" element={<Favorites />}></Route >
            </Routes>
        </BrowserRouter>
    )
};

export default Webpages;