import CreateNFTs from "./components/CreateNFTs";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Hero from "./components/Hero";
import LiveBidding from "./components/LiveBidding";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LiveBidding />
      <CreateNFTs />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;
