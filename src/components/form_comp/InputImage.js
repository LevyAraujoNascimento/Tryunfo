import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label htmlFor="cardImage">
        Imagem :
        <input
          id="cardImage"
          data-testid="image-input"
          type="text"
          name="cardImage"
          maxLength="30"
          required
          value={ cardImage }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  cardImage: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputImage;
