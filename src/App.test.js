import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(
  <App />
  );
});
test("renders greeting on Greeting component", async () => {
  // Arrange 
  const { getByText } = render(<ContactForm />);
  // Act
  const contact = getByText(/First Name*/i);
  // Assert
  expect(contact).toBeInTheDocument();
});
