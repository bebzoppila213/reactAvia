import { useMemo, useState } from "react";

export interface ITimer{
    hour: number, 
    minotes: number
}
export type TimesType = {
    startTime: ITimer;
    endTime: ITimer;
  };


export default function useTime(startTime: ITimer, endTime: ITimer){
    const [time, setTime] = useState<TimesType>({startTime: startTime, endTime: endTime})

    const updateTime = (firstTime: ITimer, secondTime: ITimer) => {
        setTime({...time, startTime: firstTime, endTime: secondTime})
    }

    const toSeconts = (time: ITimer) => {
        return (Number(time.hour) * 3600) + (Number(time.minotes) * 60)
    }

    const toHour = (seconts: number) => {
        return Math.floor(seconts / 3600)
    }
    
    const toMinotest = (seconts: number) => {
        return ((seconts / 3600) - toHour(seconts)) * 60
    }

    
    
    const difference = useMemo(()=> {
        const differenceSeconds = Math.abs(toSeconts(time.startTime) - toSeconts(time.endTime))
        return{
            hour: toHour(differenceSeconds), 
            minotes: Number(toMinotest(differenceSeconds).toFixed(0))
        }
    },[time])

    return{
        time,
        difference,
        updateTime
    }
}