import React from "react";
import { PokemonCard } from "./";
import { render, cleanup } from "react-testing-library";
import { mockPikaData, mockGolemData } from "../../utils/mockData";
import "jest-dom/extend-expect";

describe("Pokemon Card", () => {
  afterEach(cleanup);
  it("renders a pokemon card for a single type", () => {
    const { container, debug } = render(
      <PokemonCard pokemon={mockPikaData.data} />
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(container).toHaveTextContent("pikachu");
    expect(container).toHaveTextContent("electric");
  });
  it("renders a pokemon card for multiple types", () => {
    const { container } = render(<PokemonCard pokemon={mockGolemData.data} />);
    expect(container.firstChild).toMatchSnapshot();
    expect(container).toHaveTextContent("golem");
    expect(container).toHaveTextContent("rock");
    expect(container).toHaveTextContent("ground");
  });
});
