import Navbar from "../../components/navbar/Navbar";
import LandHead from "./LandHead";
import LandBody from "./LandBody";
import Footer from "../../components/footer/Footer";
import NavMobile from "../../components/navMobile/NavMobile";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <NavMobile />
      <LandHead />
      <LandBody />
      <Footer />
    </>
  );
};

export default LandingPage;