import { Search, Download, Filter } from "lucide-react";

export default function AdminAuditLogsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Audit Logs</h1>
          <p className="text-slate-500">Security events, access logs, and system changes.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 border border-slate-300 rounded-full text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex-1 min-w-64 relative">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by admin, IP, or action..."
            className="w-full pl-9 pr-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
          />
        </div>
        <select className="px-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all">
          <option>All Events</option>
          <option>Admin Login</option>
          <option>Data Access</option>
          <option>Configuration Changes</option>
          <option>Payment Action</option>
          <option>Security Event</option>
        </select>
        <select className="px-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all">
          <option>Last 24 hours</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>

      {/* Audit Logs Table */}
      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#F9F9F8] border-b border-slate-200/60">
              <th className="p-4 font-semibold text-slate-600">Timestamp</th>
              <th className="p-4 font-semibold text-slate-600">Admin</th>
              <th className="p-4 font-semibold text-slate-600">Event Type</th>
              <th className="p-4 font-semibold text-slate-600">Action</th>
              <th className="p-4 font-semibold text-slate-600">Status</th>
              <th className="p-4 font-semibold text-slate-600">IP Address</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Row 1 - Login */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 text-xs text-slate-600">Oct 24, 14:45:12 UTC</td>
              <td className="p-4 font-medium text-slate-900 text-sm">Sarah Chen</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Admin Login
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Authenticated successfully</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Success
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">198.51.100.42</td>
            </tr>

            {/* Row 2 - Data Access */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 text-xs text-slate-600">Oct 24, 14:32:08 UTC</td>
              <td className="p-4 font-medium text-slate-900 text-sm">Marcus Rodriguez</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Data Access
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Viewed rental records (batch export)</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Success
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">203.0.113.87</td>
            </tr>

            {/* Row 3 - Configuration Change */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 text-xs text-slate-600">Oct 24, 13:15:41 UTC</td>
              <td className="p-4 font-medium text-slate-900 text-sm">Alex Thompson</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  Config Change
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Updated Twilio rate limits</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Success
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">192.0.2.33</td>
            </tr>

            {/* Row 4 - Break-Glass Access */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 text-xs text-slate-600">Oct 24, 11:22:19 UTC</td>
              <td className="p-4 font-medium text-slate-900 text-sm">Jessica Park</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Break-Glass Access
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Accessed message content (msg_1a2b3c) - support escalation</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Success
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">198.51.100.91</td>
            </tr>

            {/* Row 5 - Payment Action */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 text-xs text-slate-600">Oct 24, 10:08:35 UTC</td>
              <td className="p-4 font-medium text-slate-900 text-sm">David Liu</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Payment Action
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Refunded charge (ch_7x8y9z0) - $9.99</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Success
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">203.0.113.44</td>
            </tr>

            {/* Row 6 - Failed Login Attempt */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 text-xs text-slate-600">Oct 24, 09:45:22 UTC</td>
              <td className="p-4 font-medium text-slate-900 text-sm">Unknown User</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Admin Login
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Failed authentication attempt</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Failed
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">192.0.2.188</td>
            </tr>

            {/* Row 7 - Configuration Change */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 text-xs text-slate-600">Oct 24, 08:30:14 UTC</td>
              <td className="p-4 font-medium text-slate-900 text-sm">Sarah Chen</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                  Config Change
                </span>
              </td>
              <td className="p-4 text-slate-600 text-xs">Updated webhook signing secret for Twilio</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Success
                </span>
              </td>
              <td className="p-4 font-mono text-xs text-slate-500">198.51.100.42</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-slate-600">
        <span>Showing 7 of 3,842 audit events</span>
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

      {/* Audit Policy Notice */}
      <div className="bg-slate-900 rounded-3xl p-6 text-white">
        <h3 className="font-semibold mb-2">Audit Log Retention Policy</h3>
        <p className="text-sm text-slate-300 mb-4">
          Audit logs are retained for 90 days. Events related to payment actions, security incidents, and break-glass access are retained for 2 years. Logs are immutable and cannot be deleted by admins.
        </p>
        <button className="text-sm font-medium text-lime-400 hover:text-lime-300 transition-colors">
          View Compliance Documentation →
        </button>
      </div>
    </div>
  );
}
