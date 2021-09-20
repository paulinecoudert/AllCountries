/* eslint-disable no-unreachable */
// eslint-disable-next-line react/jsx-no-undef
import '../styles/Modal.css'
import React from 'react';

const Modal = ({show, cache}) => show ? (
 <React.Fragment>

   <div className="overlay" />
   <div className="wrapper">
     <div className="modal">
       <button type="button" className="close" onClick={cache}>
         <span>&times;</span>
       </button>
       <p>Country:  <br/>
       Capital: <br/>
       Code: <br/>
       Region: <br/>
       Population: </p>
      
   </div>
   </div>
 </React.Fragment>
) : null;

 export default Modal;
