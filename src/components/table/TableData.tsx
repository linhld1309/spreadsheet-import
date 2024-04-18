import React from "react"

export const TableData = () => {

  return (
    <div className='m-4'>
      <div className='text-indigo-950 dark:text-slate-400 font-bold text-2xl my-4'>Recent Transactions</div>
      <div className="m-2">
        <button className='bg-gradient-to-tr from-pink-900 to-indigo-900 dark:text-slate-400 p-4 text-white w-full rounded-xl'>Open files</button>
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
    </div>
  )
}
