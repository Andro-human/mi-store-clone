import './App.css';
import PreNavBar from './components/PreNavBar';
import NavBar from './components/NavBar.js';
import Slider from './components/Slider.js';
import data from './data/data.json'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Offers from './components/Offers.js'
import Heading from './components/Heading.js'
import StarProducts from './components/StarProducts.js'
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js'
import ProductReviews from './components/ProductReviews.js'
import Videos from "./components/Videos.js"
import BottomSlider from './components/BottomSlider';
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'


function App() {
  return (
    <Router>
      <PreNavBar />

      <NavBar />

      <NavOptions />

      <Slider start={data.banner.start}/>

      <Offers offer={data.offer}/>

      <Heading text="STAR PRODUCTS"/>
      <StarProducts starProduct={data.starProduct}/>
      
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      
      <Routes>
        <Route exact path="/music" element={<HotAccessories elem={data.hotAccessories.music} elemCover={data.hotAccessoriesCover.music}/>} />
        <Route exact path="/smartDevices" element={<HotAccessories elem={data.hotAccessories.smartDevice} elemCover={data.hotAccessoriesCover.smartDevice}/>} />
        <Route exact path="/home" element={<HotAccessories elem={data.hotAccessories.home} elemCover={data.hotAccessoriesCover.home}/>} />
        <Route exact path="/lifestyle" element={<HotAccessories elem={data.hotAccessories.lifeStyle} elemCover={data.hotAccessoriesCover.lifeStyle}/>} />
        <Route exact path="/mobileAccessories" element={<HotAccessories elem={data.hotAccessories.mobileAccessories} elemCover={data.hotAccessoriesCover.mobileAccessories}/>} />
      </Routes>
 
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews}/>

      <Heading text="VIDEOS" />
      <Videos videos={data.videos}  />

      <Heading text="IN THE PRESS"  />
      <BottomSlider end={data.banner.end} />

      <Footer footer={data.footer}/>

    </Router>
  );
}

export default App;
