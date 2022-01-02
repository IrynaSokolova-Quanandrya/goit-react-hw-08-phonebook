import { useSelector } from "react-redux";
import { Navigate} from "react-router";
import { authSelectors } from "redux/auth";

export default function PrivateRoute ({ children}) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return isLoggedIn ? children : <Navigate to='/login'/>
       
        // <Route {...props}>
        // {isLoggedIn ? children : <Redirect to = "/login"/>}        
        // </Route>
        
    
}