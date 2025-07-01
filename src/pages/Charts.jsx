import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const data = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [
    {
      label: 'Global CO2 Emissions (billion tons)',
      data: [36.1, 36.2, 36.5, 36.7, 34.1, 35.5, 36.8],
      backgroundColor: 'rgba(34, 197, 94, 0.7)',
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: {
      display: true,
      text: 'Global CO2 Emissions Over Years',
      font: { size: 18 },
    },
  },
}

export default function Charts() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">📊 Environmental Data</h2>
      <Bar options={options} data={data} />
      <p className="mt-6 text-center text-gray-700 italic">
        Data source: Global Carbon Project
      </p>
    </div>
  )
}
