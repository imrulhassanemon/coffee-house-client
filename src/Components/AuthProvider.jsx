import { createContext, useState } from "react";
import auth from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export  const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createEmailandPasswor = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const AuthInfo = {
        name: 'imrul',
        createEmailandPasswor,

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;