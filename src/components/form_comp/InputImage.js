import React from 'react';

class InputImage extends React.Component {
  render() {
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
        />
      </label>
    );
  }
}

export default InputImage;
