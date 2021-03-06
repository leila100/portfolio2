import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "./header/Header";
import About from "./about/About";
import Projects from "../projects/Projects";

afterEach(rtl.cleanup);

describe("Home", () => {
  it("About matches snapshot", () => {
    const wrapper = rtl.render(<About />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Header matches snapshot", () => {
    const wrapper = rtl.render(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
  it("Projects matches snapshot", () => {
    const wrapper = rtl.render(<Projects />);
    expect(wrapper).toMatchSnapshot();
  });
});
