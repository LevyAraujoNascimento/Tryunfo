import React from 'react';

class SelectRarity extends React.Component {
  render() {
    return (
      <label htmlFor="rarity">
        Raridade :
        <select id="rarity" data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
      </label>
    );
  }
}

export default SelectRarity;
