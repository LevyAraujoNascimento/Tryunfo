import React from 'react';
import PropTypes from 'prop-types';

class SaveButton extends React.Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <button id="save-button" type="submit" data-testid="save-button" disabled={ isSaveButtonDisabled } onClick={ onSaveButtonClick }>Salvar</button>
    );
  }
}

SaveButton.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default SaveButton;
