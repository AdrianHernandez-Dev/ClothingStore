import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import { withRouter } from 'react-router-dom'
import './sign-in.style.scss'

class SignIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }

  render(){
    return (
      <div className='sign-in'>
        <h2 className=''>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
          name='email'
          type='email' 
          handleChange={this.handleChange}
          value={this.state.email} 
          label="email"
          required />

          <FormInput 
          name='password'
          type='password' 
          handleChange={this.handleChange}
          value={this.state.email} 
          label="password"
          required />

          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)