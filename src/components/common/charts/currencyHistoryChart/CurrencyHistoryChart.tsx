import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ICurrencyHistory } from '../../../../@types/common';
import { currencyPriceHistoryChartLabels } from '../../../../utils/currencyPriceHistoryChartLabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 2,
};

interface ICurrencyHistoryChartProps {
  priceHistory: ICurrencyHistory[];
}

function CurrencyHistoryChart({ priceHistory }: ICurrencyHistoryChartProps) {
  const labels = currencyPriceHistoryChartLabels(priceHistory);
  const prices = priceHistory.map((price) => price.priceUsd);
  const data = {
    labels,
    datasets: [
      {
        label: 'Currency price history',
        data: prices,
        borderColor: 'rgb(25, 118, 210)',
        backgroundColor: '#e6e6e6',
      },
    ],
  };
  return <Line options={options} data={data} />;
}

export default CurrencyHistoryChart;
