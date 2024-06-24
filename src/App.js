import './App.css';
import Navbar from "./component/navbar/navbar"
import Section1 from './component/section1/section1';
import Section2 from './component/section2/section2';
import Section3 from './component/section3/section3';
import Section4 from './component/section4/section4';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default App;
