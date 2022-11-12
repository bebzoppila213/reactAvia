

export const timeToNormalView = (time: number) => {
    return time >= 10 ? String(time) : `0${time}` 
}