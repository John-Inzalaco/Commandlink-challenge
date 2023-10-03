import { render, screen } from "@testing-library/react";
import { FormContainer } from "./FormContainer";
import { ReduxTestWrapper } from "../../utils/ReduxTestWrapper";

const formFields = [
  {
    id: "firstName",
    type: "text",
    placeholder: "First Name",
    required: true,
  },
  [
    {
      id: "phone",
      type: "phone",
      placeholder: "Phone",
      required: true,
    },
    {
      id: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
  ],
];

describe("FormContainer Component", () => {
  it("should render without errors", () => {
    render(
      <ReduxTestWrapper>
        <FormContainer formFields={formFields} />
      </ReduxTestWrapper>
    );
  });

  it("should render individual fields correctly", () => {
    render(
      <ReduxTestWrapper>
        <FormContainer formFields={formFields} />
      </ReduxTestWrapper>
    );

    const firstNameField = screen.getByLabelText("First Name");
    expect(firstNameField).toBeDefined();

    const phoneField = screen.getByLabelText("Phone");
    expect(phoneField).toBeDefined();

    const emailField = screen.getByLabelText("Email");
    expect(emailField).toBeDefined();
  });
});
