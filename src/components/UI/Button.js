import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button
            className={`${props.className} ${styles["btn-border-radius"]} ${styles["btn-hover"]}`}
            id={props.id || ""}
            type={props.type}
            onClick={props.onClick}
        >   {props.children === undefined ? "" : props.children.trim()}
        </button>
    )
}

export default Button;