export const marcas = [

    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'},
    
]

// con esto tengo un array de los ultimos 20 años
const yearmax = new Date().getFullYear();
export const years = Array.from(new Array(20), (valor, index)=> yearmax - index);

export const planes = [

    {id: 1, nombre: 'Básico'},
    {id: 2, nombre: 'Completo'},
  
    
]