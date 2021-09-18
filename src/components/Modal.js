/* eslint-disable no-unreachable */
// eslint-disable-next-line react/jsx-no-undef
import './Modal.css';
import PropTypes from 'prop-types';



function Modal({
  children, title, visible, close, hideModal,
}) {
  const clazz = `modal-overlay ${visible ? 'block' : 'hidden'}`;

  return (

    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={clazz}>
      <div className="modal fixed top-1/2 left-1/2 bg-pink-200">
        <div className="flex justify-between">
          <h2 className="text-xl bold underline">{title}</h2>

          {close ? <button onClick={hideModal}>X</button> : null}
        </div>
        {children}
      </div>
    </div>

  );

  Modal.propTypes = {
    // eslint-disable-next-line react/require-default-props
    children: PropTypes.node,
    // eslint-disable-next-line react/require-default-props
    title: PropTypes.string,
    // eslint-disable-next-line react/require-default-props
    visible: PropTypes.bool,
    // eslint-disable-next-line react/require-default-props
    close: PropTypes.bool,
    // eslint-disable-next-line react/require-default-props
    hideModal: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types

  };

  Modal.dafaultProps = {
    title: '',
  };
}
export default Modal;
