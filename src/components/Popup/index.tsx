import ReactDOM from 'react-dom';
import { PopupContainer } from './style';

export type TypeMessages = 'error' | 'warning'
export interface PopupProps {
  type: TypeMessages
  message: string
}

export default function Popup({ type, message }: PopupProps) {
  return (
    <>
      {
      ReactDOM.createPortal((
        <PopupContainer
          type={type}
          className="appear"
        >
          <h1>{message}</h1>
        </PopupContainer>
      ), document.body)
    }
    </>
  );
}
