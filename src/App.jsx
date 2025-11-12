import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <Navbar />
      <div className="pt-[110px]"> {/* space for fixed bars */}
        <Home />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
