
import Aboutt from "./components/blocks/Aboutt";
import Aiming from "./components/blocks/Aiming";
import Rules from "./components/blocks/Rules";
import Footer from "./components/blocks/Footer";
import Headerr from "./components/blocks/Headerr";
import Program from "./components/blocks/Program";
import Features from "./components/blocks/Features";
import Category from "./components/blocks/Category";
import Awards from "./components/blocks/Awards";

function App() {
  return (
      <div className='App'>
          <Headerr />
          <Aboutt/>
          <Program />
          <Features/>
          <Category/>
          <Awards/>
          <Rules/>
          <Aiming/>
          <Footer/>
      </div>

  );
}

export default App;
