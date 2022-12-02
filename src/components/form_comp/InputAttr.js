import React from 'react';
import PropTypes from 'prop-types';

class InputAttr extends React.Component {
  render() {
    const { nameAttr, attr } = this.props;
    return (
      <label htmlFor={ attr }>
        { nameAttr }
        <input
          id={ attr }
          data-testid={ attr }
          type="number"
          name={ attr }
          maxLength="30"
          required
        />
      </label>
    );
  }
}

InputAttr.propTypes = {
  nameAttr: PropTypes.string.isRequired,
  attr: PropTypes.string.isRequired,
};

export default InputAttr;
