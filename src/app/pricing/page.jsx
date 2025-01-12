export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Basic sound creation",
        "5 projects",
        "Standard quality export",
        "Community support",
      ],
    },
    {
      name: "Pro",
      price: "$19/month",
      features: [
        "Advanced sound creation",
        "Unlimited projects",
        "High quality export",
        "Priority support",
        "Custom sound library",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "All Pro features",
        "Dedicated support",
        "Custom integration",
        "Team collaboration",
        "API access",
      ],
    },
  ];

  return (
    <div className="pt-[120px] px-5 lg:px-10 max-w-[1440px] mx-auto min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-3xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full mt-8 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
