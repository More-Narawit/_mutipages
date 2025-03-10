import'./Timer.css'
import { useEffect, useState } from 'react'

function Timer({ name }) {
    //state
    const [running, setRunning] = useState(false)
    const [seconds, setSeconds] = useState(0)

    useEffect( () => {
        let interval = null
        if(running){
            interval = setInterval( () => {
                setSeconds(seconds => seconds + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    },[running,seconds])

    function runClick(){
        setRunning(!running)
    }

    function secondsToString(seconds){
        const MINUTE_SECONDS = 60
        const HOUR_SECONDS = MINUTE_SECONDS * 60
        const DAY_SECONDS = HOUR_SECONDS * 24

        const days = Math.floor(seconds / DAY_SECONDS)
        const hours = Math.floor((seconds % DAY_SECONDS) / HOUR_SECONDS)
        const minutes = Math.floor((seconds % HOUR_SECONDS) / MINUTE_SECONDS)
        const secs = Math.floor(seconds % MINUTE_SECONDS)

        if(days > 0){
            return `${days}d ${hours}h ${minutes}m ${secs}s`
        }
        else if(hours > 0){
            return `${hours}h ${minutes}m ${secs}s`
        }
        else if(minutes > 0){
            return `${minutes}m ${secs}s`
        }
        else{
            return `${secs}s`
        }

    }

    function resetClick(){
        setRunning(false)
        setSeconds(0)
    }

    return(
        <div className="timer-container">
            <h2 className='timer-title'>{name || "Timer"}</h2>
            
            <p><input className='timer-display' 
            type="text" readOnly={true} 
            value={secondsToString(seconds)}/></p>

            <div className='timer-buttons'>
                <button className='btn btn-danger' onClick={resetClick}>Reset</button>
                <button className={running ? 'btn btn-warning' : 'btn btn-success'} onClick={runClick}>{running ? 'Pause' : 'Run'}</button>
            </div>
        </div>
        
    )
}

export default Timer