import React from 'react'
import FormInput from '../form-input/form-input.component'
import Button from '../button-component/button-component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
import './signin.component.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name] : value})
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        type="email"
                        value={this.state.email} 
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name="password" 
                        type="password"
                        value={this.state.password}
                        label="Password" 
                        handleChange={this.handleChange}
                        required
                    />
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                    <   Button onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</Button>
                    </div>
                    {/* The children props received in the button component represents the text enclosed in the Buutton tags */}
                </form>
            </div>
        )
    }
}

export default SignIn