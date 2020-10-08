import React from "react";
import styles from "./FormsControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={styles.formControl + " " + styles.error}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { meta.error && <span>'Some error'</span> }
        </div>
    )
}