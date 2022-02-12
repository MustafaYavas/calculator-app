import React from "react";

const Alert = (props) => {
    
    return(
        <>
            {
                props.show ? <div className="text-center bg-danger m-4" style={{width: "25rem"}}>
                                <h5 className="p-2 text-light">
                                    <i className="fas fa-exclamation text-light me-3"></i>
                                    {props.messageProp}
                                </h5>
                            </div>
                            :null
            }
        </>

    )
}

export default Alert;