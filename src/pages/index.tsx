import React from "react"
import { Main, Sidebar } from "@/src/components"

const IndexPage: React.FC = () => {
  return (
    <div className='flex h-screen bg-white dark:bg-slate-400'>
      <section className='w-[10%] sm:w-[15%]'>
        <Sidebar />
      </section>
      <section className='flex flex-col w-[90%] sm:w-[85%] overflow-auto'>
        <Main />
      </section>
    </div>
  )
};

export default IndexPage;
