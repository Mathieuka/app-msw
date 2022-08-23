import { render, screen } from "@testing-library/react";
import Cockpit from "../Cockpit";
import { setupServer } from "msw/node";
import { handlers } from "../../msw/handlers";
import {jest} from '@jest/globals'
import {ShareGateTheme, ThemeProvider} from "@sharegate/orbit-ui";
import UserProvider from "../../providers/UserProvider";
import GroupProvider from "../../providers/GroupProvider";
import { BrowserRouter } from "react-router-dom";

const server = setupServer(...handlers);

global.beforeEach(() => {
    server.listen();
});

global.afterEach(() => {
    server.close();
});
const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => {
    const originalModule = jest.requireActual("react-router-dom");

    return {
        ...originalModule as any,
        useNavigate: () => mockUseNavigate
    };
});

describe("Cockpit", function () {
    test("Should render", () => {
        // expect(1).toEqual(1)
        const container = render(
            <BrowserRouter>
                    <UserProvider>
                        <GroupProvider>
                            <Cockpit/>
                        </GroupProvider>
                    </UserProvider>
            </BrowserRouter>
        );
        screen.debug(undefined, 9999999999)
    });
});