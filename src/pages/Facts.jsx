import { Link } from 'react-router-dom'

const facts = [
  "Rainforests produce 20% of the world's oxygen.",
  "Recycling one aluminum can saves enough energy to run a TV for 3 hours.",
  "Plastic takes over 400 years to degrade.",
  "Composting reduces landfill waste and enriches soil.",
  "The Amazon rainforest is home to about 10% of known species on Earth.",
  "Coral reefs support about 25% of all marine life.",
  "Around 1 million species are at risk of extinction due to human activity.",
  "Deforestation contributes about 10-15% of global greenhouse gas emissions.",
  "Approximately 8 million tons of plastic enter the oceans every year.",
  "Solar energy usage is growing rapidly worldwide, doubling every 2 years.",
]

export default function Facts() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-green-700">🌿 Fun Ecology Facts</h2>
      <ul className="list-disc list-inside space-y-3 text-lg">
        {facts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link to="/more-facts" className="text-green-800 font-semibold underline hover:text-green-900">See More Facts →</Link>
      </div>
    </div>
  )
}
