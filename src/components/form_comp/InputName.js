import React from 'react';

class InputName extends React.Component {
  render() {
    return (
      <label htmlFor="card-name">
        Nome da Carta :
        <input
          id="card-name"
          data-testid="name-input"
          type="text"
          name="card-name"
          maxLength="30"
          required
        />
      </label>
    );
  }
}

export default InputName;
