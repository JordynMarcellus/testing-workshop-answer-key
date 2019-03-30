import React from "react";
import { Button } from "./";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";

describe("Button component", () => {
  afterEach(cleanup);
  it("clicks the button and calls the function", async () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Button id="button-test-snapshot" handleClick={mockFn} isDisabled={false}>
        Click me!
      </Button>
    );
    fireEvent.click(getByText("Click me!"));
    expect(getByText("Click me!")).toBeEnabled();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it("does not click a button that is disabled", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <Button id="button-test-snapshot" handleClick={mockFn} isDisabled={true}>
        Click me!
      </Button>
    );
    fireEvent.click(getByText("Click me!"));
    expect(getByText("Click me!")).toBeDisabled();
    expect(mockFn).not.toHaveBeenCalled();
  });
  it("renders out the disabled button", () => {
    const mockFn = jest.fn();
    const { container } = render(
      <Button id="button-test-snapshot" handleClick={mockFn} isDisabled={true}>
        Click me!
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it("renders out an enabled button", () => {
    const mockFn = jest.fn();
    const { container } = render(
      <Button id="button-test-snapshot" handleClick={mockFn} isDisabled={false}>
        Click me!
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
