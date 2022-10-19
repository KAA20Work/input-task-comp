import React from 'react';
import { Input } from './Inputs';

type FieldProps = {
    text: string, 
    type: string,
}

export const Field = ({text, type} : FieldProps) : JSX.Element => {

  const [isEditing, setIsEditing] = React.useState(false);
  const [val, setVal] = React.useState("");
  const [currentVal, setCurrentVal] = React.useState("");

  function handleOnChange(event: { target: { value: React.SetStateAction<string>; }; }) {
    setVal(event.target.value);
  }

  return (
    <div>
      <label>{text}</label>
      <Input isEditing={isEditing} val={val} handleOnChange={handleOnChange} type={type} setIsEditing={setIsEditing} setVal={setVal}
      setCurrentVal={setCurrentVal} currentVal={currentVal}/>
    </div>
  );
}