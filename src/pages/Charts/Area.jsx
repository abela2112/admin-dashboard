import React from 'react'
import { Header } from '../../components'
import { ChartComponent, DateTime, Legend, Inject, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries } from '@syncfusion/ej2-react-charts'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'

const Area = () => {
    const { currentMode } = useStateContext()
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl'>
            <Header category='charts' title='Inflation Rate in Percentage' />
            <div className="w-full">
                <ChartComponent
                    id='area-chart'
                    height='420px'
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                >
                    <Inject services={[SplineAreaSeries, Legend, DateTime,]} />
                    <SeriesCollectionDirective>
                        {areaCustomSeries.map((item, index) => (
                            <SeriesDirective key={index} {...item} />
                        ))}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default Area