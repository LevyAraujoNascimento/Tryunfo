import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    For: '',
    Vel: '',
    Int: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };
  
  TesteUm = () => {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    if (cardName.length > 0 &&
        cardDescription.length > 0 &&
        cardImage.length > 0 &&
        cardRare.length > 0) {
          return true;
    }
    return false
  }

  TesteDois = () => {
    const { For, Vel, Int } = this.state;
    const result = Number(For) + Number(Vel) + Number(Int);
    if (Number(For) < 0 || Number(Vel) < 0 || Number(Int) < 0) {
      return false;
    }
    if (Number(For) > 90 || Number(Vel) > 90 || Number(Int) > 90) {
      return false;
    }
    if (result > 210) {
      return false;
    }
    return true;
  }

  OnInputChange = async ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    await this.setState({
      [name]: value,
    });
    if (this.TesteUm() && this.TesteDois()) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  render() {
    const { cardName, cardDescription, For,
      Vel, Int, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ For }
          cardAttr2={ Vel }
          cardAttr3={ Int }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.OnInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ For }
          cardAttr2={ Vel }
          cardAttr3={ Int }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.OnInputChange }
        />
      </div>
    );
  }
}

export default App;
