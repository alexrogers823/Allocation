import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { formatNumber } from '../../utils';

const valueFormatter = value => formatNumber(value, "currency")

const AreaChart = props => {
  return (
    <LineChart
      width={props.width}
      height={props.height}
      series={[{ data: props.data.map(instance => instance.balance), label: props.title || 'Balance', area: true, showMark: false, color: props.color, valueFormatter }]}
      xAxis={[{ scaleType: 'point', data: props.data.map(instance => instance.date) }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    />
  );
}

export default AreaChart