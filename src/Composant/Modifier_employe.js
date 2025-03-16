import { useParams } from "react-router-dom"
import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { modifieremployeAction } from '../reduce/Action';
import { useNavigate } from 'react-router-dom';

function Modifier_employe(){
    const {id}= useParams();
        const employe = useSelector(state => state.employees.find((emp)=>emp.id === parseInt(id)));
    
    const [nom, setNom] = useState(employe.nom);
    const [prenom, setPrenom] = useState(employe.prenom);
    const [poste, setPoste] = useState(employe.poste);
    const [statut, setStatut] = useState(employe.statut);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick = () =>{
        dispatch(modifieremployeAction({
            id: id,
            nom: nom,
            prenom: prenom,
            poste: poste,
            statut: statut

        }))
        navigate('/')
    }
    return(
        <>
            <h1>Modifier employé</h1>
            <h2>Id employé: {id}</h2>

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
                    <button type="button" onClick={handleClick}>Enregistrer</button>
                    
                </form>
            </div>
        </section>
        </>
    );
}
export default Modifier_employe