import React from 'react'
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

                <form>
                    <input 
                        name="email" 
                        type="email"
                        value={this.state.email} 
                        onChange={this.handleChange}
                        required
                    />
                    <input 
                        name="password" 
                        type="password"
                        value={this.state.password} 
                        required
                    />
                </form>
            </div>
        )
    }
}

export default SignIn