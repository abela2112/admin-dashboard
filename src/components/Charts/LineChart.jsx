import { ChartComponent, DateTime, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { lineChartData, lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../context/ContextProvider'

const LineChart = () => {
    const { currentMode } = useStateContext()
    return (
        <ChartComponent
            id='line-chart'
            height='420px'
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject services={[LineSeries, Legend, DateTime, Tooltip]} />
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) => (
                    <SeriesDirective key={index} {...item} />
                ))}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default LineChart