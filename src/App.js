import Aiming from "./components/blocks/Aiming";
import Footer from "./components/blocks/Footer";
import Header from "./components/blocks/Header";
import About from "./components/blocks/About";
import Logo from "./components/blocks/Logo";
import Event from "./components/blocks/Event";
import Categories from "./components/blocks/Categories";
import Rules from "./components/blocks/Rules";

function App() {
  return (
    <div className='App'>
      <Logo />
      <Header />
      <About />
      <Categories />
      <Event />
        <Rules />
      <Aiming />
      <Footer />
    </div>

  );
}

export default App;
