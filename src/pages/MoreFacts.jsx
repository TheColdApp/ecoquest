const moreFacts = [
  "Paper can be recycled up to 7 times.",
  "LED bulbs use 90% less energy than incandescent ones.",
  "Bamboo is one of the fastest-growing plants on Earth, growing up to 3 feet a day.",
  "Oceans absorb about 30% of the carbon dioxide produced by humans.",
  "Over 70% of freshwater is used for agriculture.",
  "Wind power is the fastest growing source of electricity in the world.",
  "Eating less meat can significantly reduce your carbon footprint.",
  "Urban trees can reduce temperatures by up to 7°F, combating heat islands.",
  "Earth's atmosphere contains roughly 78% nitrogen and 21% oxygen.",
  "Bees pollinate about 80% of flowering plants, vital for food production.",
]

export default function MoreFacts() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-green-700">🌎 More Ecology Facts</h2>
      <ul className="list-disc list-inside space-y-3 text-lg">
        {moreFacts.map((fact, i) => (
          <li key={i}>{fact}</li>
        ))}
      </ul>
    </div>
  )
}
