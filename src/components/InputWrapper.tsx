import { ReactElement } from "react";

//Reusable common form field wrapper
interface children {
  children: JSX.Element
}
const InputWrapper = ({children}: children): ReactElement => {
  return (
    <div className="form-component-wrapper">
      {children}
    </div>
  );
}

export default InputWrapper