import { LogIn, LogOut, Timer, User } from "lucide-react"
import { PiDotFill } from "react-icons/pi"


function EmpolyeeCard() {
  return (
    <div className="flex flex-col gap-6  bg-white p-6 px-8 rounded-2xl shadow-lg">
        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-between lg:flex-row lg:justify-between ">
         <div className="flex gap-3 items-center">
              <div className="bg-indigo-100 text-2xl text-indigo-600 rounded-lg w-13 h-13 flex justify-center items-center" >
                 <User size={30} />
                </div>
            <div>
                <h1 className="text-xl font-medium">Sana Khalid</h1>
                <span className="text-sm text-gray-500">Web Developer</span>
            </div> 
        </div>

         <div className="flex items-center gap-1 font-semibold border-2 border-green-900 p-2 rounded-xl bg-green-100">
                <PiDotFill />
               <span className="text-xs ">Currently Working</span> 
            </div>
        </div>
      
        <div className="w-full flex flex-col gap-6 items-center md:flex-row md:justify-between shadow-md bg-linear-to-r from-blue-100 to-blue-200 px-4 py-5 rounded-xl">
               <div className="flex gap-3 items-center w-full justify-center md:justify-start md:w-[45%] ">
                <div className="bg-green-200 text-2xl text-green-900 rounded-lg w-10 h-10 flex justify-center items-center" >
                 <Timer size={20} />
                </div>
            <div className="w-[40%]">
                <h1 className="text-sm font-semibold text-gray-600" >Clock In</h1>
                <span className="text-xl font-medium">09:00</span>
            </div> 
        </div>
               <div className="flex gap-3 items-center w-full justify-center md:justify-start md:w-[45%]">
           <div className="bg-red-200 text-2xl text-red-900 rounded-lg w-10 h-10 flex justify-center items-center" >
                 <Timer size={20} />
                </div>
            <div className="w-[40%]">
                 <h1 className="text-sm font-semibold text-gray-600" >Clock Out</h1>
                <span className="text-xl font-medium">--:--</span>
            </div> 
        </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row items-center justify-between">
         <button className="w-full md:w-[48%] transition ease-in duration-200 bg-sky-400 hover:bg-sky-300 cursor-pointer p-4 rounded-2xl flex justify-center items-center gap-2 font-semibold text-white">
            <LogIn size={15} className="font-semibold"/>
            <span className="text-lg  ">Clock In</span>
         </button>
         <button className="w-full md:w-[48%]  transition ease-in duration-200 bg-red-500 hover:bg-red-400 cursor-pointer  p-4 rounded-2xl flex justify-center items-center gap-2 font-semibold text-white">
            <LogOut size={15} className="font-semibold"/>
            <span className="text-lg  ">Clock In</span>
         </button>

        </div>
    </div>
  )
}

export default EmpolyeeCard