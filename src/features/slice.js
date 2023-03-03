import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    // Timer Initial State
    min: '25',
    sec: '00',
    stop: false,
    resume: false,
    timerType: 'Session',

    // Session Initial State
    session: 25,

    //  Break Initial State
    break: 5
}

const slice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        //  Timer Reducers
        countDown: (state) => {
            if (parseInt(state.min) === 0 && parseInt(state.sec) === 0 && !state.resume) {
                console.log("Working")
                state.stop = true
                state.min = '00'
                state.sec = '00'
            }
            if (parseInt(state.sec) < 1 && !state.stop) {
                parseInt(state.min) < 11
                    ? (state.min = `0${parseInt(state.min) - 1}`)
                    : (state.min = `${parseInt(state.min) - 1}`)
                state.sec = `60`
            }
            if (!state.stop) {
                if (parseInt(state.sec) < 11) {
                    state.sec = `0${parseInt(state.sec) - 1}`
                } else {
                    state.sec = `${parseInt(state.sec) - 1}`
                }
            }
        },

        setCountDown: (state, action) => { state.min = action.payload, state.sec = "00" },

        setTimerType: (state, action) => { state.timerType = action.payload },

        resumeTimer: (state, action) => { state.resume = action.payload },

        resetTimer: (state) => { 
            state.min = '25'
            state.sec = '00'
            state.break = 5,
            state.session = 25
            state.resume = true;
        },

        //  Session Reducers

        setSession: (state, action) => {
            state.session = action.payload
        },

        increaseSession: (state, _) => {
            if (state.session === 60) {
                console.log('Session Upper Limit Reached')
            } else {
                state.session++
                state.min = `${state.session}`;
                state.sec = `00`;
            }
        },

        decreaseSession: (state, _) => {
            if (state.session === 1) {
                console.log('Session Lower Limit Reached')
            } else {
                state.session--
                state.min = `${state.session}`;
                state.sec = `00`;
            }
        },

        // Break Reducers

        setBreak: (state, action) => { state.break = action.payload },

        increaseBreak: (state) => {
            if (state.break === 60) {
                console.log('Break Upper Limit Reached')
            } else {
                state.break++
            }
        },

        decreaseBreak: (state) => {
            console.log("Not Working")
            if (state.break === 1) {
                console.log('Break Lower Limit Reached')
            } else {
                state.break--
            }
        },
    }
})

export const 
    { 
        setSession,
        setBreak,
        increaseSession, 
        decreaseSession,
        increaseBreak,
        decreaseBreak,
        countDown,
        setCountDown,
        setTimerType,
        resumeTimer,
        resetTimer
    } = slice.actions

export default slice.reducer