import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { amexBlueData, amexGoldData, capitalOneData, discoverData, wellsFargoData } from '../../data';

const LineChart = props => {
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

export default LineChart