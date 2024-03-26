import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { themeColors } from '../data/dummy'
import { Tooltip, TooltipComponent } from '@syncfusion/ej2-react-popups'
import { BsCheck } from 'react-icons/bs'
import { useStateContext } from '../context/ContextProvider'

const ThemeSettings = () => {
    const { currentColor,
        currentMode,
        setMode,
        setThemeSettings,
        setColor } = useStateContext()
    return (
        <div className='bg-half-transparent w-screen fixed top-0 right-0 nav-item'>
            <div className='w-400 bg-white h-screen dark:text-gray-200 float-right dark:[#484B52]'>

                <div className='flex justify-between p-4 ml-4 items-center'>
                    <p className='text-lg font-semibold'>Settings</p>
                    <button className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
                        onClick={() => { setThemeSettings(false) }}
                        style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
                    >
                        <MdOutlineCancel />
                    </button>
                </div>
                <div className="flex-col border-t-1 border-color ml-4 mt-2 p-4">
                    <p className="text-lg font-semibold">
                        Theme Options
                    </p>
                    <div className="mt-4">
                        <input
                            id="Light"
                            type='radio'
                            name="theme"
                            value='Light'
                            checked={currentMode === 'Light'}
                            className='cursor-pointer'
                            onChange={setMode}

                        />
                        <label htmlFor="Light" className='ml-2 text-base cursor-pointer'>Light</label>
                    </div>
                    <div className="mt-4">
                        <input
                            id="Dark"
                            type='radio'
                            name="theme"
                            value='Dark'
                            checked={currentMode === 'Dark'}
                            className='cursor-pointer'
                            onChange={setMode}
                        />
                        <label htmlFor="Dark" className='ml-2 text-md cursor-pointer'>Dark</label>
                    </div>
                </div>

                <div className="flex-col border-t-1 border-color ml-4 mt-2 p-4">
                    <p className="text-lg font-semibold">
                        Theme Colors
                    </p>
                    <div className='flex gap-3'>
                        {themeColors.map((item, index) => (
                            <TooltipComponent content={item.name} position='TopCenter' key={index}>
                                <div className='relative flex items-center gap-5 cursor-pointer mt-2'>
                                    <button
                                        type='button'
                                        className='w-10 h-10 rounded-full cursor-pointer'
                                        style={{ backgroundColor: item.color }}
                                        onClick={() => setColor(item.color)}
                                    >
                                        <BsCheck className={`ml-2 text-2xl ${currentColor === item.color ? 'block' : 'hidden'} text-white`} />
                                    </button>
                                </div>
                            </TooltipComponent>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeSettings