import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';
import * as React from 'react';
import { amexBlueData, amexGoldData, capitalOneData, discoverData, getDataColor, wellsFargoData } from '../../data';
import { formatNumber } from '../../utils';

const valueFormatter = value => formatNumber(value, "currency")

const LineChart = props => {
  return (
    <MuiLineChart
      width={1300}
      height={300}
      series={[
        { data: capitalOneData.map(v => v.balance), label: 'Capital One', color: getDataColor("capitalOne"), valueFormatter },
        { data: amexGoldData.map(v => v.balance), label: 'Amex Gold', color: getDataColor("amexGold"), valueFormatter },
        { data: amexBlueData.map(v => v.balance), label: 'Amex Blue', color: getDataColor("amexBlue"), valueFormatter },
        { data: discoverData.map(v => v.balance), label: 'Discover', color: getDataColor("discover"), valueFormatter },
        { data: wellsFargoData.map(v => v.balance), label: 'Wells Fargo', color: getDataColor("wellsFargo"), valueFormatter }
      ]}
      xAxis={[{ scaleType: 'point', data: capitalOneData.map(v => v.date) }]}
      slotProps={{
        legend: {
          direction: 'column',
          position: { vertical: 'middle', horizontal: 'right' },
          itemMarkWidth: 15,
          itemMarkHeight: 2,
          markGap: 7,
          itemGap: 10
        }
      }}
    />
  );
}

export default LineChart