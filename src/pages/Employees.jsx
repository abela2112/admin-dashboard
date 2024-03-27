import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-charts'
import { GridComponent, Inject, Page, Search, Toolbar } from '@syncfusion/ej2-react-grids'
import React from 'react'
import { Header } from '../components'
import { employeesData, employeesGrid } from '../data/dummy'

const Employees = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='page' title='Employees' />
            <GridComponent

                dataSource={employeesData}
                allowPaging
                allowSorting
                toolbar={['Search']}
                width={'auto'}

            >
                <ColumnsDirective>
                    {employeesGrid.map((data, index) => (
                        <ColumnDirective key={index} {...data} />

                    ))}
                </ColumnsDirective>
                <Inject services={[Search, Page, Toolbar]} />
            </GridComponent>

        </div>
    )
}

export default Employees