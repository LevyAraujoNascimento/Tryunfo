import React from 'react';

class InputDescription extends React.Component {
  render() {
    const { cardDescription, onInputChange } = this.props;
    return (
      <label htmlFor="cardDescription">
        <textarea
          id="cardDescription"
          data-testid="description-input"
          name="cardDescription"
          rows="5"
          cols="50"
          maxLength="250"
          value={ cardDescription }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

InputDescription.propTypes = {
  cardDescription: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputDescription;
