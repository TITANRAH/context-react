import {useCallback, useMemo, useRef} from 'react'
import useCotizador from '../hooks/useCotizador'
import {marcas, planes} from '../constants'

// USAR USE REF USE CALLBACK O USE MEMO ES SEGUN EL PROBLEMA, NO ES MUY RECOMENDABLE USALO EN TODOS LOS COMPONENTES
// LOS 3 HACEN COSAS SIMILIARES RESPECTO AL RE RENDER PERO EL USE MEMO ES MEJOR PARA HACERLO

function Resultado() {

    // traigo datos del provider
    const {resultado, datos} = useCotizador();

    // desestructuro datos para mostrar en un resumen de cotizacion
    const {marca, year, plan} = datos;

    // HACE LO MISMO QUE USECALLBACK
    const yearRef = useRef(year);

    // nombre marca es igual al filtrado de marca.id igual a marca string pasado a number, marca me lo traje desde las constants el arreglo marcas
    // y marca es lo que viene en el datos que es un state objeto traido desde el provider 

    // el re render se hara solamente cuando cambie la variable resultado, eso realiza useCallback, asi evito que al cambia de marca se haga
    // el re render, solo hasta que resultado cambie y eso cambia al apretar el boton cotizar lo mismo para el plan

    // CON USECALLBACK
    // const [nombreMarca] = useCallback(marcas.filter(m => m.id === Number(marca)), [resultado]) 
    // const [nombrePlan] = useCallback(planes.filter(p => p.id === Number(plan)), [resultado] )

     
    const [nombreMarca] = useMemo(() => marcas.filter(m => m.id === Number(marca)), [resultado]) 
    const [nombrePlan] = useMemo(() => planes.filter(p => p.id === Number(plan)), [resultado] )


    // me devuelve un arreglo, podria tomarlo con nombreMarca[0] pero se prefiere la forma de arriba con corchetes
    console.log(nombreMarca);

    if(resultado === 0) return null;

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow'>
        <h2 className='text-gray-600 font-black text-3xl'>
            Resumen
        </h2>

        <p className='my-2'>
            <span className='font-bold'> Marca: </span>
            {nombreMarca.nombre}
        </p>
        <p className='my-2'>
            <span className='font-bold'> Plan: </span>
            {nombrePlan.nombre}
        </p>

        <p className='my-2'>
            <span className='font-bold'> Año del auto: </span>
            {yearRef.current}
        </p>


        <p className='my-2 text-2xl'>
            <span className='font-bold'> Total cotización: </span>
            {resultado}
        </p>
    </div>
  )
}

export default Resultado