import { useState } from "react";
import '../styles/Modal.css';

const FunctionModale = () =>{
    const[show, changeshow] = useState(false);

    function toogle(){
        changeshow(!show)
    }

    return{
        show,
        toogle
    }
}

export default FunctionModale