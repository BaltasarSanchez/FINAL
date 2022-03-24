//Verifica que el token sea uno válido para mostrar la vista de productos
(async () => {
    const respuesta = await fetch('/auth', {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
      });
    //Si no es válido redirecciona al login
    if (respuesta.status != 200) {
        return location.href = '/login'
    }
})()
//sino prosigue con la ejecución
location.href = '/carrito'
