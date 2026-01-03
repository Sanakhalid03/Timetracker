import { Calendar1 } from "@/Components/ui/calender"
import {useAppSelector } from "@/Redux/Hooks"
import { BsEmojiFrown } from "react-icons/bs";
import {format} from "date-fns"

function AttendaceTable() {
    const records=useAppSelector(state=>state.clock.record)
  return (
    <div className="flex flex-col gap-12  bg-white dark:bg-slate-800 dark:shadow-black/30 py-10 px-2 md:px-8 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-3 items-center">
                      <div className="bg-indigo-100 text-2xl text-indigo-600 font-medium dark:bg-indigo-900/40 dark:text-indigo-400 rounded-lg w-13 h-13 flex justify-center items-center" >
                         <Calendar1 stroke="#4f39f6" />
                        </div>
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <h1 className="text-xl font-medium dark:text-slate-100">Attendance History</h1>
                        <span className="text-sm dark:text-slate-400">Your recent clock-in and clock-out records</span>
                    </div> 
                </div>


                <div className="w-full md:w-[80%] border border-gray-400 dark:border-slate-700 rounded-xl overflow-hidden md:mx-auto">
       <table className="w-full text-center table-auto   border-collapse divide-y ">
            <thead className=" bg-gray-100  dark:bg-slate-700">
                <tr className="text-gray-600 text-sm md:text-md dark:text-slate-300">
                <th  className="px-1 py-2 md:px-2 md:py-4 font-semibold ">Date</th>
                <th  className="px-1 py-2 md:px-2 md:py-4 font-semibold ">Clock In</th>
                <th  className="px-1 py-2 md:px-2 md:py-4 font-semibold ">Clock Out</th>
                <th  className="px-1 py-2 md:px-2 md:py-4 font-semibold ">Duration</th>
                </tr>
              
            </thead>
            <tbody className="divide-y ">
                {
                    records.length === 0 && (
                    <tr className="text-xs md:text-sm font-medium">
                    <td colSpan={4} className="px-1 py-2 md:px-2 md:py-4"><div className=" flex items-center justify-center gap-3"><span>No Record </span><BsEmojiFrown /></div></td>
                    </tr>
                    )
                }
                {
                    records.map((r,i)=>
                    <tr key={i} className="text-xs md:text-sm font-medium">
                    <td className="px-1 py-2 md:px-2 md:py-4">{r.date}</td>
                    <td className="px-1 py-2 md:px-2 md:py-4 text-green-700 dark:text-green-400">{r.clockIn && format(new Date(r.clockIn),"hh:mm a")}</td>
                    <td className="px-1 py-2 md:px-2 md:py-4  text-red-700 dark:text-red-400">{r.clockOut && format(new Date(r.clockOut),"hh:mm a")}</td>
                    <td className="px-1 py-2 md:px-2 md:py-4">{r.duration}</td>
                </tr>    
                    )
                }
                      
              
            </tbody>
           </table>
                </div>
         

    </div>
  )
}

export default AttendaceTable