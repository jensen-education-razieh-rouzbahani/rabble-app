import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const CheckoutsBarChart = ({ checkoutsData }) => {
  return <Bar data={checkoutsData} />;
};

export default CheckoutsBarChart;
