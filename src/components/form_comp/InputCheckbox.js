import React from 'react';

class InputCheckbox extends React.Component {
  render() {
    const { cardTrunfo, onInputChange } = this.props;
    return (
      <label htmlFor="trunfo-input">
        Super Trunfo
        <input
          id="trunfo-input"
          data-testid="trunfo-input"
          type="checkbox"
          name="trunfo-input"
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
