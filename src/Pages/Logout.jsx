import { getAuth } from "firebase/auth";
import { useEffect } from "react"


const Logout = () => {

    const currentUser = getAuth();

    useEffect  (() => { 
            currentUser.signOut()
      }, [currentUser]);
}

export default Logout;