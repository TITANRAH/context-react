// paso 1 creamos importamos el createContext

import { createContext, useState } from "react";

const AuthContex = createContext();

function AuthProvider({ children }) {

  
//   const [isLogin, setIsLogin] = useState('');

//   const Login = () => {
//     setIsLogin('LOGEADO');
//   };

  return (
    <AuthContex.Provider
      value={{
        // isLogin,
        // Login,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
}

export { AuthProvider };

export default AuthContex;
