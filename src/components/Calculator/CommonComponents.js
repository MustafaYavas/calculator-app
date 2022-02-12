import React from "react";
import styles from "./CommonComponents.module.css";
import Button from "../UI/Button"

const CommonComponents = (props) => {
    const {handleNumber, handleOperator, handleDelete} = props;

    return (
            <>
                <div className={`d-flex flex-column bg-white ${styles["column-size"]}`}>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>7</Button>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>4</Button>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>1</Button>
                    <Button type="button" onClick={handleDelete} id="clear" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder`}>C</Button>
                </div>

                <div className={`d-flex flex-column bg-white ${styles["column-size"]}`}>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>8</Button>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>5</Button>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>2</Button>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>0</Button>
                </div>
                            
                <div className={`d-flex flex-column bg-white ${styles["column-size"]}`}>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>9</Button>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>6</Button>
                    <Button type="button" onClick={handleNumber} className={`btn btn-md btn-outline-primary col text-dark fs-4 fw-bolder`}>3</Button>
                    <Button type="button" onClick={handleDelete} id="delete" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder fas fa-backspace`}></Button>
                </div>

                <div className={`d-flex flex-column bg-white ${styles["column-size"]}`}>
                    <Button type="button" onClick={handleOperator} id="plus" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder fas fa-plus`}></Button>
                    <Button type="button" onClick={handleOperator} id="minus" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder fas fa-minus`}></Button>
                    <Button type="button" onClick={handleOperator} id="divide" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder fas fa-divide`}></Button>
                    <Button type="button" onClick={handleOperator} id="times" className={`btn btn-md btn-outline-success col text-dark fs-4 fw-bolder fas fa-times`}></Button>
                </div>
            </>                  
    )
}

export default CommonComponents;