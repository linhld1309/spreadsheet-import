import React, { useState } from 'react';
import { ReactSpreadsheetImport } from "../lib/ReactSpreadsheetImport";

const IndexPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const onClose = () => { setIsOpen(false)}
  const onSubmit = () => {
    console.log('onSubmit')
  }

  const fields = [
    {
      label: "Name",
      key: "name",
      alternateMatches: ["first name", "first"],
      fieldType: {
        type: "input",
      },
      example: "Stephanie",
      validations: [
        {
          rule: "required",
          errorMessage: "Name is required",
          level: "error",
        },
      ],
    },
  ] as const

  return (
    <ReactSpreadsheetImport
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
      fields={fields}
    />
  )
};

export default IndexPage;
