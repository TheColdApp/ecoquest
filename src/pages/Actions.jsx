const actions = [
  "Use a reusable water bottle instead of disposable plastic bottles.",
  "Switch to LED light bulbs to save energy.",
  "Use public transportation, bike, or walk when possible.",
  "Compost your food scraps to reduce landfill waste.",
  "Plant native trees and flowers to support local wildlife.",
  "Reduce meat consumption to lower your carbon footprint.",
  "Avoid single-use plastics like straws and bags.",
  "Support environmental organizations and policies.",
  "Turn off electronics when not in use.",
  "Collect rainwater for gardening.",
]

export default function Actions() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-green-700">🌱 Eco Actions You Can Take</h2>
      <ul className="list-disc list-inside space-y-3 text-lg">
        {actions.map((action, i) => (
          <li key={i}>{action}</li>
        ))}
      </ul>
    </div>
  )
}
