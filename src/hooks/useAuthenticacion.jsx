
import {useContext} from 'react'
import AuthContext from '../contexts/AuthProvider'


function useAuthenticacion() {
  return (useContext(AuthContext))
}

export default useAuthenticacion