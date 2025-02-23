import { useState } from 'react';
import ReactApexChart, { Props as ApexChartProps } from 'react-apexcharts';

export const LineChart = () => {
  const [state, setState] = useState<ApexChartProps>({
    series: [
      {
        name: 'series1',
        data: Array(48)
          .fill(0)
          .map((_, i) => Math.floor(Math.random() * 100)),
      },
      {
        name: 'series2',
        data: Array(48)
          .fill(0)
          .map((_, i) => Math.floor(Math.random() * 100)),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'datetime',
        categories: Array.from({ length: 48 }, (_, i) =>
          new Date(2023, 0, 1, 0, i * 30).toISOString()
        ),
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    },
  });

  return (
    <div>
      <div id='chart'>
        <ReactApexChart
          type='area'
          height={350}
          series={state.series}
          options={state.options}
        />
      </div>

      <div id='html-dist'></div>
    </div>
  );
};
