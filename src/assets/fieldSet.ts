import { FieldSet } from "../models/field";

export const fieldSet: FieldSet = [
  [
    {
      id: "firstName",
      placeholder: "First name",
      required: true,
      type: "text",
    },
    {
      id: "lastName",
      placeholder: "Last name",
      required: true,
      type: "text",
    },
  ],
  {
    id: "Email",
    placeholder: "Email",
    required: true,
    type: "text",
  },
  {
    id: "address1",
    placeholder: "Address 1",
    type: "text",
  },
  [
    {
      id: "city",
      type: "text",
      placeholder: "City",
    },
    {
      id: "state",
      type: "text",
      placeholder: "State",
    },
    {
      id: "zip",
      type: "text",
      placeholder: "Zipcode",
    },
  ],
  {
    id: "phone",
    required: true,
    type: "text",
    placeholder: "Phone Number",
  },
  {
    id: "jobTitle",
    options: [
      "Engineer - lead",
      "Engineer - mid level",
      "Engineer - junion",
      "Engineer - front end focused",
      "Engineer - backend focused",
      "Engineer - full stack",
    ],
    placeholder: "Please select job title",
    type: "select",
  },
  {
    id: "reason",
    placeholder:
      "Describe why you are a good fit for the job you are applying for.",
    type: "textarea",
  },
];
