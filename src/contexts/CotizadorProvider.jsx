import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularPorMarca, calcularPlan, formatearDinero } from "../helpers";

// declaro el contex
// despues lo pongo dentro de la funcion component con su children agregando el .Provider
const CotizadorContext = createContext();
// creo el objeto que me entrega el handleChangeDatos

// provider es de donde nacen o cual es la fuente de los datos

// children es equivalente a lo que pasaramos a ese componente los children seran los componentes que metamos dentro en app.jsx
function CotizadorProvider({ children }) {
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  // para validar el fomrulario para eso lo usamos
  const [error, setError] = useState("");
//   creamos el state de resultado y le pasamos resultado de la funcion cotizarSeguro
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  // COTIZADOR REAL
  const handleChangeDatos = (e) => {
    // siempre tomar copia del objeteo cuando el state sea un objeto, ya que mantiene las propiedades aunque esten vacias algunas
    setDatos({
      // es decir, que el objeto en el components del navegador quedaria , marca: '', year :'1998', plan: '', si no pusiera los ... no tomaria lo que hay aunque este vacio y reemplazaria el valor seleccionado
      // dejando fuera los otros campos
      ...datos,
      [e.target.name]: e.target.value,

      //  ejem del codigo aca arriba year: 1998 o marca: 'Europeo'
    });

    console.log(e.target.name); //mostrara nombre marca o año
    console.log(e.target.value); // mostrara el valor marca o año
  };

  const cotizarSeguro = () => {
    console.log("cotizando..");

    //una base

    // por cada año de diferencia el 2000 baja un 3%
    let resultado = 2000;

    // obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);

    // para restar el 3% de 2000

    console.log("diferencia de año actual con año seleccionado", diferencia);

    console.log(
      "resultado de sacar el 3% de 2000 en base a la diferencia de años",
      (diferencia * 3 * resultado) / 100
    );

    resultado = resultado - (diferencia * 3 * resultado) / 100;

    console.log("resultado de 2000 menos el 3%", resultado);

    // americano 15%
    // europeo 30%
    // asiatico 5%

    resultado = resultado * calcularPorMarca(datos.marca);
    console.log("resultado * % segun marca", resultado);


    //basico 20%
    // completo 50%

    resultado = resultado * calcularPlan(datos.plan)
    console.log("resultado segun plan", resultado);

    //redondear decimales
    //resultado = resultado.toFixed(2)

    // PASARLO A PESO CHILENO

    resultado = formatearDinero(resultado);
    console.log("resultado formateado", resultado);

    setCargando(true);

    setTimeout(() => {
        setResultado(resultado)
        setCargando(false);

    }, 3000);

   

    // IMPORTANTE

    // EL RESULTADO DE RESULTADO VA EN CASCADA DANDOSE SEGUN LOS VALORES QUE VAYAN RESULTANDO PRIMEROS
  };

  // ESTUDIOS EJEMPLOS PARA USAR CONTEXT

  // si los state se utilizan solo en un componente no es nexesario crear el context
  // const [modal, setModal] = useState(false)

  // puedo pasar el setModal directamente o crear esta funcion intermedia para no pasar directamente el setModal y llamarla desde el componente
  // const changeModal = () => {

  // puede ser esta forma para pasarlo a true o la de abajo que muestra el contrario de lo actual, si esta false pulso y pasa a true y viceversa
  //setModal(true)
  //     setModal(!modal)
  // }

  // aca realizo funcionalidades que despues dispongo en el value para ser utilizados por otros componentes
  // puedo pasar variables o funciones para disponibilizarlas en mis componentes
  // const hola = "hola mundo";

  // const fnHolaMundo = () => {
  // console.log('hola mundo desde una funcion')
  // }

  return (
    <CotizadorContext.Provider
      value={{
        handleChangeDatos,
        datos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
        // EJEMPLO DE CONTEXT
        // hola: hola,
        // fnHolaMundo : fnHolaMundo
        // modal: modal,
        // changeModal: changeModal
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
}

export { CotizadorProvider };

export default CotizadorContext;
