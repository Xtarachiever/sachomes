function Validation(values) {
    let errors = {};
    if(!values.email){
        errors.email = "Email is required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = " Email is invalid"
    }
    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 5){
        errors.password = "Password should be greater than 5"
    }
  return errors;
}

export default Validation