import { LineChart, lineElementClasses } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { capitalOneData } from '../../data';

const uData = [4000, 3500, 3000, 2500, 2000, 1500, 1000];
const xLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
];

export default function AreaChart() {
  return (
    <LineChart
      width={500}
      height={300}
      series={[{ data: capitalOneData.map(instance => instance.balance), label: 'Balance', area: true, showMark: false }]}
      xAxis={[{ scaleType: 'point', data: capitalOneData.map(instance => instance.date) }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          display: 'none',
        },
      }}
    />
  );
}