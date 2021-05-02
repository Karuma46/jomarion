import Header from "components/header"
import Slider from "components/slider"
import Section from "components/sections"
import Gallery from "components/gallery"
import Cookout from "components/cookout"
import Footer from "components/footer"

function Home() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Section></Section>
      <Cookout></Cookout>
      {/* <Gallery></Gallery> */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
