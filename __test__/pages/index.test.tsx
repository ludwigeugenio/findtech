import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages"

describe("Home component", () => {
    it("Should home component properly", () => {
        render(<Home />);

        const header = screen.getByRole("heading");

        expect(header).toHaveTextContent("hello world")
    })
})