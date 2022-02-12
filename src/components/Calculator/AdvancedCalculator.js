import React from "react";
import CommonComponents from "./CommonComponents";
import styles from "./AdvancedCalculator.module.css";
import Button from "../UI/Button"

const AdvancedCalculator = (props) => {
    const {
        enteredNumber,
        processSummary,
        handleNumber,
        handleOperator,
        handleResult,
        handleDelete,
        handleFloat,
        handleConstantNumber
    } = props
    
    return (

        <div className="d-flex flex-column" style={{marginTop: "5rem"}}>  
            <div className="form-floating" style={{marginBottom: "1rem"}}>
                <input type="text" className={`form-control ${styles["input-area"]} fw-bolder fs-3`} id="floatingInput" value={enteredNumber} readOnly/>
                <label htmlFor="floatingInput" className="fw-bold">{processSummary}</label>
            </div>

            <div className="d-flex flex-row">
                <div className={`d-flex flex-column ${styles["column-size"]} bg-white`}> 
                    <Button type="button" onClick={handleOperator} id="factorial" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>n!</Button>
                    <Button type="button" onClick={handleOperator} id="divideByX" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>1/x</Button>
                    <Button type="button" onClick={handleOperator} id="exp" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>exp</Button>
                    <Button type="button" onClick={handleOperator} id="mod" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>mod</Button>
                </div>

                <div className={`d-flex flex-column ${styles["column-size"]} bg-white`}>
                    <Button type="button" onClick={handleOperator} id="xPowerY" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>x^y</Button>
                    <Button type="button" onClick={handleOperator} id="tenPowerX" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>10^x</Button>
                    <Button type="button" onClick={handleOperator} id="log" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>log</Button>
                    <Button type="button" onClick={handleOperator} id="ln" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>ln</Button>
                </div>

                <CommonComponents 
                    handleNumber = {handleNumber}
                    handleOperator = {handleOperator}
                    handleDelete = {handleDelete}
                />

                <div className={`d-flex flex-column ${styles["column-size"]} bg-white`}>
                    <Button type="button" onClick={handleOperator} id="cubeRoot" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>3√x</Button>
                    <Button type="button" onClick={handleOperator} id="squareRoot" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>2√x</Button>
                    <Button type="button" onClick={handleConstantNumber} id="constantE" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>e</Button>
                    <Button type="button" onClick={handleConstantNumber} id="pi" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>π</Button>
                </div>

                <div className={`d-flex flex-column ${styles["column-size"]} bg-white`}>
                    <Button type="button" onClick={handleFloat} className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder ${styles["dot-symbol"]}`}>•</Button>
                    <Button type="button" onClick={handleResult} className={`btn btn-md btn-outline-danger col text-dark fs-4 fw-bolder fas fa-equals`}></Button>
                </div>

            </div>
        </div> 
    )
}

export default AdvancedCalculator;