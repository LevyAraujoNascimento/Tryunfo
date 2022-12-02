import React from 'react';

class InputCheckbox extends React.Component {
  render() {
    return (
      <label htmlFor="trunfo-input">
        Super Trunfo
        <input
          id="trunfo-input"
          data-testid="trunfo-input"
          type="checkbox"
          name="trunfo-input"
        />
      </label>
    );
  }
}

export default InputCheckbox;
