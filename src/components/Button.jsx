/* eslint */
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useState} from 'react'
 import './Button.css'
{/* <FontAwesomeIcon className={"spin__rotate-start"} icon={'fa-solid fa-arrows-rotate'} /> */}

const Button = ({ isLoading, refresh }) => {

  const classAdd = isLoading ? 'spin__rotate-start ' :  'spin__rotate-stop';




  return (
    <>
      <button onClick={refresh} className={`${classAdd}`}>
        <i class="fa-solid fa-arrows-rotate"></i>
        {/* <i className="fa-solid fa-spinner"></i> */}
        </button>
   </>

  )
}

export default Button