import React, { Component, Fragment } from 'react';
import './Home.css';

import ApiService from '../../Service/ApiService';
import BooksTable from '../../Components/BooksTable/BooksTable';

class Home extends Component {

  constructor(props) {

    super(props);

    this.state = {
      items: [],
    };
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
        <div id="page-home">
          <div className="content">
            <h1>Superobooks</h1>
            <BooksTable className="Table" columns={columns} data={this.state.items} details={this.details} />
          </div>
        </div>
      </Fragment>
    );
  };
}

export default Home;
