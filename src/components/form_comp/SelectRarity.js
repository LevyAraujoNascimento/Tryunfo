import React from 'react';
import PropTypes from 'prop-types';

class SelectRarity extends React.Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="cardRare">
        Raridade :
        <select
          id="cardRare"
          data-testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </label>
    );
  }
}

SelectRarity.propTypes = {
  cardRare: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default SelectRarity;
