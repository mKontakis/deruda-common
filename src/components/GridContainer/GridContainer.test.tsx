import {render} from "@testing-library/react";

import React from "react";
import GridContainer from "./GridContainer";
import GridContainerProps from "./GridContainerProps";

describe('<GridContainer />', () => {
    it('renders the CardHeader component', () => {

        const props: GridContainerProps = {
            className: "",
            children: <p/>
        }

        const component = render(<GridContainer {...props}/>)

        expect(component).toBeTruthy()

    })
})
