import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";



function SecureRoute({children}) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

    if(authCtx.user == null) {
        return navigate("/");
    }

    return children
}

export default SecureRoute