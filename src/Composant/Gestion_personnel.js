import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteemployeAction } from "../reduce/Action";
function Gestion_personnel(){
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employees);
    return(
        <div>
             <section class="gestion-personnel">
            <div class="container">
                <h1>Gestion du Personnel</h1>
                <Link to="/Ajouter_employe" >
                    <button class="add-employee">Ajouter un employé</button>
                </Link>

                <table class="employee-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Poste</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{emp.id}</td>
                                        <td>{emp.nom}</td>
                                        <td>{emp.prenom}</td>
                                        <td>{emp.poste}</td>
                                        <td>{emp.statut}</td>
                                        <td>
                                           <Link to={ `/Modifier_employe/${emp.id}`}><button class="edit-employee" >Modifier</button></Link>
                                            <button class="delete-employee" onClick={() => dispatch(deleteemployeAction(emp.id))}>Supprimer</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
</tbody>
                </table>
            </div>
        </section>
                      </div>
    );
}
export default Gestion_personnel;