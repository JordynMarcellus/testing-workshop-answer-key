import React from "react";
import { FormContainer } from "./";
import { render, fireEvent, cleanup } from "react-testing-library";

describe("Form Container Tests", () => {
  describe("integration tests", () => {
    afterEach(cleanup);
    it("does not call handleSubmit because the button is disabled", () => {
      const handleSubmitMock = jest.fn();
      const { getByText } = render(
        <FormContainer
          handleChange={() => {}}
          handleSubmit={handleSubmitMock}
          isDisabled={true}
          searchInputValue=""
        />
      );
      fireEvent.click(getByText("Search"));
      expect(handleSubmitMock).not.toHaveBeenCalled();
    });
    it("calls handleSubmit when there is data", () => {
      const handleSubmitMock = jest.fn();
      const { getByText } = render(
        <FormContainer
          handleChange={() => {}}
          handleSubmit={handleSubmitMock}
          isDisabled={false}
          searchInputValue="Golem"
        />
      );
      fireEvent.click(getByText("Search"));
      expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    });
    it("passes changed values up", () => {
      const handleChange = jest.fn(event => {
        expect(event.target.value).toBe("Meowth");
      });
      const { getByLabelText } = render(
        <FormContainer
          handleChange={handleChange}
          handleSubmit={() => {}}
          isDisabled={false}
          searchInputValue="Golem"
        />
      );
      fireEvent.change(getByLabelText("Search for a single Pokemon"), {
        target: { value: "Meowth" },
      });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });
  });
});
