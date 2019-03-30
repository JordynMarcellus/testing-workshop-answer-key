import React from "react";
import App from "./";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from "react-testing-library";
import axios from "axios";
import "jest-dom/extend-expect";
import { mockPikaData } from "../../utils/mockData";

jest.mock("axios");

describe("App integration tests 🤪", () => {
  afterEach(() => {
    cleanup();
    axios.mockReset();
  });
  it("enters text into the form, clicks submits and shows a pokemon", async () => {
    const originalError = console.error;
    console.error = jest.fn();
    axios.mockResolvedValueOnce(mockPikaData);
    const { getByLabelText, getByText, container } = render(<App />);
    fireEvent.change(getByLabelText("Search for a single Pokemon"), {
      target: { value: "Pikachu" },
    });
    fireEvent.click(getByText("Search"));
    await waitForElement(() => getByText("pikachu"));
    expect(container).toHaveTextContent("pikachu");
    expect(container.firstChild).toMatchSnapshot();
    console.error = originalError;
  });
  it("enters text into the form, clicks submits and shows a pokemon", async () => {
    const originalError = console.error;
    console.error = jest.fn();
    axios.mockResolvedValueOnce(mockPikaData);
    const { getByLabelText, getByText } = render(<App />);
    fireEvent.change(getByLabelText("Search for a single Pokemon"), {
      target: { value: "Pikachu" },
    });
    fireEvent.click(getByText("Search"));
    await waitForElement(() => getByText("pikachu"));
    fireEvent.change(getByLabelText("Search for a single Pokemon"), {
      target: { value: "Pika" },
    });
    expect.assertions(1);
    expect(axios).toHaveBeenCalledTimes(1);
    console.error = originalError;
  });
});
