import { Clock } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="w-full px-40 py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">
        How It Works
      </h2>

      <div className="relative flex justify-between items-start gap-8">
        {/* Horizontal Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-emerald-500 -z-10"></div>

        {/* Step 1 */}
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
            1
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-lg font-bold mb-2">Create Your Account</h3>
            <p className="text-gray-600 text-sm mb-3">Sign up in seconds with your email and set up your secure profile</p>
            <div className="flex items-center justify-center gap-1 text-emerald-600 text-xs font-semibold">
              <Clock className="w-3 h-3" />
              <span>2 mins</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
            2
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-lg font-bold mb-2">Connect Your Accounts</h3>
            <p className="text-gray-600 text-sm mb-3">Link your bank accounts and credit cards for automatic syncing</p>
            <div className="flex items-center justify-center gap-1 text-emerald-600 text-xs font-semibold">
              <Clock className="w-3 h-3" />
              <span>5 mins</span>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
            3
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-lg font-bold mb-2">Set Your Goals</h3>
            <p className="text-gray-600 text-sm mb-3">Define your financial objectives and get personalized plans</p>
            <div className="flex items-center justify-center gap-1 text-emerald-600 text-xs font-semibold">
              <Clock className="w-3 h-3" />
              <span>3 mins</span>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center flex-1">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
            4
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-lg font-bold mb-2">Track and Achieve</h3>
            <p className="text-gray-600 text-sm mb-3">Monitor your progress with real-time insights and achieve your goals</p>
            <div className="flex items-center justify-center gap-1 text-emerald-600 text-xs font-semibold">
              <Clock className="w-3 h-3" />
              <span>Ongoing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}