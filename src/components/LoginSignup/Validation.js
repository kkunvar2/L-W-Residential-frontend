import React from 'react'

const Validation = (values) => {
    let errors = {}
    //Password
    if(values.password != values.cnPassword){
        errors.password = "Password Didn't Match"
    }
    return errors;
}

export default Validation
