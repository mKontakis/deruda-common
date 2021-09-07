import React from "react";
import {FormControlProps, InputBaseComponentProps} from "@material-ui/core";

export default interface DerudaInputProps {
    id?: string,
    labelText?: string,
    labelProps?: {},
    /**
     * Attributes applied to the input element.
     */
    inputProps?: InputBaseComponentProps,
    formControlProps?: FormControlProps,
    inputRootCustomClasses?: string,
    error?: boolean,
    helperText?: string,
    success?: boolean,
    white?: boolean,
    endAdornment?: React.ReactNode,
    defaultValue?: string
}
