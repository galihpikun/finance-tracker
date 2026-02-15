export default function FinancialCard() {
  return (
    <div className="w-full max-w-md bg-black/20 rounded-3xl p-6 shadow-2xl">
      <div className="grid grid-cols-2 gap-4 mb-6">

        <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-5">
          <p className="text-emerald-950 text-xs font-medium mb-1">Total Balance</p>
          <h2 className="text-white text-3xl font-bold mb-1">$24,580</h2>
          <p className="text-emerald-950 text-xs flex items-center">
            <span className="mr-1">↗</span>
            +12.5%
          </p>
        </div>


        <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl p-5">
          <p className="text-emerald-950 text-xs font-medium mb-1">This Month</p>
          <h2 className="text-white text-3xl font-bold mb-1">$3,240</h2>
          <p className="text-emerald-950 text-xs">Saved</p>
        </div>
      </div>


      <div className="bg-slate-50 rounded-2xl p-5">
        <h3 className="text-slate-800 text-sm font-semibold mb-4">Recent Activity</h3>
        
        <div className="space-y-4">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-slate-700 text-sm font-medium">Grocery Shopping</span>
            </div>
            <span className="text-red-500 text-sm font-semibold">-$156.50</span>
          </div>


          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-slate-700 text-sm font-medium">Salary Deposit</span>
            </div>
            <span className="text-emerald-500 text-sm font-semibold">+$5,000</span>
          </div>


          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <span className="text-slate-700 text-sm font-medium">Restaurant</span>
            </div>
            <span className="text-red-500 text-sm font-semibold">-$76.25</span>
          </div>
        </div>
      </div>
    </div>
  );
}