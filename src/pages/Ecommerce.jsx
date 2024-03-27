import React from 'react';
import { GoDotFill } from "react-icons/go";
import { Button, SparkLine, Stacked } from '../components';
import { useStateContext } from '../context/ContextProvider';
import { earningData, SparklineAreaData } from '../data/dummy';

const Ecommerce = () => {
    const { currentColor } = useStateContext()
    return (
        <div className='mt-12'>
            <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                <div className='bg-white w-full lg:w-80 dark:text-gray-200 dark:bg-secondary-dark-bg bg-hero-pattern bg-cover bg-no-repeat bg-center p-8 pt-9 m-3 rounded-lg '>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className=' font-bold text-gray-400'>Earnings</p>
                            <p className='text-2xl'>$10034683</p>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <Button color="white"
                            bgColor={currentColor}
                            text="Download"
                            borderRadius="10px"
                            size='md'
                        />
                    </div>

                </div>
                <div className='mt-3 flex flex-wrap gap-4 justify-center items-center'>
                    {earningData.map((item) => (
                        <div key={item.title} className='bg-white dark:bg-secondary-dark-bg dark:text-gray-200 md:w-56 p-4 pt-9 rounded-2xl'>
                            <button type='button' style={{ backgroundColor: item.iconBg, color: item.iconColor }}
                                className='text-2xl rounded-full hover:drop-shadow-xl p-4 opacity-90'
                            >
                                {item.icon}
                            </button>
                            <p className='mt-3'>
                                <span className='text-lg font-semibold'>
                                    {item.amount}
                                </span>

                                <span className={`text-sm text-${item.pcColor}  ml-2`}>
                                    {item.percentage}
                                </span>
                            </p>
                            <p className="text-gray-400 mt-1 text-small">
                                {item.title}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10">
                <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
                    <div className="flex justify-between">
                        <p className="text-semibold text-xl">
                            Revenu updates
                        </p>
                        <div className="flex items-center gap-4">
                            <p className='flex justify-between items-center text-gray-600 gap-2 hover:drop-shadow-xl'>
                                <span><GoDotFill /></span>
                                <span>Expense</span>

                            </p>
                            <p className='flex justify-between items-center text-green-400 gap-2 hover:drop-shadow-xl'>
                                <span><GoDotFill /></span>
                                <span>Budget</span>

                            </p>
                        </div>

                    </div>

                    <div className="mt-10 gap-10 flex justify-center flex-wrap">
                        <div className="border-r-1 border-color m-4 pr-10">
                            <div>
                                <p>
                                    <span className='font-semibold text-3xl'>$10899</span>
                                    <span className='text-sm rounded-full bg-green-400 hover:drop-shadow-xl p-1.5 cursor-pointer text-white ml-3'>23%</span>
                                </p>
                                <p className='text-gray-500 mt-1'>
                                    Budget
                                </p>
                            </div>
                            <div className='mt-8'>
                                <p>
                                    <span className='font-semibold text-3xl'>$10899</span>
                                    {/* <span className='text-sm rounded-full bg-green-400 hover:drop-shadow-xl p-1.5 cursor-pointer text-white ml-3'>23%</span> */}
                                </p>
                                <p className='text-gray-500 mt-1'>
                                    Budget
                                </p>
                            </div>
                            <div className="mt-5">
                                <SparkLine
                                    currentColor={currentColor}
                                    id={"line-sparkline"}
                                    type="Line"
                                    width="250px"
                                    height="80px"
                                    data={SparklineAreaData}
                                    color={currentColor}
                                />
                            </div>
                            <div className='mt-10'>
                                <Button
                                    bgColor={currentColor}
                                    borderRadius={'10px'}
                                    text={'Download Report'}
                                    color={'white'}
                                />
                            </div>
                        </div>
                        <div>
                            <Stacked
                                width="320px"
                                height="360px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecommerce