'use client';

import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => <div className="h-[500px] flex items-center justify-center">Loading chart...</div>
});

export default function Charts({ type, data, height }) {
  return (
    <div id="chart">
      <ReactApexChart
        options={data.options}
        series={data.series}
        type={type}
        height={height}
      />
    </div>
  );
}