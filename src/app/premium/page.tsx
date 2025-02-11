import Navbar from "@/components/navbar"

export default function PremiumPage() {
  const plans = [
    {
      name: "Basic",
      price: "$9.99/month",
      features: ["Access to all courses", "Practice problems", "Community support"],
    },
    {
      name: "Pro",
      price: "$19.99/month",
      features: ["Everything in Basic", "Live webinars", "1-on-1 mentoring sessions", "Career guidance"],
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      features: ["Everything in Pro", "Custom course creation", "Team management", "Dedicated support"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Premium Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
                <p className="text-3xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-[#34c759]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="w-full bg-[#34c759] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

