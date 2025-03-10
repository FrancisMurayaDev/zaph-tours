import { Fragment } from "react";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Destination from "./Pages/Destination/Destination";
import TripTypes from "./Pages/TripTypes/TripTypes";
import Contact from "./Pages/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/trip-types" element={<TripTypes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
