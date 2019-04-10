import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import rxotc from './myctc';

class App extends Component {
	
  constructor(props){
    super(props);
    this.state = { activoSubyacente: 'TBD',  value: '', message: '' };
   }
   
   async componentDidMount() {
    const activoSubyacente = await rxotc.methods.activoSubyacente().call();
    console.log(activoSubyacente);
    this.setState({ activoSubyacente });
  }
  
  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Esperando a completar la transaccion...' });

    await rxotc.methods.setActivoSubyacente(this.state.value).send({
      from: accounts[0]
    });

    this.setState({ message: 'Transaccion completa.!' });
  };
	
  render() {
    //console.log(web3.version);
    //web3.eth.getAccounts().then(console.log);	
    return (
      <div>
        <h2>Rofex OTC Contract</h2>
        <p>El activo subyacente de este contrato es::  {this.state.activoSubyacente}.</p>
        <hr />
        
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Cargar el Subyacente del Contrato </label>
            <input
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </div>
          <button>Enviar</button>
        </form>
        <hr />

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
