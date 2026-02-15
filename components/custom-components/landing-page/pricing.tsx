import { Check, X } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full py-10">
      <div className="text-center mb-12">
        <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wider">
          PRICING
        </span>
        <h2 className="text-5xl font-bold mt-2 mb-6">Choose Your Plan</h2>

        <div className="flex items-center justify-center gap-4">
          <span className="text-gray-700 font-medium">Monthly</span>
          <button className="relative w-14 h-7 bg-emerald-500 rounded-full">
            <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full"></div>
          </button>
          <span className="text-gray-700 font-medium">Yearly</span>
          <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
            Save 20%
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Basic</h3>
          <p className="text-gray-600 text-sm mb-6">
            Perfect for getting started
          </p>
          <div className="mb-8">
            <span className="text-5xl font-bold">$0</span>
            <span className="text-gray-500">/month</span>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                Track up to 50 transactions/month
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                Basic expense categorization
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">2 financial goals</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Mobile app access</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Email support</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Advanced analytics</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Multi-account sync</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
              <span className="text-gray-400">Priority support</span>
            </li>
          </ul>

          <button className="w-full py-3.5 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors">
            Get Started
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl border-4 border-emerald-500 relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
            Most Popular
          </div>

          <h3 className="text-2xl font-bold mb-2">Pro</h3>
          <p className="text-gray-600 text-sm mb-6">
            Most popular for individuals
          </p>
          <div className="mb-8">
            <span className="text-5xl font-bold">$12</span>
            <span className="text-gray-500">/month</span>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Unlimited transactions</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Smart AI categorization</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Unlimited financial goals</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Mobile app access</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Priority email support</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">
                Advanced analytics & reports
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Multi-account sync</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Export data to CSV</span>
            </li>
          </ul>

          <button className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform">
            Start Free Trial
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
          <p className="text-gray-600 text-sm mb-6">For families and teams</p>
          <div className="mb-8">
            <span className="text-5xl font-bold">$29</span>
            <span className="text-gray-500">/month</span>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Everything in Pro</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Up to 5 user accounts</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Shared financial goals</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Custom categories</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">24/7 priority support</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Dedicated account manager</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">API access</span>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Custom integrations</span>
            </li>
          </ul>

          <button className="w-full py-3.5 border-2 border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
