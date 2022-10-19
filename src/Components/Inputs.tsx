import React, { ChangeEventHandler } from 'react';


type InputProps = {
    type: string,
    isEditing: boolean,
    val: string,
    handleOnChange: ChangeEventHandler<HTMLInputElement>,
    setIsEditing: Function,
    setVal: Function,
    setCurrentVal: Function,
    currentVal: string
}

export const Input = ({type, isEditing, val, handleOnChange, setIsEditing, setVal, setCurrentVal, currentVal} : InputProps) : JSX.Element => {
    
    return (
        <div>
          {
            isEditing ? (
            <div>
              <div>
                <input onChange={handleOnChange} type={type}></input> 
                <button onClick={() => setIsEditing(false)}>✅</button>
              </div>
              <button onClick={() => {setVal(currentVal); setIsEditing(false)}}>Отменить</button>
            </div>
            
            ) :
            (
            <div>
              <input disabled placeholder={val}></input>
              <button onClick={() => {setIsEditing(true); setCurrentVal(val)}}>✏️</button>
              
            </div>
            )
          }
        </div>
      );
}
