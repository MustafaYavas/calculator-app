import React from "react";
import {Dropdown} from "react-bootstrap";

const DropdownComponent = (props) => {
    return(
        <Dropdown>
            <Dropdown.Toggle variant="primary" className="d-flex justify-content-center align-items-center">
                Mode
            </Dropdown.Toggle>
                          
            <Dropdown.Menu>
                <Dropdown.Item onClick={props.handleCalculatorUI}>Normal</Dropdown.Item>
                <Dropdown.Item onClick={props.handleCalculatorUI}>Advanced</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown> 
    )
}

export default DropdownComponent;