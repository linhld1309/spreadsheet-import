import React from 'react'
import { Chart, TableData, Panel } from '@/src/components'
import { LuWallet } from "react-icons/lu"
import { CiMenuKebab } from "react-icons/ci"
import { IoPieChartOutline } from "react-icons/io5"
import { LiaPeopleCarrySolid } from "react-icons/lia"
import { BsPersonVcard } from "react-icons/bs"
import { IoCalendarOutline } from "react-icons/io5"
// import profile from '../../assets/img/profile.jpg'
import { IoNotificationsOutline } from "react-icons/io5"
import { MdMarkEmailUnread } from "react-icons/md"

export const Main = () => {

  return (
    <div className='flex flex-col md:flex-row bg-indigo-100 dark:bg-slate-950'>
      <section className='w-auto md:w-[70%] h-full'>
        <div className='w-full flex items-cente justify-between'>
          <div className='text-indigo-950 m-4 font-bold text-xl md:text-2xl dark:text-transparent bg-clip-text dark:bg-gradient-to-l from-indigo-800 to-pink-800 '>Good Morining, IT Skills Academy</div>
          <div className='flex md:hidden gap-4 items-center justify-end px-4 text-indigo-950 dark:text-slate-800'>
            <IoCalendarOutline/>
            <IoNotificationsOutline/>
            <MdMarkEmailUnread/>
            <img src={""} className='rounded-full w-8 h-8'/>
          </div>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-4 m-4'>
          <div className='flex flex-col justify-between w-full md:w-auto h-48  bg-white dark:bg-slate-900/50 p-4 rounded-md '>
            <div className='flex w-full items-center justify-between'>
              <div><LuWallet className='text-4xl text-indigo-950 dark:text-slate-400'/></div>
              <div className='flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full'><CiMenuKebab/></div>
            </div>
            <div className='font-extrabold text-4xl sm:text-2xl md:text-lg lg:text-xl text-indigo-950  dark:text-slate-400'> $500,634.00</div>
            <div>
              <div className='text-indigo-950 dark:text-slate-400 text-sm font-semibold'>Your Bank Balance</div>
            </div>
          </div>

          <div className='flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md '>
            <div className='flex w-full items-center justify-between'>
              <div><IoPieChartOutline className='text-4xl text-indigo-950 dark:text-slate-400'/></div>
              <div className='flex items-center justify-center w-10 h-10 dark:text-slate-400 bg-indigo-200 dark:bg-slate-900/50 rounded-full'><CiMenuKebab/></div>
            </div>
            <div className='font-extrabold text-4xl sm:text-2xl md:text-lg lg:text-xl text-indigo-950 dark:text-slate-400'> $500,634.00</div>
            <div>
              <div className='text-indigo-950 dark:text-slate-400 text-sm font-semibold'>Your Bank Balance</div>
            </div>
          </div>

          <div className='flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md '>
            <div className='flex w-full items-center justify-between'>
              <div><LiaPeopleCarrySolid className='text-4xl text-indigo-950 dark:text-slate-400' /></div>
              <div className='flex items-center justify-center dark:text-slate-400 w-10 h-10 bg-indigo-200 dark:bg-slate-900 rounded-full'><CiMenuKebab/></div>
            </div>
            <div className='font-extrabold text-4xl sm:text-2xl md:text-lg lg:text-xl text-indigo-950 dark:text-slate-400'> $500,634.00</div>
            <div>
              <div className='text-indigo-950 dark:text-slate-400 text-sm font-semibold'>Employees working today</div>
            </div>
          </div>

          <div className='flex flex-col justify-between w-full md:w-auto h-48 bg-white dark:bg-slate-900/50 p-4 rounded-md '>
            <div className='flex w-full items-center justify-between'>
              <div><BsPersonVcard className='text-4xl text-indigo-950 dark:text-slate-400'/></div>
              <div className='flex items-center justify-center dark:text-slate-400 w-10 h-10 bg-indigo-200 dark:bg-slate-900/50 rounded-full'><CiMenuKebab/></div>
            </div>
            <div className='font-extrabold text-4xl sm:text-2xl md:text-lg lg:text-xl text-indigo-950 dark:text-slate-400'> $500,634.00</div>
            <div>
              <div className='text-indigo-950 dark:text-slate-400 text-sm font-semibold'>This Week card processing</div>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-4  gap-4 m-4 w-auto'>
          <div className='col-span-4 md:col-span-1  h-28 bg-white dark:bg-slate-900/50 rounded-md'>
            <div className='flex flex-col  justify-between p-4 h-full'>
              <div className='font-semibold text-indigo-950 dark:text-slate-400'>New Clients</div>
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl sm:text-xl md:text-xl lg:text-5xl font-bold text-indigo-950 dark:text-slate-400'>64</div>
                <div className='flex px-2 py-1 text-xs rounded-full bg-green-500 items-center justify-center text-green-900'>+69%</div>
              </div>
            </div>
          </div>
          <div className='col-span-4 md:col-span-3 row-span-2 bg-white dark:bg-slate-900/50'>
            <Chart />
          </div>
          <div className='col-span-4 md:col-span-1  h-28 bg-white dark:bg-slate-900 rounded-md'>
            <div className='flex flex-col  justify-between p-4 h-full'>
              <div className='font-semibold text-indigo-950 dark:text-slate-400'>Invoice Overdue</div>
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl font-bold text-indigo-950 dark:text-slate-400'>9</div>
                <div className='flex px-2 py-1 text-xs rounded-full bg-red-500 items-center justify-center text-red-900 dark:text-slate-400'>19%</div>
              </div>
            </div>
          </div>
        </div>
        <TableData />
      </section>
      <section className='w-full md:w-[30%] bg-indigo-200 dark:bg-slate-900/20 h-full'>
        <Panel />
      </section>
    </div>
  );
}
