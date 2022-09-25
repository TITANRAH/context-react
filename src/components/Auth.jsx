
import useAuthenticacion from '../hooks/useAuthenticacion'



function Auth() {

    const {isLogin, Login} = useAuthenticacion()


    
  return (

    <>
    <button onClick={()=>Login()}>boton</button>
    <h1>{isLogin}</h1>

    

  
    </>
  )
}

export default Auth