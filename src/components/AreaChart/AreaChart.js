import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { emergencyFundData } from '../../data';

export default function AreaChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[{ data: emergencyFundData.map(instance => instance.balance), label: 'Balance', area: true, showMark: false }]}
      xAxis={[{ scaleType: 'point', data: emergencyFundData.map(instance => instance.date) }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    />
  );
}