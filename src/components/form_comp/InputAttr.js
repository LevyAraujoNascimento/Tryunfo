import React from 'react';
import PropTypes from 'prop-types';

class InputAttr extends React.Component {
  render() {
    const { nameAttr, attr, cardAttr, onInputChange } = this.props;
    return (
      <label htmlFor={ attr }>
        { nameAttr }
        <input
          id={ attr }
          data-testid={ attr }
          type="number"
          name={ nameAttr }
          maxLength="30"
          required
          value={ cardAttr }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

InputAttr.propTypes = {
  nameAttr: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
  cardAttr: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default InputAttr;
