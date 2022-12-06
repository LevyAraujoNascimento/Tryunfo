import React from 'react';
import PropTypes from 'prop-types';

class InputCheckbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="cardTrunfo">
        Super Trunfo
        <input
          id="cardTrunfo"
          data-testid="trunfo-input"
          type="checkbox"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

InputCheckbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputCheckbox;
