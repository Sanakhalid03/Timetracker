import { createSlice } from "@reduxjs/toolkit";
interface AttendaceTableState{
    date:string,
     clockIn:string| null,
    clockOut:string| null,
    duration: string,
}
interface ClockState{
    clockIn:string| null,
    clockOut:string| null,
    record:AttendaceTableState[],
}
const initialState:ClockState= {
    clockIn: null,
    clockOut:null,
    record:[]
}
const ClockSlice = createSlice(
    {
        name:"Clock",
        initialState,
        reducers:{
            clockIn(state){
                state.clockIn= new Date().toISOString();
                state.clockOut= null;
            },
            clockOut(state){
                if(!state.clockIn) return
                const clockOutTime= new Date()
                const clockInTime=new Date(state.clockIn)
                 
                const diffms=clockOutTime.getTime()- clockInTime.getTime()
                const hours= Math.floor(diffms/(1000*60*60))
                const min= Math.floor(diffms/(1000*60)%60)
                state.record.unshift({
                date: clockInTime.toDateString(),
                clockIn: clockInTime.toISOString(),
                clockOut:clockOutTime.toISOString(),
                duration:`${hours}h ${min}m` 
                })

                state.clockIn=null
                state.clockOut= new Date().toISOString();
            }
        }
    },
    

)
export const {clockIn,clockOut}=ClockSlice.actions
export default ClockSlice.reducer