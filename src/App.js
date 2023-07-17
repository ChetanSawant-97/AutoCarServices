import './App.css';
import './CSS/bootstrap/css/bootstrap.min.css';
import './CSS/bootstrap/js/bootstrap'
import Navbar from './components/Home/Navbar/Navbar';
import CheckPriceComp from './components/Home/CheckPriceComp/CheckPriceComp';
import AboutUs from './components/Home/AboutUs/AboutUs';
import ServicesProvided from './components/Home/ServicesProvided/ServicesProvided';
import VehicleCareFeatures from './components/Home/VehicleFeatures/VehicleCareFeatures';
import EasyService from './components/Home/EasySearvice/EasyService';
import OurPromise from './components/Home/OurPromise/OurPromise';
import Service from './components/Home/OurPromise/Service';
import FAQ from './components/Home/FAQ/FAQ';
import PriceList from './components/Home/PriceList/PriceList';
import OurPartners from './components/Home/Partners/OurPartners';
import CustomerReviews from './components/Home/HappyCustomers/CustomerReviews';
import Footer from './components/Home/Footer/Footer';
import LogIn from './components/Home/Forms/LogIn';


function App() {
  return (
    <div className="App bg-dark">
      <Navbar></Navbar>
      <CheckPriceComp></CheckPriceComp>
      <AboutUs />
      <ServicesProvided />
      <VehicleCareFeatures />
      <EasyService />
      <OurPromise />
      <Service />
      <CustomerReviews />
      <FAQ />
      <PriceList />
      <OurPartners />
      <Footer />
      <LogIn />
    </div>
  );
}

export default App;
