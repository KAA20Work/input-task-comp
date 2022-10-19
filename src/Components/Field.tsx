import React from 'react';

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
      {
        isEditing ? (
        <div>
          <input onChange={handleOnChange} type={type}></input> 
          <button onClick={() => setIsEditing(false)}>✅</button>
          <button onClick={() => {setVal(currentVal); setIsEditing(false)}}>Отменить</button>
        </div>
        ) :
        (
        <div>
          <label>{val}</label>
          <button onClick={() => {setIsEditing(true); setCurrentVal(val)}}>✏️</button>
          
        </div>
        )
      }
    </div>
  );
}