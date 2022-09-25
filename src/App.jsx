import { CotizadorProvider } from "./contexts/CotizadorProvider";
import AppSeguro from "./components/AppSeguro";


function App() {
  return (
    <>
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
{/* 
      <AuthProvider>
       <LoginSeguro/>
      </AuthProvider> */}
    </>
    // exporto el provider creado y dentro meto los componentes esto gracias al children declarado en el componente cotizadorprovider
    // los datos que esten en el cotizador provider estaran disponibles en los componentes que esten dentro
    // esto rodea a toda la app completa
  );
}

export default App;

// el flujo del context en este ejercicio es:

// creo el context en la carpeta context, creo mis funciones o variables en ese context las meto dentro del value de ese context que ademas lleva un Children
// llamo al context donde necesite usarlo en este caso formulario formulario es un componente importado en el componente appseguro y app seguro es
// un componente importado en app.jsx por lo que tendre disponible todas las funciones que usare en mi formulario y todas las variables, generadas
// en el context, en el app.jsx importo el context y envuelvo todos mis componentes o los que necesite dentro del componente context
// PARA EL USO DE HOOKS creamos un hook  para llamar al context dedsde donde lo necesitemos sin necesidad de tener qye instanciar usecontext
// en todos los componentes , es otro component funcition llamado useCotizador importamos useContext importamos el context creado ,
// el return del hook es useContext(CotizadorContext)
