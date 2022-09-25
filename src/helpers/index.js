export function obtenerDiferenciaYear(year) {
  // diferencia de año con el año actual year representa el año elegido getfullyear el año actual
  return new Date().getFullYear() - year;
}

export function calcularPorMarca(marca) {

    // inicio la variable vacia y segun los casos del switch se llena con un valor 
  let incremento;

  switch (marca) {

    // COMO LA MARCA ES LA LLAVE DEL VALOR ID DE DEL OBJETO POR ESO USAMOS LA CONDICION DEL CASO SEGUN LA MARCA 
    case "1":
        incremento = 1.30 //ASI CALCULO PORCENTAJES DE UN NUMERO BASE Y PUEDO TRABAJAR CON ESTE VALOR COMO MULTIPLICARLO POR LA BASE O SUMARLO ETC
      break;
    case "2":
        incremento = 1.15
      break;
    case "3":
        incremento = 1.05
      break;
    default:
      break;
  }

  return incremento;

  // diferencia de año con el año actual year representa el año elegido getfullyear el año actual
//   return new Date().getFullYear() - year;
}


export function calcularPlan(plan){

    // si el plan es 1 suma el 20% si no (osea es 2 es la unica opcion extra) sumale el 50%
    return plan === '1' ? 1.2 : 1.5
}

export function formatearDinero(cantidad){
    return cantidad.toLocaleString('es-CL', {
        style: 'currency',
        currency: 'CLP'
    })
}
