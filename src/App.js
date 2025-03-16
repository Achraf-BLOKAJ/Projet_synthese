
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Gestion_personnel from './Composant/Gestion_personnel';
import Ajouter_employe from './Composant/Ajouter_employe';
import Modifier_employe from './Composant/Modifier_employe';

function App() {
  return (
    <>
    <div className="App">
      <h1>React Navigation (7ta tsawb navbar ) </h1> 
          
    </div>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Gestion_personnel />} />
      <Route path="/Ajouter_employe" element={<Ajouter_employe/>} />
      <Route path="/Modifier_employe/:id" element={<Modifier_employe/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
