import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

import App from "./App";

function renderWithRouter(ui, { route = "/", history = createMemoryHistory({ initialEntries: [route] }) } = {}) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us to reference it in our tests
    history
  };
}

describe("App", () => {
  it("full app rendering/navigating", () => {
    const { container } = renderWithRouter(<App />);
    expect(container.innerHTML).toMatch("Leila Berrouayel");
  });

  it("landing on Hello Melon app page", () => {
    const { container } = renderWithRouter(<App />, {
      route: "/hello-melon"
    });
    expect(container.innerHTML).toMatch("Hello Melon");
  });

  it("landing on Forget Me Not app page", () => {
    const { container } = renderWithRouter(<App />, {
      route: "/fmn"
    });
    expect(container.innerHTML).toMatch("FORGET ME NOT");
  });

  it("landing on Lambda MUD app page", () => {
    const { container } = renderWithRouter(<App />, {
      route: "/mud"
    });
    expect(container.innerHTML).toMatch("LAMBDA MUD");
  });

  it("landing on a bad page", () => {
    const { container } = renderWithRouter(<App />, {
      route: "/something-that-does-not-match"
    });
    expect(container.innerHTML).toMatch("Leila Berrouayel");
  });
});
