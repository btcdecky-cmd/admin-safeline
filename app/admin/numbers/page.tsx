import { MoreVertical, Plus, Search } from "lucide-react";

export default function AdminNumbersPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Number Inventory</h1>
          <p className="text-slate-500">Manage active phone numbers and allocation.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 font-medium text-sm transition-colors">
          <Plus size={16} />
          Add Number
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex-1 min-w-64 relative">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by number, country, or rental..."
            className="w-full pl-9 pr-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
          />
        </div>
        <select className="px-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all">
          <option>All Countries</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>
        <select className="px-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all">
          <option>All Statuses</option>
          <option>Active</option>
          <option>Rented</option>
          <option>Idle</option>
          <option>Maintenance</option>
        </select>
      </div>

      {/* Numbers Table */}
      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#F9F9F8] border-b border-slate-200/60">
              <th className="p-4 font-semibold text-slate-600">Phone Number</th>
              <th className="p-4 font-semibold text-slate-600">Country</th>
              <th className="p-4 font-semibold text-slate-600">Status</th>
              <th className="p-4 font-semibold text-slate-600">Current Rental</th>
              <th className="p-4 font-semibold text-slate-600">Provider</th>
              <th className="p-4 font-semibold text-slate-600">Expires</th>
              <th className="p-4 font-semibold text-slate-600"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Row 1 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-sm font-medium text-slate-900">+1 (555) 019-8472</td>
              <td className="p-4 text-slate-600">United States</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Active
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">rnt_2k3l4m5</td>
              <td className="p-4 text-sm text-slate-600">Twilio</td>
              <td className="p-4 text-sm text-slate-600">Oct 28, 2024</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-sm font-medium text-slate-900">+44 7700 900111</td>
              <td className="p-4 text-slate-600">United Kingdom</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                  Idle
                </span>
              </td>
              <td className="p-4 text-slate-400 text-xs">—</td>
              <td className="p-4 text-sm text-slate-600">Telnyx</td>
              <td className="p-4 text-sm text-slate-600">Nov 15, 2024</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-sm font-medium text-slate-900">+1 (650) 253-0000</td>
              <td className="p-4 text-slate-600">United States</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Active
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">rnt_8x7y6z9</td>
              <td className="p-4 text-sm text-slate-600">Twilio</td>
              <td className="p-4 text-sm text-slate-600">Oct 31, 2024</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-sm font-medium text-slate-900">+33 7 12 34 56 78</td>
              <td className="p-4 text-slate-600">France</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Maintenance
                </span>
              </td>
              <td className="p-4 text-slate-400 text-xs">—</td>
              <td className="p-4 text-sm text-slate-600">Telnyx</td>
              <td className="p-4 text-sm text-slate-600">Dec 10, 2024</td>
              <td className="p-4 text-right">
                <button className="text-slate-400 hover:text-slate-900 transition-colors">
                  <MoreVertical size={16} />
                </button>
              </td>
            </tr>

            {/* Row 5 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-sm font-medium text-slate-900">+61 2 1234 5678</td>
              <td className="p-4 text-slate-600">Australia</td>
              <td className="p-4">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Active
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">rnt_4a5b6c7</td>
              <td className="p-4 text-sm text-slate-600">Twilio</td>
              <td className="p-4 text-sm text-slate-600">Nov 22, 2024</td>
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
        <span>Showing 5 of 48 numbers</span>
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
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
