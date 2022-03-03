import React, {useState} from 'react';
import Login from './Login'
import Signup from './Signup';
import Button from '@mui/material/Button';
// import { Formik, Form } from 'formik';
// import { TextFieldBox } from './TextFieldBox';
// import * as Yup from 'yup';

export const AuthForm = () => {
    const [hasAccount, setHasAccount] = useState(false)
    return(
        <>
    { hasAccount ?<> <Login />
        <p>Don't have an account?  <Button onClick={() => setHasAccount(!hasAccount)} >Sigup here! </Button>  </p>
    </> :
    <><Signup />
    <p>Already have an account? <Button onClick={() => setHasAccount(!hasAccount)} >Login here!</Button>  </p>
    </>}
    </>
    )

}

export default AuthForm