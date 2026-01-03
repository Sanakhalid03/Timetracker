import { clockIn, clockOut } from "@/Redux/clockSlice"
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks"
import { LogIn, LogOut, Timer, User } from "lucide-react"
import { PiDotFill } from "react-icons/pi"
import {format} from "date-fns"

function EmpolyeeCard() {
    const dispatch=useAppDispatch()
    const clock=useAppSelector(state=>state.clock)
  return (
    <div className="flex flex-col gap-6  bg-white p-6 px-8 rounded-2xl shadow-lg dark:bg-slate-800 dark:shadow-black/30">
        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between lg:flex-row lg:justify-between ">
         <div className="flex gap-3 items-center">
              <div className="bg-indigo-100 text-2xl text-indigo-600   dark:bg-indigo-900/40 dark:text-indigo-400 rounded-lg w-13 h-13 flex justify-center items-center" >
                 <User size={30} />
                </div>
            <div>
                <h1 className="text-xl font-medium dark:text-slate-100">Sana Khalid</h1>
                <span className="text-sm text-gray-500 dark:text-slate-400">Web Developer</span>
            </div> 
        </div>

         <div className="flex items-center gap-1 font-semibold border-2 border-green-900 p-2 rounded-xl bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:border-green-500">
                <PiDotFill />
               <span className="text-xs ">Currently Working</span> 
            </div>
        </div>
      
        <div className="w-full flex flex-col gap-6 items-center md:flex-row md:justify-between shadow-md bg-linear-to-r from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-indigo-900/40 px-4 py-5 rounded-xl">
               <div className="flex gap-3 items-center w-full justify-center md:justify-start md:w-[45%] ">
                <div className="bg-green-200 text-2xl text-green-900   dark:bg-emerald-900/40 dark:text-emerald-400 rounded-lg w-10 h-10 flex justify-center items-center" >
                 <Timer size={20} />
                </div>
            <div className="w-[40%]">
                <h1 className="text-sm font-semibold text-gray-600 dark:text-slate-400 " >Clock In</h1>
                <span className="text-xl font-medium">{clock.clockIn ? format(new Date(clock.clockIn), "hh:mm a" ): "--:--"}   </span>
            </div> 
        </div>
               <div className="flex gap-3 items-center w-full justify-center md:justify-start md:w-[45%]">
           <div className="bg-red-200 text-2xl text-red-900  dark:bg-rose-900/40 dark:text-rose-400 rounded-lg w-10 h-10 flex justify-center items-center" >
                 <Timer size={20} />
                </div>
            <div className="w-[40%]">
                 <h1 className="text-sm font-semibold text-gray-600 dark:text-slate-400" >Clock Out</h1>
                <span className="text-xl font-medium">{clock.clockOut ? format(new Date(clock.clockOut), "hh:mm a" ): "--:--"}    </span>
            </div> 
        </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row items-center justify-between">
         <button onClick={()=>dispatch(clockIn())} className="w-full md:w-[48%] transition ease-in duration-200 bg-sky-400 hover:bg-sky-300 dark:bg-sky-600 dark:hover:bg-sky-500  cursor-pointer p-4 rounded-2xl flex justify-center items-center gap-2 font-semibold text-white">
            <LogIn size={15} className="font-semibold"/>
            <span className="text-lg  ">Clock In</span>
         </button>
         <button onClick={()=>dispatch(clockOut())} className="w-full md:w-[48%]  transition ease-in duration-200 bg-red-500 hover:bg-red-400 dark:bg-red-700 dark:hover:bg-red-600 cursor-pointer  p-4 rounded-2xl flex justify-center items-center gap-2 font-semibold text-white">
            <LogOut size={15} className="font-semibold"/>
            <span className="text-lg  ">Clock Out</span>
         </button>

        </div>
    </div>
  )
}

export default EmpolyeeCard