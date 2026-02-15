import { TrendingUp, BarChart3, Trophy, PieChart, Building2, Shield } from "lucide-react";

export default function Features() {
    return(
        <div className="grid grid-cols-3 gap-6 mt-12 px-45">
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
      <TrendingUp className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
    <p className="text-gray-600 mb-6">Monitor your income and expenses in real-time with instant updates and notifications for every transaction across all your accounts</p>
    <a href="" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
      Learn More 
      <span>→</span>
    </a>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 bg-cyan-500 rounded-xl flex items-center justify-center mb-6">
      <BarChart3 className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">Smart Categorization</h3>
    <p className="text-gray-600 mb-6">Automatically categorize your transactions with intelligent AI-powered sorting that learns from your spending patterns</p>
    <a href="" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
      Learn More 
      <span>→</span>
    </a>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
      <Trophy className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">Goal Setting</h3>
    <p className="text-gray-600 mb-6">Set and track financial goals with visual progress indicators and automated savings recommendations to reach your targets faster</p>
    <a href="" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
      Learn More 
      <span>→</span>
    </a>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mb-6">
      <PieChart className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">Expense Analytics</h3>
    <p className="text-gray-600 mb-6">Get detailed insights into your spending habits with interactive charts, graphs, and comprehensive monthly reports</p>
    <a href="" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
      Learn More 
      <span>→</span>
    </a>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
      <Building2 className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">Multi-Account Support</h3>
    <p className="text-gray-600 mb-6">Manage multiple bank accounts, credit cards, and investment portfolios in one unified dashboard with seamless synchronization</p>
    <a href="" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
      Learn More 
      <span>→</span>
    </a>
  </div>

  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
      <Shield className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">Secure Banking</h3>
    <p className="text-gray-600 mb-6">Bank-level encryption and security protocols protect your financial data with multi-factor authentication and secure data storage</p>
    <a href="" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
      Learn More 
      <span>→</span>
    </a>
  </div>
</div>
    )
}