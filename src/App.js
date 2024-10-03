import "./App.css";
import Header from "./Components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import SideBaar from "./Components/SideBaar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
function App() {
  return (
    <>
      <Header />
      <SideBaar />
      <Main />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
