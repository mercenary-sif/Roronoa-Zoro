import './App.css';
import { Navbar , Brand, CTA} from './components';
import {FightingStyle, Footer, Header , KingOfHell, TheCrow, WhoIsZoro} from './containers'
function App() {
  return (
    <div className="App">
     <div className="Gradient__bg">
     <Navbar/>
     <Header/>
     </div>
     <Brand/>
     <WhoIsZoro/>
     <FightingStyle/>
     <KingOfHell/>
     <CTA/>
     <TheCrow/>
     <Footer/>
    </div>
  );
}

export default App;
