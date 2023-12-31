import React from 'react';
import PropTypes from 'prop-types';

class InputName extends React.Component {
  render() {
    const { cardName, onInputChange } = this.props;
    return (
      <label htmlFor="cardName">
        Nome da Carta :
        <input
          id="cardName"
          data-testid="name-input"
          type="text"
          name="cardName"
          maxLength="50"
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
