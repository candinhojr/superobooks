import React, { Component, Fragment } from 'react';
import './Home.css';

import ApiService from '../../Service/ApiService';
import BooksTable from '../../Components/BooksTable/BooksTable';
import Header from '../../Components/Header/Header';

class Home extends Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [],
      inputSearchValue: '',
    };
  }

  bookSearchOnChange = input => {
    const params = `Busca=${input}`
    ApiService.SearchBooks(params)
      .then(res => {
        if (res) this.setState({ items: [...res.items] })
      })
      .catch(error => console.log(`Erro na comunicação com a API ao tentar pesquisar os livros - log(${error})`));
  }

  details = id => {
    ApiService.ListBook(id)
      .then(res => {
        if (res) {
          alert(JSON.stringify(res))
        }
      })
      .catch(error => console.log(`Erro na comunicação com a API ao tentar listar o livro - log(${error})`));
  }

  componentDidMount() {

    ApiService.ListBooks()
      .then(res => {
        if (res) this.setState({ items: [...this.state.items, ...res.items] })
      })
      .catch(error => console.log(`Erro na comunicação com a API ao tentar listar os livros - log(${error})`));
  }

  render() {

    const columns = [
      { id: 'titulo', label: 'Livro' },
      { id: 'autor', label: 'Autor' },
      { id: 'editora', label: 'Editora' },
      { id: 'ano', label: 'Ano', align: 'right' },
    ];

    return (
      <Fragment>
        <Header bookSearchOnChange={this.bookSearchOnChange} inputSearchValue={this.state.inputSearchValue} />
        <div className="main">
          <BooksTable className="Table" columns={columns} data={this.state.items} details={this.details} />
        </div>
      </Fragment>
    );
  };
}

export default Home;
