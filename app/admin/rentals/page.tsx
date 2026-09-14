import { MoreVertical, Search, Calendar } from "lucide-react";

export default function AdminRentalsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Rental Lifecycle</h1>
          <p className="text-slate-500">Track active rentals, expirations, and user activity.</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl p-6 border border-slate-200/60">
          <span className="text-slate-500 font-medium text-sm">Total Active</span>
          <div className="mt-3 text-3xl font-semibold text-slate-900">1,248</div>
          <span className="text-xs text-slate-500 mt-2 block">+4 this hour</span>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-200/60">
          <span className="text-slate-500 font-medium text-sm">Expiring Today</span>
          <div className="mt-3 text-3xl font-semibold text-slate-900">23</div>
          <span className="text-xs text-amber-600 mt-2 block">Requires attention</span>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-200/60">
          <span className="text-slate-500 font-medium text-sm">Avg. Duration</span>
          <div className="mt-3 text-3xl font-semibold text-slate-900">4.2d</div>
          <span className="text-xs text-slate-500 mt-2 block">↑ 0.3d vs. last week</span>
        </div>
        <div className="bg-white rounded-3xl p-6 border border-slate-200/60">
          <span className="text-slate-500 font-medium text-sm">Revenue (7d)</span>
          <div className="mt-3 text-3xl font-semibold text-slate-900">$2,145</div>
          <span className="text-xs text-lime-600 mt-2 block">↑ 12% vs. last week</span>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex-1 min-w-64 relative">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by user ID, number, or rental..."
            className="w-full pl-9 pr-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
          />
        </div>
        <select className="px-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all">
          <option>All Statuses</option>
          <option>Active</option>
          <option>Expiring Soon</option>
          <option>Expired</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Rentals Table */}
      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#F9F9F8] border-b border-slate-200/60">
              <th className="p-4 font-semibold text-slate-600">Rental ID</th>
              <th className="p-4 font-semibold text-slate-600">User</th>
              <th className="p-4 font-semibold text-slate-600">Phone Number</th>
              <th className="p-4 font-semibold text-slate-600">Status</th>
              <th className="p-4 font-semibold text-slate-600">Start Date</th>
              <th className="p-4 font-semibold text-slate-600">Expires In</th>
              <th className="p-4 font-semibold text-slate-600">Duration</th>
              <th className="p-4 font-semibold text-slate-600"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Row 1 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs font-medium text-slate-900">rnt_2k3l4m5</td>
              <td className="p-4 font-mono text-xs text-slate-500">usr_9a8b7c6d</td>
              <td className="p-4 font-mono text-sm font-medium">+1 (555) 019-8472</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Active
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Oct 24, 14:32</td>
              <td className="p-4 text-slate-900 font-medium text-xs">4 days 2h</td>
              <td className="p-4 text-slate-600 text-xs">7 days</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs font-medium text-slate-900">rnt_8x7y6z9</td>
              <td className="p-4 font-mono text-xs text-slate-500">usr_1f2e3d4c</td>
              <td className="p-4 font-mono text-sm font-medium">+1 (650) 253-0000</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Active
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Oct 21, 09:15</td>
              <td className="p-4 text-amber-600 font-medium text-xs">7 hours</td>
              <td className="p-4 text-slate-600 text-xs">14 days</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs font-medium text-slate-900">rnt_4a5b6c7</td>
              <td className="p-4 font-mono text-xs text-slate-500">usr_5q6r7s8t</td>
              <td className="p-4 font-mono text-sm font-medium">+61 2 1234 5678</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Active
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Oct 23, 16:45</td>
              <td className="p-4 text-slate-900 font-medium text-xs">2 days 11h</td>
              <td className="p-4 text-slate-600 text-xs">5 days</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>

            {/* Row 4 - Expired */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs font-medium text-slate-900">rnt_3c4d5e6</td>
              <td className="p-4 font-mono text-xs text-slate-500">usr_9k9l8m7</td>
              <td className="p-4 font-mono text-sm font-medium">+44 7700 900111</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                  Expired
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Oct 17, 11:22</td>
              <td className="p-4 text-red-600 font-medium text-xs">7 days ago</td>
              <td className="p-4 text-slate-600 text-xs">7 days</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>

            {/* Row 5 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs font-medium text-slate-900">rnt_7f8g9h0</td>
              <td className="p-4 font-mono text-xs text-slate-500">usr_3a4b5c6</td>
              <td className="p-4 font-mono text-sm font-medium">+33 7 12 34 56 78</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Active
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Oct 22, 13:08</td>
              <td className="p-4 text-slate-900 font-medium text-xs">3 days 8h</td>
              <td className="p-4 text-slate-600 text-xs">7 days</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-slate-600">
        <span>Showing 5 of 1,248 rentals</span>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-slate-200/60 rounded-full hover:bg-slate-100 transition-colors">
            Previous
          </button>
          <button className="px-3 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors">
            1
          </button>
          <button className="px-3 py-2 border border-slate-200/60 rounded-full hover:bg-slate-100 transition-colors">
            2
          </button>
          <button className="px-3 py-2 border border-slate-200/60 rounded-full hover:bg-slate-100 transition-colors">
            3
          </button>
          <button className="px-3 py-2 border border-slate-200/60 rounded-full hover:bg-slate-100 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
