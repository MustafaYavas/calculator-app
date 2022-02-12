import React from "react";
import CommonComponents from "./CommonComponents";
import styles from "./StandartCalculator.module.css";
import Button from "../UI/Button"

const StandartCalculator = (props) => {
    const {
        enteredNumber,
        processSummary,
        handleNumber,
        handleOperator,
        handleResult,
        handleDelete,
        handleFloat
    } = props

    return (
        <div className="d-flex flex-column" style={{marginTop: "5rem"}}>  
            <div className="form-floating" style={{marginBottom: "1rem"}}>
                <input type="text" className={`form-control fw-bolder fs-3 ${styles["input-area"]}`} id="floatingInput" value={enteredNumber} readOnly/>
                <label htmlFor="floatingInput" className="fw-bold">{processSummary}</label>
            </div>

            <div className="d-flex flex-row">

                <div className={`d-flex flex-column ${styles["column-size"]} bg-white`}>
                    <Button type="button" onClick={handleOperator} id="mod"  className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder fas fa-percent`}></Button>
                    <Button type="button" onClick={handleOperator} id="divideByX"  className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>1/x</Button>
                    <Button type="button" onClick={handleFloat} className={`btn btn-md btn-outline-success col fw-bolder text-dark fs-4 fw-bolder ${styles["dot-symbol"]}`}>•</Button>
                    <Button type="button" onClick={handleResult} className={`btn btn-md btn-outline-danger col text-dark fs-4 fw-bolder fas fa-equals`}></Button>
                </div>
                <CommonComponents 
                    handleNumber = {handleNumber}
                    handleOperator = {handleOperator}
                    handleDelete = {handleDelete}
                />
                
            </div>
        </div>    
    )
}

export default StandartCalculator;