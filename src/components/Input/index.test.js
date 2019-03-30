import React from "react";
import { Input } from "./";
import { render, fireEvent, cleanup } from "react-testing-library";

describe("Input component", () => {
  afterEach(cleanup);
  it("renders the input correctly", () => {
    const { container, debug } = render(
      <Input
        id="test-id"
        label="Input test"
        handleChange={jest.fn()}
        value={"Not an empty string"}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("handles an onChange event successfully", () => {
    const mockOnChange = jest.fn(event => {
      expect(event.target.value).toEqual("pikachu");
    });
    const { getByLabelText, debug } = render(
      <Input
        id="test-id"
        label="Input test"
        handleChange={mockOnChange}
        value={""}
      />
    );
    fireEvent.change(getByLabelText("Input test"), {
      target: { value: "pikachu" },
    });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
