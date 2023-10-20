import {Link} from 'react-router-dom'

const Headers = () => {
  const x = 1
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </div>
  )
}

export default Headers
