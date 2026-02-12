

import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
     <Link to="/">Home</Link> <br />
     <Link to="/dashboard">Dashboard</Link> <br />
     <Link to="/login">Login</Link>
    </div>
  )
}

export default LandingPage