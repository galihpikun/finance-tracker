import { Twitter, Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white px-40 py-16">
      <div className="grid grid-cols-4 gap-12 mb-12">
        {/* Brand Column */}
        <div>
          <h3 className="text-2xl font-bold mb-4">FinanceTracker</h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Take control of your financial future with smart tracking and goal management
          </p>
          <div className="flex gap-3">
            <a href="" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Product Column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Product</h4>
          <ul className="space-y-3">
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Features</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Pricing</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Security</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Integrations</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Mobile App</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">API</a></li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-3">
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">About</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Blog</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Careers</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Press</a></li>
            <li><a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Partners</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-4">Get the latest tips and updates delivered to your inbox</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-500 focus:outline-none focus:border-emerald-500"
            />
            <button className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors shrink-0">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-3">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 pt-8 flex justify-between items-center">
        <p className="text-gray-400 text-sm">© 2024 FinanceTracker. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Privacy Policy</a>
          <a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Terms of Service</a>
          <a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Cookies</a>
          <a href="" className="text-gray-400 hover:text-emerald-500 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}