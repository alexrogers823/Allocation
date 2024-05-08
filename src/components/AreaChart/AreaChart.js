import { AreaPlot, ChartContainer, ChartsLegend, ChartsReferenceLine, ChartsTooltip, ChartsXAxis, ChartsYAxis } from '@mui/x-charts';
import { LineHighlightPlot, lineElementClasses } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { formatNumber } from '../../utils';

const valueFormatter = value => formatNumber(value, "currency")

const AreaChart = props => {
  return (
    <ChartContainer
      width={props.width}
      height={props.height}
      series={[{ data: props.data.map(instance => instance.balance), label: props.title || 'Balance', type: 'line', area: true, showMark: false, color: props.color, valueFormatter }]}
      xAxis={[{ scaleType: 'point', data: props.data.map(instance => instance.date) }]}
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
      {props.goalline?.display && <ChartsReferenceLine y={props.goalline.goal} label="Goal" lineStyle={{ stroke: 'red' }} />}
    </ChartContainer>
  );
}

export default AreaChart