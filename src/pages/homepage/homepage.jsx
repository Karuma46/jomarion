import Header from "components/hero"
import Menu from "./menu"
import Videos from "./videos"
// import Slider from "components/slider"
// import Section from "components/sections"
import Gallery from "./gallery"
import Cookout from "./cookouts"
import Footer from "components/footer"

function Home() {
  return (
    <div className="App">
      <Header/>
      <Menu />
      <Videos/>
      <Gallery />
      <Cookout />
      <Footer/>
    </div>
  );
}

export default Home;
