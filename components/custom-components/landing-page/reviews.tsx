import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section className="w-full px-40 py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          Trusted by <span className="text-emerald-500">Thousands of Users</span>
        </h2>
        <p className="text-gray-600 text-lg">
          See what our customers have to say about their experience with our platform
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Review 1 */}
        <div className="bg-gray-100 rounded-2xl p-8">
          <div className="flex gap-1 mb-6">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            "Before using this platform, I was manually tracking everything. Now it's all automated - clear reports, stock control, everything just works perfectly."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
              RS
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Rina Susanti</h4>
              <p className="text-gray-500 text-sm">Store Owner • Jakarta</p>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="bg-gray-100 rounded-2xl p-8">
          <div className="flex gap-1 mb-6">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            "Service is much faster because orders go straight to the kitchen. Customers are happier and our order volume increased by 30%."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
              BH
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Budi Hartono</h4>
              <p className="text-gray-500 text-sm">Restaurant Owner • Surabaya</p>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="bg-gray-100 rounded-2xl p-8">
          <div className="flex gap-1 mb-6">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            "The interface is very user-friendly. Easy to learn for new employees. Sales reports are comprehensive and make product analysis simple."
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
              DL
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Dewi Lestari</h4>
              <p className="text-gray-500 text-sm">Cafe Manager • Bandung</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}