import React, { ReactNode } from "react";

//pass text as a prop
// interface Props{
//     text: string;
// }
//using children keyword instead
interface Props {
  children: ReactNode;
  onClose?: () => void;
}

// const Alert = (props: Props) => {
// destructure
//(from passing props in to passing the prop embeded inside prop in) ^ to this v
const Alert = ({ children, onClose = () => {}}: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
