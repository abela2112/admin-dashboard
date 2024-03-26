import React from 'react'
import { Header, LineChart } from '../../components'

const Line = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
            <Header category='charts' title='Inflation Rate' />
            <div className="w-full">
                <LineChart />
            </div>
        </div>
    )
}

export default Line