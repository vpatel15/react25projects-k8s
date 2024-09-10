import React, { useRef } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick';

const Modal = ({id, header, body, footer, onClose}) => {
  const ref = useRef(null);
  useOutsideClick(ref, onClose);
  return (
    <div ref={ref} id={id ? `${id}` : 'modal-id'}>
      <div>{header ? header : 'Header'}<span onClick={onClose}>&times;</span></div>
      <div>{body ? body : 'Content'}</div>
      <div>{footer ? footer : 'Footer'}</div>
    </div>
  )
}

export default Modal