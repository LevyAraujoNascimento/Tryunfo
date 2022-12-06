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
  };

  OnInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { cardName, cardDescription, For,
      Vel, Int, cardImage, cardRare,
      cardTrunfo } = this.state;
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
