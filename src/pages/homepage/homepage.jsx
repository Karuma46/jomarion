import React,{useEffect} from "react"
import Header from "components/header"
import Hero from "components/hero"
import Menu from "./menu"
import Videos from "./videos"
import Gallery from "./gallery"
import Cookout from "./cookouts"
import Footer from "components/footer"

function Home() {

  useEffect(() => {
    var header = document.getElementById('header');
    header.style.top = '-85px';
    window.onscroll = () => {
      if(window.scrollY > 600){
        header.style.top = '0px';
      } else {
        header.style.top = '-85px';
      }
    }
  },[])

  return (
    <div className="App">
      <Header />
      <Hero/>
      <Menu />
      <Videos/>
      <Gallery />
      <Cookout />
      <Footer/>
    </div>
  );
}

export default Home;
