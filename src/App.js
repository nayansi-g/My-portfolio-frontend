import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./Pages/Home/Home";
import About from "./Pages/Home/About";
import Skills from "./Pages/Home/Skills";
import Projects from "./Pages/Home/Projects";
import Contact from "./Pages/Home/Contact";
import Footer from "./Pages/Home/Footer";
import axios from "axios"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetPortfolioData } from "./redux/rootSlice";
import Header from "./Components/Header";

function App() {
  const {loading , portfolioData} = useSelector((state)=>state.root)

  const dispatch = useDispatch()

  const getPortfolioData = async () => {
    try {
      const response = await axios.get("/api/portfolio/get-portfolio-data")
      dispatch(SetPortfolioData(response.data));

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPortfolioData();
  }, [])

  useEffect(()=>{
    console.log(portfolioData)
  },[portfolioData])


  return (
    <div className="App">
      <BrowserRouter>
      {loading ? <h1 className="text-5xl flex justify-center align-items-center">Loading....</h1> :null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
