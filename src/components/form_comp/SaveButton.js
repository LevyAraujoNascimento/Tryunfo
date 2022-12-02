import React from 'react';

class SaveButton extends React.Component {
  render() {
    return (
      <button id="save" type="submit" data-testid="save-button">Salvar</button>
    );
  }
}

export default SaveButton;
