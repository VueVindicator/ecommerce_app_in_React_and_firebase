import React, { Component } from 'react'
import './signup.component.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button-component/button-component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends Component  {
    constructor(){
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {

        e.preventDefault()

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword){
            alert('Password\'s don\'t match')
            return
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        }catch(error){
            console.log('This is the error', error)
        }
    }

    handleChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name] : value })
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        label="Name"
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        label="Email"
                        value={email}
                        handleChange={this.handleChange}
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        value={password}
                        handleChange={this.handleChange}
                        required
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Confrim Password"
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                    >
                    </FormInput>
                    <Button type="submit">Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp