import React, { useState } from "react"
import { ReactSpreadsheetImport } from "@/src/lib"
import { Main, Sidebar } from "@/src/components"

const IndexPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
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
    <div className='flex h-screen bg-white dark:bg-slate-400'>
      <section className='w-[10%] sm:w-[15%]'>
        <Sidebar />
      </section>
      <section className='flex flex-col w-[90%] sm:w-[85%] overflow-auto'>
        <Main />
      </section>
      <ReactSpreadsheetImport
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        fields={fields}
      />
    </div>
  )
};

export default IndexPage;
