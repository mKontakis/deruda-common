import DerudaInputProps from "../DerudaInput/DerudaInputProps";
import {render} from "@testing-library/react";
import DerudaInput from "./DerudaInput";
import React from "react";

describe('<DerudaInput />', () => {
    it('renders the DerudaInput component', () => {

        const props: DerudaInputProps = {

        }

        const component = render(<DerudaInput {...props}/>)

        expect(component).toBeTruthy()

    })
})
