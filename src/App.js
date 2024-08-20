import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects/Projects';
import  { Services } from './components/Services/Services'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Services/>
      <Projects/>
    </div>
  );
}

export default App;
 