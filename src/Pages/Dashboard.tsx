
import HoverGradientNavBar from "@/Components/ui/hover-gradient-nav-bar"
import AttendaceTable from "@/Pagecomponents/AttendaceTable"
import EmpolyeeCard from "@/Pagecomponents/EmpolyeeCard"
import TeamsList from "@/Pagecomponents/TeamsList"
import TeamStatus from "@/Pagecomponents/TeamStatus"


function Dashboard() {
  return (
    <>
      
   <div className=" h-auto md:pt-4 bg-sky-50 dark:bg-slate-900">
     
        <div >
              <HoverGradientNavBar/>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:justify-center w-full p-5 md:p-20 lg:p-20">
            
            <div className="md:w-full lg:w-[60%] flex flex-col gap-4 " >
                    <EmpolyeeCard/>
                    <AttendaceTable/>
            </div>
            <div className="md:w-full lg:w-[35%] flex flex-col gap-4">
               <TeamStatus/>
               <TeamsList/>
            </div>
        </div>
      
    </div>
    </>
  
  )
}

export default Dashboard