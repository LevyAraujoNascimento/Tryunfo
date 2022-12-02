import React from 'react';

class InputDescription extends React.Component {
  render() {
    return (
      <label htmlFor="card-description">
        <textarea
          id="card-description"
          data-testid="description-input"
          name="card-description"
          rows="5"
          cols="50"
          maxLength="250"
        />
      </label>
    );
  }
}

export default InputDescription;
