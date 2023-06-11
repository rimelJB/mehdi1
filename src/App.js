import  {
  Routes,
  Route,
  
} from "react-router-dom";


import Home from './Pages/Home'
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/Footer";
import Courses from "./Components/cours-section/Courses";
import Listcours from "./redux/Pagecorses/Listcours";
import Addcours from "./redux/Pagecorses/Addcours";

function App() {
  return (
    <div>
     
    <Header/>
     <Routes>
     <Route
          exact
          path="/Home"
          element={<Home />}
        />
         <Route
          exact
          path="/Courses"
          element={<Courses />}
        />
    </Routes>
    <Footer/>
    
    </div>
  )
}

export default App