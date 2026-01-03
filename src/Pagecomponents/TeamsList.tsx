import { User, Users } from "lucide-react";
import { PiDotFill } from "react-icons/pi";

function TeamsList() {
  return (
    <div className="flex flex-col gap-12  bg-white py-10 px-4 md:px-8 rounded-2xl shadow-lg dark:bg-slate-800 dark:shadow-black/30">
      <div className="flex flex-col md:flex-row gap-3 items-center">
        <div className="bg-indigo-100  dark:bg-indigo-900/40 text-blue-900 font-medium dark:text-indigo-400 text-2xl rounded-lg w-13 h-13 flex justify-center items-center">
          <Users />
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start">
          <h1 className="text-xl font-medium dark:text-slate-100">Team Status</h1>
          <span className="text-sm dark:text-slate-400">Today's attendance overview</span>
        </div>
      </div>

      <div className="flex flex-col gap-5  py-10 px-4 md:px-8 rounded-2xl shadow-lg bg-green-100 dark:bg-emerald-900/30">
        <div className="flex items-center justify-between flex-wrap gap-4  ">
          <div className="flex gap-3 items-center">
            <div className="bg-green-200 text-2xl text-green-900 rounded-lg w-13 h-13 flex justify-center items-center">
              <User size={20} />
            </div>
            <div>
              <h1 className="text-xl font-medium dark:text-slate-100">Sana Khalid</h1>
              <span className="text-sm text-gray-500 dark:text-slate-400">Web Developer</span>
            </div>
          </div>

          <div className="flex items-center bg-green-200 gap-1 font-semibold border-2 border-green-900 p-2 rounded-xl dark:bg-emerald-900/40 dark:text-emerald-400 dark:border-emerald-500
">
            <PiDotFill />
            <span className="text-xs  ">Currently Working</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-3 md:flex-row items-center justify-between shadow-md px-4 bg-white dark:bg-slate-900 py-5 rounded-xl">
          <div className="flex flex-col gap-3 items-center w-[45%]">
            <h1 className="text-sm font-semibold text-gray-600 dark:text-slate-400">Clock In</h1>
            <span className="text-xl font-medium">09:00</span>
          </div>
          <div className="flex flex-col gap-3 items-center  w-[45%]">
            <h1 className="text-sm font-semibold text-gray-600 dark:text-slate-400">Clock Out</h1>
            <span className="text-xl font-medium">--:--</span>
          </div>
          <div className="flex flex-col gap-3 items-center  w-[45%]">
            <h1 className="text-sm font-semibold text-gray-600 dark:text-slate-400">Duration</h1>
            <span className="text-xl font-medium">--:--</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamsList;
