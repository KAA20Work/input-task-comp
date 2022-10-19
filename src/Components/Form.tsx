import React from 'react';
import {Field} from './Field';

const Form = () : JSX.Element => {

    return (
      <div>
        <Field text="Имя" type="text"></Field>
        <Field text="Фамилия" type="text"></Field>
        <Field text="Отчество" type="text"></Field>
        <Field text="E-mail" type="text"></Field>
      </div>
    );
  }
  
  export default Form;