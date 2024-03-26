import React from 'react'
import { Header } from '../components'
import { GridComponent, Inject, Edit, Resize, ExcelExport, PdfExport, ContextMenu, Filter, Page, Sort, } from '@syncfusion/ej2-react-grids'
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-charts'
import { ordersData, ordersGrid } from '../data/dummy'

const Orders = () => {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='page' title='Orders' />
            <GridComponent
                id='Grid Component'
                dataSource={ordersData}
                allowPaging
                allowSorting

            >
                <ColumnsDirective>
                    {ordersGrid.map((data, index) => (
                        <ColumnDirective key={index} {...data} />

                    ))}
                </ColumnsDirective>
                <Inject services={[Edit, Resize, ExcelExport, PdfExport, Sort, ContextMenu, Filter, Page]} />
            </GridComponent>

        </div>
    )
}

export default Orders