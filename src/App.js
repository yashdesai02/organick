import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/style.css";
import { Homepage } from "./components/Homepage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Shop from "./components/Shop";
import About from "./components/About";
import Shopsingle from "./components/Shopsingle";
import Service from "./components/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Quality from "./components/Quality";
import Portfolio from "./components/Portfolio";
import Blackraspberry from "./components/Blackraspberry";
import Ourteam from "./components/Ourteam";
import News from "./components/News";
import Error from "./components/Error";
import Blogsingle from "./components/Blogsingle";
import Cart from "./components/Cart";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import CreateContext from "./components/context/CreateContext";
import Header from "./components/common-components/Header";
import Footer from "./components/common-components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      offset: 200, // Offset (in px) from the original trigger point
      delay: 0, // Delay (in ms) before the animation starts
      duration: 600, // Duration (in ms) of the animation
      easing: "ease-in-sine", // Easing function
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  const [user, setUser] = useState(0);

  useEffect(() => {
    let products = JSON.parse(localStorage.getItem("cart_item"));
    console.log(products, "============>");
    setUser(products ? products.length : 0);
  }, [setUser]);

  return (
    <>
      <CreateContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shopsingle" element={<Shopsingle />} />
            <Route path="/service" element={<Service />} />
            <Route path="/servicesingle" element={<Quality />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blackraspberry" element={<Blackraspberry />} />
            <Route path="/ourteam" element={<Ourteam />} />
            <Route path="/news" element={<News />} />
            <Route path="/blogsingle" element={<Blogsingle />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CreateContext.Provider>
    </>
  );
}

export default App;
