import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import hero from "./assets/images/hero.svg";

const App = () => {
  return (
    <div className="m-0 p-0 box-border scroll-smooth tracking-wide ">
      <Navbar />
      <main
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
