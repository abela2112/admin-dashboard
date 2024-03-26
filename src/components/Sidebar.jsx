import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { links } from '../data/dummy'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../context/ContextProvider'
const Sidebar = () => {
    const { isActiveMenu, setIsActiveMenu, currentColor, screenSize } = useStateContext()
    const activeLink = 'flex items-center gap-5 rounded-lg text-md text-white m-2 pb-2.5 pt-3 pl-4'
    const normalLink = 'flex items-center gap-5 rounded-lg text-md text-gray-900 pb-2.5 pt-3 pl-4 text-gray-700 dark:text-gray-200 dark:hover:text-dark hover:bg-light-gray'
    const handleCloseSidebar = () => {
        if (isActiveMenu && screenSize <= 900) {
            setIsActiveMenu(false)
        }

    }
    return (
        <div className='ml-3 md:overflow-hidden md:hover:overflow-auto h-screen overflow-auto pb-10'>
            {isActiveMenu && (
                <>
                    <div className='flex justify-between items-center'>
                        <Link to='/'
                            onClick={() => handleCloseSidebar()}
                            className="items-center gap-3 ml-3 mt-4 flex text-xl dark:text-white text-slate-900 font-extrabold tracking-tight" >
                            <SiShopware />
                            <span>Shopify</span>
                        </Link>
                        <TooltipComponent
                            content={'Menu'}
                            position='BottomCenter'
                        >
                            <button type='button'
                                onClick={() => { setIsActiveMenu((prev) => !prev) }}
                                className='text-xl mt-4 rounded-full p-3 hover:bg-light-gray block '

                            >
                                <MdOutlineCancel />
                            </button>
                        </TooltipComponent>
                    </div>

                    <div className='mt-10'>

                        {links.map((item, index) => (
                            <div key={item.title}>
                                <p className='m-3 mt-4 text-gray-400'>{item.title}</p>
                                {
                                    item.links.map((link, i) => (
                                        <NavLink to={`/${link.name}`}
                                            key={link.name}
                                            onClick={() => handleCloseSidebar()}
                                            style={({ isActive }) => ({
                                                backgroundColor: isActive ? currentColor : ''

                                            })}
                                            className={({ isActive }) => isActive ? activeLink : normalLink}
                                        >
                                            {link.icon}
                                            <span className='capitalize'>{link.name}</span>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        ))}


                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar