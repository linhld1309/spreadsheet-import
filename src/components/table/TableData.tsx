import React, { useState } from "react"
import { ReactSpreadsheetImport } from "@/src/lib"

export const TableData = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => { setIsOpen(false)}
  const onSubmit = () => {
    console.log('onSubmit')
  }

  const showDialog = () => {
    setIsOpen(true);
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
    <div className='m-4'>
      <div className='text-indigo-950 dark:text-slate-400 font-bold text-2xl my-4'>Recent Transactions</div>
      <div className="m-2">
        <button 
          type="button" 
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={showDialog}
        >
          Open files
        </button>
      </div>
      <table className="w-full text-sm text-left  dark:text-indigo-500">
        <thead className="text-xs text-indigo-950 dark:text-slate-400 uppercase bg-gray-50 00 dark:bg-slate-900/50">
        <tr>
          <th scope="col" className="py-3 px-6">Person</th>
          <th scope="col" className="py-3 px-6">Bank Account</th>
          <th scope="col" className="py-3 px-6">Amount</th>
        </tr>
        </thead>
        <tbody className='text-indigo-950 dark:text-slate-400'>
        <tr className="bg-white dark:bg-slate-900/50 border-b">
          <td className="py-4 px-6">Alex Johnson</td>
          <td className="py-4 px-6">82926417</td>
          <td className="py-4 px-6">$4,500.00</td>
        </tr>
        
        <tr className="bg-white dark:bg-slate-900/50 border-b  ">
          <td className="py-4 px-6">James Smith</td>
          <td className="py-4 px-6">90817264</td>
          <td className="py-4 px-6">$7,820.00</td>
        </tr>
        <tr className="bg-white dark:bg-slate-900/50 border-b  ">
          <td className="py-4 px-6">Patricia Brown</td>
          <td className="py-4 px-6">26483910</td>
          <td className="py-4 px-6">$1,230.00</td>
        </tr>
        <tr className="bg-white dark:bg-slate-900/50">
          <td className="py-4 px-6">Ethan Davis</td>
          <td className="py-4 px-6">64738290</td>
          <td className="py-4 px-6">$865.00</td>
        </tr>
        </tbody>
      </table>
      <ReactSpreadsheetImport
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        fields={fields}
      />
    </div>
  )
}
