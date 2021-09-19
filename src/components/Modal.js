/* eslint-disable no-unreachable */
// eslint-disable-next-line react/jsx-no-undef
import './Modal.css';
import React from 'react';




const Modal = ({revele, cache}) => revele ? (
 <React.Fragment>

   <div className="overlay" />
   <div className="wrapper">
     <div className="modal">
       <button type="button" className="close" onClick={cache}>
         <span>&times;</span>
       </button>
       <p>Et voici la modale</p>
      




       {}
   </div>
   </div>
 </React.Fragment>
) : null;

 export default Modal;
