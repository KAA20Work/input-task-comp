
type InputProps = {
    text: string, 
    type: string
}

const Input = ({text, type} : InputProps) : JSX.Element => {

    return (
      <div>
        <label htmlFor="form">{text}</label>
        <input id="form" type={type}/>
      </div>
    );
  }
  
  export default Input;