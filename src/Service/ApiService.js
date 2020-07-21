import axios from 'axios'

const api = axios.create({
    baseURL: 'http://biblioteca.supero.com.br/api/Livros'
})

const ApiService = {

    ListBooks: params => api.get(`${params}`),
    BookById: id => api.get(`/${id}`),
}

export default ApiService