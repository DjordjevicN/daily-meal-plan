import ButtonShell from "../../atom/ButtonShell/ButtonShell";
import "./Modal.scss";
import { IoMdClose } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";

interface IProps {
  close: () => void;
  proceed: () => void;
  children?: any;
}

const Modal = (props: IProps) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="question">{props.children}</div>
        <div className="action">
          <ButtonShell
            type="mono"
            onClick={() => {
              props.proceed();
              props.close();
            }}
            icon={<FcCheckmark />}
          >
            Yes
          </ButtonShell>
          <ButtonShell
            onClick={() => props.close()}
            type="mono"
            icon={<IoMdClose />}
          >
            No
          </ButtonShell>
        </div>
      </div>
    </div>
  );
};

export default Modal;
