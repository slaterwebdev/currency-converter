import { ReactElement } from "react";

//Reuasable button component
interface prop {
    btnText: string
}

const Button = ({ btnText }: prop): ReactElement => {
    return (
        <button>{btnText}</button>
    );
  }
  
  export default Button