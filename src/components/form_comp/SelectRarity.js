import React from 'react';

class SelectRarity extends React.Component {
  render() {
    const { cardRare, onInputChange } = this.props;
    return (
      <label htmlFor="rarity">
        Raridade :
        <select
          id="rarity"
          data-testid="rare-input"
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
