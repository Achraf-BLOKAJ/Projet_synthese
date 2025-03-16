const initialState = {
    employees:[
        {id:1, nom:'BLOKAJ', prenom:'Achraf', poste:'Développeur', statut:'Actif'},
        {id:2, nom:'JOHN', prenom:'Cina', poste:'Développeur', statut:'Actif'},
        {id:3, nom:'HAYAT', prenom:'Hamza', poste:'Formateur', statut:'Actif'},

    ]
};
const reducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_EMPLOYEE':
            return {...state, employees:[...state.employees, action.payload]};
            
        case 'EDIT_EMPLOYEE':
            const employee = state.employees.find(emp => emp.id === parseInt(action.payload.id))
            if(employee){
                employee.nom = action.payload.nom
                employee.prenom = action.payload.prenom
                employee.poste = action.payload.poste
                employee.statut = action.payload.statut
            }

            return state;
        case 'DELETE_EMPLOYEE':
            return {...state, employees:[...state.employees.filter(emp => emp.id !== parseInt (action.payload))]}
            default:
                return state
    }

}
export default reducer;