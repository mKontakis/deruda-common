import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import {makeStyles} from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
// @material-ui/icons
import {Clear, Check} from '@material-ui/icons'

// core components

import FormHelperText from '@material-ui/core/FormHelperText'
import DerudaInputProps from "./DerudaInputProps";
import DerudaInputStyles from "./DerudaInputStyles";

const useStyles = makeStyles(DerudaInputStyles)

const DerudaInput = ({
                         formControlProps,
                         labelText,
                         id,
                         labelProps,
                         inputProps,
                         // inputProps: {
                         //     maxLength = undefined
                         // },
                         error = false,
                         helperText = '',
                         white,
                         defaultValue = '',
                         inputRootCustomClasses = '',
                         success,
                         endAdornment,
                         ...rest
                     }: DerudaInputProps) => {

    const classes = useStyles()

    const labelClasses = classNames({
        [` ${classes.labelRootError}`]: error,
        [` ${classes.labelRootSuccess}`]: success && !error,
    })

    const underlineClasses = classNames({
        [classes.underlineError]: error,
        [classes.underlineSuccess]: success && !error,
        [classes.underline]: true,
        [classes.whiteUnderline]: white,
    })

    const marginTop = classNames({
        [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
    })

    const inputClasses = classNames({
        [classes.input]: true,
        [classes.whiteInput]: white,
    })

    let formControlClasses
    if (formControlProps !== undefined) {
        formControlClasses = classNames(classes.formControl, formControlProps.className)
    } else {
        formControlClasses = classes.formControl
    }

    // const newInputProps = {
    //     maxLength: inputProps ? inputProps.maxLength : undefined,
    //     minLength: inputProps ? inputProps.minLength : undefined,
    //     min: inputProps?.min ? inputProps.min : undefined,
    //     ...inputProps
    //     // max: inputProps?.max ? inputProps.max : undefined
    // }

    return (
        <div className={classes.container}>
            <FormControl {...formControlProps} className={formControlClasses}>
                {labelText !== undefined ? (
                    <InputLabel className={`${classes.labelRoot} ${labelClasses}`} htmlFor={id} {...labelProps}>
                        {labelText}
                    </InputLabel>
                ) : null}
                <Input
                    id={id}
                    classes={{
                        input: inputClasses,
                        root: marginTop,
                        disabled: classes.disabled,
                        underline: underlineClasses,
                    }}
                    inputProps={inputProps}
                    endAdornment={(
                        <div className={classes.endAdornment}>
                            {endAdornment}
                            {error ? (
                                <Clear className={`${classes.feedback} ${classes.labelRootError}`}/>
                            ) : success ? (
                                <Check className={`${classes.feedback} ${classes.labelRootSuccess}`}/>
                            ) : null}
                        </div>
                    )}
                    {...rest}
                />
            </FormControl>
            {helperText !== null && <FormHelperText id="component-helper-text">{helperText}</FormHelperText>}
        </div>
    )
};


export default DerudaInput
