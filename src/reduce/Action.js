export const addemployeAction = (employee) => {
  return {
    type: "ADD_EMPLOYEE",
    payload: employee
  };
}
export const modifieremployeAction = (newemployee) => {
    return {
        type: "EDIT_EMPLOYEE", 
        payload: newemployee
    };
}
export const deleteemployeAction = (id) => {
  return {
    type: "DELETE_EMPLOYEE", 
    payload: id
  };
}
