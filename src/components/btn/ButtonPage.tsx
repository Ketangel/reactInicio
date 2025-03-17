import React from 'react';
import './ButtonPage.css'


interface Props {
 labelText:string
 parentMethod: () => void,
}

function ButtonPage({labelText,parentMethod}:Props){
  
    //output 
    return (
        <button onClick={parentMethod}>
         hola: {labelText}
        </button>
    )

}


export default ButtonPage;