import React, { Component, Fragment } from 'react';
import './Home.css';

import ApiService from '../../Service/ApiService';

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

    return (
      <Fragment>
        <div className="Home">
          <h1>Superobooks</h1>
        </div>
      </Fragment>
    );
  };
}

export default Home;
