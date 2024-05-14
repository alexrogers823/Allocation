import { AreaPlot, ChartContainer, ChartsLegend, ChartsReferenceLine, ChartsTooltip, ChartsXAxis, ChartsYAxis } from '@mui/x-charts';
import { LineHighlightPlot, lineElementClasses } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { formatNumber } from '../../utils';

const valueFormatter = value => formatNumber(value, "currency")

const AreaChart = props => {
  const balances = props.data.map(instance => instance.balance)

  return (
    <ChartContainer
      width={props.width}
      height={props.height}
      series={[{ data: balances, label: props.title || 'Balance', type: 'line', area: true, showMark: false, color: props.color, valueFormatter }]}
      xAxis={[{ scaleType: 'point', data: props.data.map(instance => instance.date) }]}
      yAxis={[{ max: props.goal && props.goal > Math.max(...balances) ? props.goal : null }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    >
      <AreaPlot />
      <LineHighlightPlot />
      <ChartsTooltip />
      <ChartsXAxis />
      <ChartsYAxis />
      <ChartsLegend />
      {props.goal && <ChartsReferenceLine y={props.goal} label={`Goal: ${formatNumber(props.goal, "currency")}`} lineStyle={{ stroke: 'red' }} />}
    </ChartContainer>
  )
}

export default AreaChart