import { useState } from "react";
import './Modal.css';
const LogiqueModale = () =>{
    const[revele, changeRevele] = useState(false);

    function toogle(){
        changeRevele(!revele)
    }

    return{
        revele,
        toogle
    }
}

export default LogiqueModale