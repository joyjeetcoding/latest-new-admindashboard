"use client";

import { GlobalContext } from "@/context";
import { useContext } from "react";

function Modal() {
  const { showModal } = useContext(GlobalContext);

  return(
  <>
  {showModal ? 
  <div>
    <div>
        <div>
            Modal
        </div>
    </div>  

  </div> : null}
  
  </>)
}

export default Modal;
