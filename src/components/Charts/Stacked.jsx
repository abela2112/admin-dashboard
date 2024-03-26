import React from 'react'
import { Category, ChartComponent, Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries } from '@syncfusion/ej2-react-charts'
import { Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedChartData, stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
const Stacked = ({ width, height }) => {
    return (
        <ChartComponent
            height={height}
            width={width}
            id='charts'
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            tooltip={{ enable: true }}
            chartArea={{ border: { width: 0 } }}
            legendSettings={{ background: 'white' }}
        >
            <Inject services={[Tooltip, Legend, StackingColumnSeries, Category]} />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((data, index) => (
                    <SeriesDirective key={index} {...data} />
                ))}
            </SeriesCollectionDirective>
        </ChartComponent>
    )
}

export default Stacked