import {Component} from 'react'

class Login extends Component {
  state = {name: 'rahul', password: 'rahul@2021'}

  getToken = async () => {
    const {name, password} = this.state
    const userDetails = {name, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <h1>
        <h1>Please Login</h1>
        <button onClick={this.getToken}>Login with Sample Creds</button>
      </h1>
    )
  }
}

export default Login
