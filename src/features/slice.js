// Redux Imports
import { createSlice } from '@reduxjs/toolkit'

// Timer Default Preset
const defaultPreset = {
    sessionSeconds: 0,
    sessionMinutes: 25,
    breakSeconds: 0,
    breakMinutes: 5,
    timerRunStatus: false,
    alarm: false,
    rest: false
}

// Timer Initial State
const initialState = {
    sessionSeconds: 0,
    sessionMinutes: 10,
    breakSeconds: 0,
    breakMinutes: 5,
    timerRunStatus: false,
    alarm: false,
    rest: true,
    duration: 1000,
}

// Redux Slice Configuration
const slice = createSlice({
    name: 'timer',
    initialState,
    reducers: {

        // Handles All Functions Regarding To Timer

        /* Resets  The Time To Default Configuration */
        resetTimer: (state) => { 
            state.sessionSeconds = defaultPreset.sessionSeconds
            state.sessionMinutes = defaultPreset.sessionMinutes,
            state.breakMinutes = defaultPreset.breakMinutes
            state.breakSeconds = defaultPreset.breakSeconds,
            state.timerRunStatus = defaultPreset.timerRunStatus,
            state.alarm = defaultPreset.alarm,
            state.rest = defaultPreset.rest
        },

        // Handles All Functions Regarding Session
        
        
        handleSessionTimer: (state) => {
            state.sessionSeconds -= 1
            if (state.sessionSeconds == 59) {
                state.sessionMinutes -= 1
            }
            if (state.sessionSeconds == 0) {
                setTimeout(() => {
                    state.sessionSeconds = 59
                }, state.duration)
                
            }
        },

        /* Increases Session Time */
        handleSessionIncrement: (state) => {
            if (state.sessionMinutes < 60) {
                state.sessionMinutes += 1
            }
        },

        /* Decreases Session Time */
        handleSessionDecrement: (state) => {
            if (state.sessionMinutes > 1) {
                state.sessionMinutes -= 1
            }
        },

        // Handles All Functions Regarding Break
        handleBreakTimer: (state) => {
            
            if (state.breakSeconds == 59) {
                state.breakMinutes -= 1
            }
            if (state.breakSeconds == 0) {
                state.breakSeconds -= 1
                setTimeout(() => {
                    state.breakSeconds = 59
                }, state.duration)
                
            }
        },

        /* Increases Break Time */
        handleBreakIncrement: (state) => {
            if (state.breakMinutes < 60) {
                state.breakMinutes += 1
            }
        },

        /* Decreases Break Time */
        handleBreakDecrement: (state) => {
            if (state.breakMinutes > 1) {
                state.breakMinutes -= 1
            }
        },

        // Handles The Alarm Sound
        handleAlarm: (state) => {
            if (state.sessionMinutes == 0 && state.sessionSeconds == 0) {
                state.alarm = true;
            }
            else if (state.breakMinutes == 0 && state.breakSeconds == 0) {
                state.alarm = true;
            }
            else {
                state.alarm = false;
            }
        }

    }
})

export const 
    { 
        resetTimer,
        startTimer,
        pauseTimer,

        handleSessionTimer,
        handleSessionIncrement,
        handleSessionDecrement,

        handleBreakTimer,
        handleBreakIncrement,
        handleBreakDecrement,

        handleAlarm

    } = slice.actions

export default slice.reducer