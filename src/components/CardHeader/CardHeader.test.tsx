import {render} from "@testing-library/react";
import React from "react";

import CardHeader from "./CardHeader";
import CardHeaderProps from "./CardHeaderProps";



describe('<CardHeader />', () => {
    it('renders the CardHeader component', () => {

        const props: CardHeaderProps = {
            className: "",
            color: "warning"
        }

        const component = render(<CardHeader {...props}>
            <p>R</p>
        </CardHeader>)

        expect(component).toBeTruthy()

    })
})
