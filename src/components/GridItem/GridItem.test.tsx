
import {render} from "@testing-library/react";
import React from "react";
import GridItemProps from "./GridItemProps";
import GridItem from "./GridItem";

describe('<GridItem />', () => {
    it('renders the GridItem component', () => {

        const props: GridItemProps = {
            className: "",
            children: <p/>
        }

        const component = render(<GridItem {...props}/>)

        expect(component).toBeTruthy()

    })
})
