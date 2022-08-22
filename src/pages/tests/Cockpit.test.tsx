import { render } from "@testing-library/react";
import Cockpit from "../Cockpit";
import {jest} from '@jest/globals'

describe("Cockpit", function () {
    test("Should render", () => {
        // expect(1).toEqual(1)
        render(<Cockpit/>);
    });
});