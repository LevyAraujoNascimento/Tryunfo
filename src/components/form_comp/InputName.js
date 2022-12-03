import React from 'react';

class InputName extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;
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
          value={ cardName }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

InputName.propTypes = {
  cardName: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputName;
