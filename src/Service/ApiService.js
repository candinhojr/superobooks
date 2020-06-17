const urlBase = 'http://biblioteca.supero.com.br/api/Livros';

const consumesApi = (parameter = '', method = 'GET', body) => {
    return fetch(`${urlBase}${parameter}`, {
        method,
        headers: { 'content-type': 'application/json' },
        body
    })
        .then(res => ApiService.HandleErrors(res))
        .then(res => res.json())
}

const ApiService = {

    ListBooks: () => consumesApi(),

    ListBook: id => consumesApi(`/${id}`, 'GET'),

    SearchBooks: params => consumesApi(`?Busca=${params}`, 'GET'),

    HandleErrors: res => {
        if (!res.ok) throw Error(res.responseText);

        return res;
    }
}

export default ApiService;