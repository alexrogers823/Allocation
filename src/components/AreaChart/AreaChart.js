import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import * as React from 'react';

const AreaChart = props => {
  return (
    <LineChart
      width={500}
      height={300}
      series={[{ data: props.data.map(instance => instance.balance), label: props.title || 'Balance', area: true, showMark: false }]}
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