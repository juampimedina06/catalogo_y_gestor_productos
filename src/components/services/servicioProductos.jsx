import axios from 'axios'
const baseUrl = 'https://67c6be3c351c081993fe9984.mockapi.io/productos/producto'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const eliminar = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => {
    console.log(response.data)
  })
}



export default { getAll, create, update, eliminar }