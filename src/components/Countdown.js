import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import mySound from '../sound/timesUp.mp3'


const Countdown = ({ color, setbgColor, bgColor, setColor, startColor, setStartColor }) => {

  const [playSound] = useSound(mySound, { volume: 0.7 })

  const changeBgColorHandler = (changeColor, ChangecdColor, changeStartColor) => {
    setbgColor(changeColor);
    setColor(ChangecdColor);
    setStartColor(changeStartColor);
  };

  const [seconds, setSeconds] = useState(3)
  const [minutes, setMinutes] = useState(0)
  const [timer, setTimer] = useState(false)
  const [mode, setMode] = useState('Pomodoro')
  const [modalState, setModalState] = useState(false)


  function start() {
    setTimer(!timer);
  }

  useEffect(() => {
    let interval;
    if (timer) {
      interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {

          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes => minutes - 1)
          }
          else {
            setTimer(!timer)
            setModalState(true)
            playSound()

          }

        } else {
          setSeconds(seconds - 1);
        }


      }, 1000);
    } else if (!timer && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds === 0 && minutes === 0 && (bgColor === 'bg-green-600' || bgColor === 'bg-cyan-700')) {
      setModalState(false)
      setTimer(false)
      setMinutes(0)
      setSeconds(6)
      changeBgColorHandler('bg-red-600', 'bg-red-500', 'text-red-600')
      

    }
    return () => clearInterval(interval);

  }, [timer, seconds]);

  useEffect(() => {

    if (mode === 'long Break') {
      changeBgColorHandler('bg-cyan-700', 'bg-cyan-800', 'text-cyan-700')
      setMinutes(0)
      setSeconds(3)
      start()
      setModalState(false)

    } else if (mode === 'short Break') {
      changeBgColorHandler('bg-green-600', 'bg-green-500', 'text-green-600')
      setMinutes(0)
      setSeconds(2)
      start()
      setModalState(false)

    }
  }, [mode])

  const Min = minutes > 9 ? minutes : '0' + minutes
  const Sec = seconds > 9 ? seconds : '0' + seconds
  function choice(a) {

    setMode(a)
  }
  //function showModel(){
  //if(type =='short break'){}}

  return (
    <div className={`${color} flex  flex-col items-center border-solid border-1 rounded m-4 py-5 h-60 w-82 md:mx-auto md:w-[45%]`} >
      <div >
        <button onClick={() => changeBgColorHandler('bg-red-600', 'bg-red-500', 'text-red-600')} className={`pomodoro text-white   active:bg-red-600 focus:outline-none focus:bg focus:bg-red-600  w-rounded  mx-2`}>Pomodoro</button>
        <button onClick={() => changeBgColorHandler('bg-green-600', 'bg-green-500', 'text-green-600')} className='text-white  active:bg-green-500 focus:outline-none focus:bg focus:bg-green-600  rounded  mx-2'>Short Break</button>
        <button onClick={() => changeBgColorHandler('bg-cyan-700', 'bg-cyan-800', 'text-cyan-700')} className=' text-white  active:bg-cyan-800 focus:outline-none focus:bg focus:bg-cyan-700  rounded  mx-2'>Long Break</button>

      </div>
      <div className='w-96 h-28 text-white text-center text-8xl font-mono'> {Min}:{Sec} </div>

      <div>
        <button onClick={start} className={`btn-start mt-5 bg-white border-solid border-white border-1 rounded ${startColor} font-bold w-52 h-14  hover:shadow-white active:shadow none -translate-y-2 `}  >{timer ? 'Pause' : 'Start'}</button>
      </div>
      {modalState && <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">

            <div class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                    <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Do u want to take a break ?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button onClick={() => choice('short Break')} type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">short break</button>
                <button onClick={() => choice('long Break')} type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">long break</button>
              </div>
            </div>
          </div>
        </div>
      </div>}

    </div>
  )
}

export default Countdown