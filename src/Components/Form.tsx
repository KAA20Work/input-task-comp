import React from 'react';
import {Field} from './Field';
import "../Styles/inputStyle.scss"

const Form = () : JSX.Element => {

    return (
      <div className='centered'>
        <div className='form'>
          <br/>
          <Field text="Имя" type="text"></Field>
          <Field text="Фамилия" type="text"></Field>
          <Field text="Отчество" type="text"></Field>
          <Field text="E-mail" type="text"></Field>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
  
  export default Form;