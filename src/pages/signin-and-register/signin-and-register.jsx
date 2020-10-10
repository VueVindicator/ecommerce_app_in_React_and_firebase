import React from 'react'

import './signin-and-register.scss'
import SignIn from '../../components/signin.component/signin.component'
import SignUp from '../../components/signup.component/signup.component'
const SignInAndRegister = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndRegister