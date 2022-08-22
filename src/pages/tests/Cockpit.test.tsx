import { render } from "@testing-library/react";
import Cockpit from "../Cockpit";

describe("Cockpit", function () {
    test("Should render", () => {
        // expect(1).toEqual(1)
        render(<Cockpit/>);
    });
});