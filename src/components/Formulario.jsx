
import { marcas, years, planes } from "../constants";
import { Fragment } from "react";
import useCotizador from "../hooks/useCotizador";
import Error from "./Error";

function Formulario() {

    const {datos,handleChangeDatos, error, setError, cotizarSeguro} = useCotizador()

    // essta funcion no la hacemos en el provider por que no es necesario 
    const handleSubmit = e =>{
        e.preventDefault()

        // revisamos si los valores no vienen vacios primeramente 
        if(Object.values(datos).includes('')){
            setError('Error, campos obligatorios')
            return 
        }

        setError('')

        cotizarSeguro();
        
    }

    // const {modal, changeModal} = useCotizador()

    // const {modal, changeModal} = useContext(CotizadorContext)

    // console.log('modal desde FORMULARIO', modal)

    // con esta forma llamo al context realizado y tenemos acceso solo a lo que esta dentro del context
    // const {hola, fnHolaMundo} = useContext(CotizadorContext)

    //console.log(hola);
    // ESTA FUNCION VIENE DESDE EL CONTEXT
    //fnHolaMundo();
  return (
    <>
    {/* <button onClick={changeModal}>
        cambiar modal del context
    </button> */}
        
        {/* en caso de error muestra el componente Error */}
        {error && <Error/>}
      <form action="">
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>

          <select
            name="marca"
            id=""
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">-- Selecciona Marca --</option>

            {marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>

          <select
            name="year"
            id=""
            className="w-full p-3 bg-white border border-gray-200"
            onChange={e => handleChangeDatos(e)}

            // el dato seteado desde el provider lo pongo a disposicion en el provider y luego lo invoco aca en el useCotizador 
            // que es el hook intermediario entre mis componentes y mi provider
            value={datos.year}
          >
            <option value="">-- Selecciona Año --</option>

            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Plan
          </label>

          <div className="flex gap-3">
            {planes.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input type="radio" name="plan" value={plan.id} onChange={e => handleChangeDatos(e)} />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
          value='Cotizar'
          onChange={e => handleChangeDatos(e)}
          onClick={handleSubmit}
       />
      </form>
    </>
  );
}

export default Formulario;
