import React from 'react';

class InputImage extends React.Component {
  render() {
    const { cardImage, onInputChange } = this.props;
    return (
      <label htmlFor="image-input">
        Imagem :
        <input
          id="image-input"
          data-testid="image-input"
          type="text"
          name="image-input"
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
