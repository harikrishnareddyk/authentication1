import {Redirect, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Headers from '../Header'

const About = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  const logout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <Headers />
      <h1>About Route</h1>

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default withRouter(About)
