import {render} from "@testing-library/react";
import React from "react";
import CardBody from "./CardBody";
import CardBodyProps from "./CardBodyProps";

describe('<CardBody />', () => {
    it('renders the CardBody component', () => {

        const props: CardBodyProps = {
            className: ""
        }

        const component = render(<CardBody {...props}>
            <p>Rendered</p>
        </CardBody>)

        expect(component).toBeTruthy()
    })
})
