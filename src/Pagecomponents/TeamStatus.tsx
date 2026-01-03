import { Users } from "lucide-react";


function TeamStatus() {
  return (
    <div className="w-full bg-white px-6 py-4 rounded-lg shadow-lg flex justify-between items-center dark:bg-slate-800 dark:shadow-black/30">
      <div className="flex flex-col gap-2">
       <span className="text-sm text-gray-500 dark:text-slate-400">Team Working Now</span>
       <span className="text-3xl font-bold text-green-700 dark:text-green-400">3</span>
      </div>
      <div className="bg-indigo-100 dark:bg-indigo-900/40 dark:text-green-400 text-2xl text-green-600 rounded-lg w-13 h-13 flex justify-center items-center">
        <Users size={30}/>
      </div>
    </div>
  );
}

export default TeamStatus;
