import Features from "@/components/custom-components/landing-page/features";
import Footer from "@/components/custom-components/landing-page/footers";
import FinancialCard from "@/components/custom-components/landing-page/hero-card";
import Pricing from "@/components/custom-components/landing-page/pricing";
import Reviews from "@/components/custom-components/landing-page/reviews";
import HowItWorks from "@/components/custom-components/landing-page/timeline";
import Link from "next/link";


export default function LandingPage() {
  return (
    <div className="w-full flex flex-col items-center gap-25" suppressHydrationWarning>
      <nav className="fixed w-full h-20 bg-white/40 backdrop-blur-md z-10 backdrop-saturate-150 flex justify-around items-center text-hover">
      <a href="/" className="flex flex-row gap-2 items-center text-2xl font-medium"><img src="./icon.png" alt="icon.png" className="w-8 h-8" />Finance Tracker</a>
      <div className="flex flex-row gap-8 items-center">
        <a href="" className="font-medium hover:text-emerald-600 hover:text-lg duration-300 transition-all">Features</a>
        <a href="" className="font-medium hover:text-emerald-600 hover:text-lg duration-300 transition-all">How it Works</a>
        <a href="" className="font-medium hover:text-emerald-600 hover:text-lg duration-300 transition-all">Pricing</a>
        <a href="" className="font-medium hover:text-emerald-600 hover:text-lg duration-300 transition-all">Reviews</a>
      </div>
      <div className="gap-4 flex flex-row items-center">
        <Link href="/login" className="font-medium hover:text-emerald-600 transition-colors duration-100">Login</Link>
        <Link href="/signup" className="bg-linear-to-r from-emerald-500 to-emerald-600 px-4 py-2 rounded-md text-white font-medium hover:bg-emerald-700 hover:scale-105 transition-all duration-300">Register</Link>
      </div>
      </nav>

      <section className="w-full bg-linear-to-r from-emerald-400 to-emerald-700 mt-20 flex justify-around items-center px-20 py-20 text-white">
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-bold mt-20">Track Your Finances with <br /><span className="italic">Ease Everywhere</span></h1>
          <p className="text-xl">Track every dollar, achieve every goal, and build the financial <br />freedom you deserve with our comprehensive money <br />management platform</p>
          <div className="mt-1 flex gap-5">
            <Link href="/login" className="px-8 py-3.5 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 shadow-lg hover:scale-105 transition-all duration-300">Start A Free Trial</Link>
            <Link href="/signup" className="px-8 py-3.5 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 border-white">Watch Demo</Link>
          </div>
        </div>
        <div>
          <FinancialCard></FinancialCard>
        </div>
      </section>

      <section className="w-full py-10">
        <h1 className="text-5xl font-bold text-center">Everything You Need to <br /><span className="text-emerald-700">Master Your Mani</span></h1>
        <p className="text-center mt-4 text-lg">Our platform provides all the tools and insights you need to take control of your financial future.</p>
        <Features></Features>
      </section>

      <section>
        <HowItWorks></HowItWorks>
      </section>

      <section className="bg-linear-to-r from-emerald-400 to-emerald-700 w-full py-25 flex flex-col items-center gap-3 text-white">
        <h1 className="text-5xl font-bold">Ready to Transform Your Financial Life?</h1>
        <p className="text-xl">Join Join thousands of users who have taken control of their money</p>
        <a href="" className="bg-white px-6 py-4 text-emerald-500 font-semibold rounded-full text-xl">Start Your 30 Day Free Trial</a>
        <p>No credit card required • Cancel anytime • Full access to all features</p>
      </section>

      <section className="bg-linear-to-br from-emerald-50 to-teal-50 w-full">
        <Pricing></Pricing>
      </section>

      <section>
        <Reviews></Reviews>
      </section>

      <Footer></Footer>

    </div>
  );
}
