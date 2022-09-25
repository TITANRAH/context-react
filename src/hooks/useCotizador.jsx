

// podemos crear un hook para cada uno de los context

import { useContext } from "react";
import CotizadorContext from "../contexts/CotizadorProvider";



function useCotizador() {
  return ( useContext(CotizadorContext) )
}

export default useCotizador