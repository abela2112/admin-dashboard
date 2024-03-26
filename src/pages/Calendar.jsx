import React from 'react'
import { Header } from '../components'
import { ScheduleComponent, Inject, Day, WorkWeek, Week, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'
import { scheduleData } from '../data/dummy'
const Calendar = () => {
    return (
        <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category={'App'} title={'Calender'} />
            <ScheduleComponent
                height={'650px'}
                eventSettings={{ dataSource: scheduleData }}
                selectedDate={new Date(2021, 0, 10)}
            >
                <Inject services={[Day, WorkWeek, Week, Month, Agenda, Resize, DragAndDrop]} />
            </ScheduleComponent>
        </div>
    )
}

export default Calendar