import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Projects from "./Projects";

describe("Projects", () => {
  it("should go to Hello Melon page when click the details button", () => {
    const wrapper = rtl.render(<Projects />);
    const details = wrapper.getByLabelText("hm");
    const route = "/hello-melon";
    expect(details.getAttribute("href")).toBe(route);
  });
  it("should go to Forget Me Not page when click the details button", () => {
    const wrapper = rtl.render(<Projects />);
    const details = wrapper.getByLabelText("fmn");
    const route = "/fmn";
    expect(details.getAttribute("href")).toBe(route);
  });
  it("should go to Lambda MUD page when click the details button", () => {
    const wrapper = rtl.render(<Projects />);
    const details = wrapper.getByLabelText("mud");
    const route = "/mud";
    expect(details.getAttribute("href")).toBe(route);
  });
});
