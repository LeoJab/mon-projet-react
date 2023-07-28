import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Categorie from "./pages/Categorie";
import Plat from "./pages/Plat";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Accueil/> } />
        <Route path="categorie" element={ <Categorie/> } />    
        <Route path="plat" element={ <Plat/> } />    
        <Route path="contact" element={ <Contact/> } /> 
        {/*path="*" fonctionne si jamais l'url ne correspond à aucune route*/}
        <Route path="*" element= { <Accueil /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
