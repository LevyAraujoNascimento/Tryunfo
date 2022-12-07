import React from 'react';
import PropTypes from 'prop-types';

class SaveButton extends React.Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <input
        id="save-button"
        type="submit"
        name="isSaveButtonDisabled"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
        value="Salvar"
      />
    );
  }
}

SaveButton.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default SaveButton;
