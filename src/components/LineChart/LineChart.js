import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { amexBlueData, amexGoldData, capitalOneData, discoverData, wellsFargoData } from '../../data';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function LineChart() {
  return (
    <MuiLineChart
      width={500}
      height={300}
      series={[
        { data: capitalOneData.map(v => v.balance), label: 'Capital One' },
        { data: amexGoldData.map(v => v.balance), label: 'Amex Gold' },
        { data: amexBlueData.map(v => v.balance), label: 'Amex Blue' },
        { data: discoverData.map(v => v.balance), label: 'Discover' },
        { data: wellsFargoData.map(v => v.balance), label: 'Wells Fargo' }
      ]}
      xAxis={[{ scaleType: 'point', data: capitalOneData.map(v => v.date) }]}
    />
  );
}