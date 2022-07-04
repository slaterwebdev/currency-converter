import { ReactElement } from "react";

//Reuasable button component
interface Prop {
    btnText: string
}

const Button = ({ btnText }: Prop): ReactElement => {
    return (
        <button>{btnText}</button>
    );
  }
  
  export default Button