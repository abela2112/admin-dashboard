import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-charts'
import { Edit, Filter, GridComponent, Inject, Page, Selection, Sort, Toolbar } from '@syncfusion/ej2-react-grids'
import React from 'react'
import { Header } from '../components'
import { customersData, customersGrid } from '../data/dummy'

const Customers = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='page' title='Customers' />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true }}
                width={'auto'}

            >
                <ColumnsDirective>
                    {customersGrid.map((data, index) => (
                        <ColumnDirective key={index} {...data} />

                    ))}
                </ColumnsDirective>
                <Inject services={[Selection, Sort, Filter, Page, Edit, Filter, Toolbar]} />
            </GridComponent>

        </div>
    )
}

export default Customers