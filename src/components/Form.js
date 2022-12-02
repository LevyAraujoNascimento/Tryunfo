import React from 'react';
import InputAttr from './form_comp/InputAttr';
import InputCheckbox from './form_comp/InputCheckbox';
import InputDescription from './form_comp/InputDescription';
import InputImage from './form_comp/InputImage';
import InputName from './form_comp/InputName';
import SaveButton from './form_comp/SaveButton';
import SelectRarity from './form_comp/SelectRarity';

class Form extends React.Component {
  render() {
    return (
      <fieldset>
        <InputName />
        <InputDescription />
        <InputAttr nameAttr="Força" attr="attr1-input" />
        <InputAttr nameAttr="Velocidade" attr="attr2-input" />
        <InputAttr nameAttr="Inteligência" attr="attr3-input" />
        <InputImage />
        <SelectRarity />
        <InputCheckbox />
        <SaveButton />
      </fieldset>
    );
  }
}

export default Form;
