import {withRouter, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Headers from '../Header'

const Home = props => {
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
      <h1>Home Route</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default withRouter(Home)
