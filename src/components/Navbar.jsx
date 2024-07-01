import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FaShoppingCart } from 'react-icons/fa'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useStateContext } from '../context/ContextProvider'
// import {avatar} from ''
import { RiNotification3Fill } from 'react-icons/ri'
import { Cart, Chat, Notification, UserProfile } from '../components'
import avatar from '../data/avatar.jpg'
const NavButton = ({
    color, customFunc, title, icon, dotColor
}) => (
    <TooltipComponent content={title} position='BottomCenter'>
        <button type='button' onClick={customFunc}
            style={{ color }}
            className='relative text-xl rounded-full p-3 hover:
        bg-light-gray'
        >
            <span style={{ background: dotColor }} className='absolute inline-flex w-2 h-2 right-2 top-2 rounded-full' />
            {icon}

        </button>
    </TooltipComponent>

)
const Navbar = () => {
    const { currentColor, setIsActiveMenu, isClicked, handleClick, screenSize, setScreenSize } = useStateContext()
    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useEffect(() => {
        if (screenSize <= 900) {
            setIsActiveMenu(false)
        }
        else {
            setIsActiveMenu(true)
        }
    }, [screenSize])
    return (
        <div className='flex justify-between p-2 md:mx-2 relative'>
            <NavButton title={'Menu'} customFunc={() => setIsActiveMenu((prev) => !prev)} icon={<AiOutlineMenu />} color={currentColor} />

            <div className="flex gap-x-2">
                <NavButton title={'Cart'} customFunc={() => handleClick('cart')} icon={<FaShoppingCart />} color={currentColor} />
                <NavButton title={'Chat'} dotColor={'#03c9d7'} customFunc={() => handleClick('chat')} icon={<BsChatLeft />} color={currentColor} />
                <NavButton title={'Notifications'} dotColor={'#03c9d7'} customFunc={() => handleClick('notification')} icon={<RiNotification3Fill />} color={currentColor} />
                <TooltipComponent content={'profile'}
                    position='BottomCenter'
                >
                    <div className='flex items-center p-1 cursor-pointer hover:bg-light-gray rounded-lg gap-2'
                        onClick={() => handleClick('userProfile')}

                    >

                        <img src={avatar} alt="" className='w-8 h-8 rounded-full' />
                        <p>
                            <span className='text-14 text-gray-400'>Hi,</span> {" "}
                            <span className='text-14 text-gray-400 font-bold ml-1'>Abel</span>
                        </p>

                        <MdKeyboardArrowDown className='text-14 text-gray-400' />

                    </div>
                </TooltipComponent>
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.userProfile && <UserProfile />}
                {isClicked.notification && <Notification />}
            </div>
        </div>
    )
}

export default Navbar