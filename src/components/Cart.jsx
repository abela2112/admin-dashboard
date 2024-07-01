import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../context/ContextProvider'
import { cartData } from '../data/dummy'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Button from './Button'

const Cart = () => {
    const { currentColor, setIsActiveMenu, setIsClicked, isClicked, handleClick, screenSize, setScreenSize } = useStateContext()
    return (
        <div className='bg-half-transparent w-screen fixed top-0 right-0 nav-item'>
            <div className='w-350 bg-white h-screen dark:text-gray-200 float-right dark:[#484B52] p-6'>

                <div className='flex justify-between p-4 ml-4 items-center'>
                    <p className='text-lg font-semibold'>Shopping Cart</p>
                    <button className='text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray'
                        onClick={() => setIsClicked({ ...isClicked, cart: false })}
                        style={{ color: 'rgb(153,171,180)', borderRadius: '50%' }}
                    >
                        <MdOutlineCancel />
                    </button>
                </div>

                {cartData.map(item =>
                    <div className='flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4'>
                        <img className='w-20 h-80 object-cover rounded-lg' src={item.image} alt="" />
                        <div>
                            <p className='font-semibold'>{item.name}</p>
                            <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold'>{item.category}</p>

                            <div className='flex gap-4 mt-2 items-center'>
                                <p className='text-xl font-bold'>{item.price}</p>
                                <div className='flex items-center border-1 border-r-0 border-color rounded'>
                                    <p className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 "><AiOutlineMinus /></p>
                                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600">0</p>
                                    <p className="p-2 border-r-1 border-color dark:border-gray-600 text-green-600"><AiOutlinePlus /></p>

                                </div>
                            </div>

                        </div>

                    </div>
                )}

                <div className="mt-3 mb-3">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
                        <p className="font-semibold">$890</p>
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-gray-500 dark:text-gray-200">Total</p>
                        <p className="font-semibold">$890</p>
                    </div>
                </div>
                <div className="mt-5 w-full">
                    <Button
                        color="white"
                        bgColor={currentColor}
                        text="Place Order"
                        borderRadius="10px"
                        width="full"
                    />
                </div>

            </div>
        </div>
    )
}

export default Cart