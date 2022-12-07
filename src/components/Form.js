import React from 'react';
import PropTypes from 'prop-types';
import InputAttr from './form_comp/InputAttr';
import InputCheckbox from './form_comp/InputCheckbox';
import InputDescription from './form_comp/InputDescription';
import InputImage from './form_comp/InputImage';
import InputName from './form_comp/InputName';
import SaveButton from './form_comp/SaveButton';
import SelectRarity from './form_comp/SelectRarity';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;

    return (
      <fieldset>
        <InputName
          cardName={ cardName }
          onInputChange={ onInputChange }
        />
        <InputDescription
          cardDescription={ cardDescription }
          onInputChange={ onInputChange }
        />
        <InputAttr
          nameAttr="For"
          attr="attr1-input"
          cardAttr={ cardAttr1 }
          onInputChange={ onInputChange }
        />
        <InputAttr
          nameAttr="Vel"
          attr="attr2-input"
          cardAttr={ cardAttr2 }
          onInputChange={ onInputChange }
        />
        <InputAttr
          nameAttr="Int"
          attr="attr3-input"
          cardAttr={ cardAttr3 }
          onInputChange={ onInputChange }
        />
        <InputImage
          cardImage={ cardImage }
          onInputChange={ onInputChange }
        />
        <SelectRarity
          cardRare={ cardRare }
          onInputChange={ onInputChange }
        />
        {
          !hasTrunfo
          ? <InputCheckbox
              cardTrunfo={ cardTrunfo }
              onInputChange={ onInputChange }
            />
          : <p>Você já tem um Super Trunfo em seu baralho</p>
        }
        <SaveButton
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </fieldset>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
