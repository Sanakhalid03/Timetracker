import { Calendar1 } from "@/Components/ui/calender"



function AttendaceTable() {
  return (
    <div className="flex flex-col gap-12  bg-white py-10 px-2 md:px-8 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row gap-3 items-center">
                      <div className="bg-indigo-100 text-2xl rounded-lg w-13 h-13 flex justify-center items-center" >
                         <Calendar1 stroke="#4f39f6" className="text-blue-900 font-medium "/>
                        </div>
                    <div className="flex flex-col gap-1 items-center md:items-start">
                        <h1 className="text-xl font-medium">Attendance History</h1>
                        <span className="text-sm">Your recent clock-in and clock-out records</span>
                    </div> 
                </div>


                <div className="w-full md:w-[80%] border border-gray-400 rounded-xl overflow-hidden md:mx-auto">
       <table className="w-full text-center table-auto   border-collapse divide-y ">
            <thead className=" bg-gray-100  ">
                <tr className="text-gray-600 text-sm md:text-md">
                <th  className="px-1 py-2 md:px-2 md:py-4 font-semibold ">Date</th>
                <th  className="px-1 py-2 md:px-2 md:py-4 font-semibold ">Clock In</th>
                <th  className="px-1 py-2 md:px-2 md:py-4 font-semibold ">Clock Out</th>
                <th  className="px-1 py-2 md:px-2 md:py-4 font-semibold ">Duration</th>
                </tr>
              
            </thead>
            <tbody className="divide-y ">
                <tr className="text-xs md:text-sm font-medium">
                    <td className="px-1 py-2 md:px-2 md:py-4">Dec 28, 2025</td>
                    <td className="px-1 py-2 md:px-2 md:py-4 text-green-700">09:00</td>
                    <td className="px-1 py-2 md:px-2 md:py-4  text-red-700">09:00</td>
                    <td className="px-1 py-2 md:px-2 md:py-4">12h 24m</td>
                </tr>
                <tr className="text-xs md:text-sm font-medium">
                    <td className="px-1 py-2 md:px-2 md:py-4">Dec 28, 2025</td>
                    <td className="px-1 py-2 md:px-2 md:py-4 text-green-700">09:00</td>
                    <td className="px-1 py-2 md:px-2 md:py-4  text-red-700">09:00</td>
                    <td className="px-1 py-2 md:px-2 md:py-4">12h 24m</td>
                </tr>
                <tr className="text-xs md:text-sm font-medium">
                    <td className="px-1 py-2 md:px-2 md:py-4">Dec 28, 2025</td>
                    <td className="px-1 py-2 md:px-2 md:py-4 text-green-700">09:00</td>
                    <td className="px-1 py-2 md:px-2 md:py-4  text-red-700">09:00</td>
                    <td className="px-1 py-2 md:px-2 md:py-4">12h 24m</td>
                </tr>
               
              
              
            </tbody>
           </table>
                </div>
         

    </div>
  )
}

export default AttendaceTable