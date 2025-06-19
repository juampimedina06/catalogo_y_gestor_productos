import axios from 'axios'
const baseUrl = 'https://67c6be3c351c081993fe9984.mockapi.io/productos/producto'

const obtener = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const crear = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const actualizar = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const eliminar = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => {
    console.log(response.data)
  })
}



export default { obtener, crear, actualizar, eliminar }