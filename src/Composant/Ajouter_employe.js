import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addemployeAction } from '../reduce/Action';
import { useNavigate } from 'react-router-dom';

function Ajouter_employe(){
    const count = useSelector(state => state.employees.length);
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [poste, setPoste] = useState("");
    const [statut, setStatut] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () =>{
        dispatch(addemployeAction({
            id: count + 1,
            nom: nom,
            prenom: prenom,
            poste: poste,
            statut: statut

        }))
        navigate('/')
    }
    return(
        <>
            

            <section className="add-employee-form">
            <div className="container">
                <h1>Ajouter un employé</h1>
                <form  id="add-employee-form">
                    <div className="input-group">
                        <label for="nom">Nom:</label>
                        <input type="text" id="nom" name="nom" value={nom} onChange={(e)=>setNom(e.target.value)} required />
                    </div>

                    <div className="input-group">
                        <label for="prenom">Prénom:</label>
                        <input type="text" id="prenom" name="prenom" value={prenom} onChange={(e)=>setPrenom(e.target.value)} required />
                    </div>

                    <div className="input-group">
                        <label for="poste">Poste:</label>
                        <input type="text" id="poste" name="poste" value={poste} onChange={(e)=>setPoste(e.target.value)} required />
                    </div>

                    <div className="input-group">
                        <label for="statut">Statut:</label>
                        <select id="statut" name="statut" value={statut} onChange={(e)=>setStatut(e.target.value)} required>    
                            <option value="CDI">CDI</option>
                            <option value="CDD">CDD</option>
                            <option value="Stage">Stage</option>
                            <option value="Interim">Intérim</option>
                        </select>
                    </div>
                    <button type='button' onClick={handleClick}>Enregistrer</button>
                    
                </form>
            </div>
        </section>
        </>
    );
}
export default Ajouter_employe;
