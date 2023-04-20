import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/button.component';

interface Props {
}

interface State {
  novoModal: boolean;

}

export default class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = { novoModal: false };
  }

  handleOpenCloseModal() {
    console.log(this.state)
    this.setState({ novoModal: !this.state.novoModal })
  }

  render(){
  return(
    <div className = "App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent novoModal={this.state.novoModal}
          handleOpenCloseModal={() => this.handleOpenCloseModal()} />
        <h6>
          Edit <code>src/App.tsx</code> and save to reload.
        </h6>
      </header>
    </div>
  );
}
}