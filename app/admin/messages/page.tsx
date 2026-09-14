import { ShieldAlert, Search } from "lucide-react";

export default function AdminMessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Message Auditing</h1>
          <p className="text-slate-500">View message metadata and delivery statuses.</p>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-6 flex gap-4 text-yellow-900 text-sm">
        <ShieldAlert size={24} className="shrink-0 text-yellow-600" />
        <div>
          <p className="font-semibold mb-1">Privacy Enforced</p>
          <p>
            By default, administrators cannot view the body of SMS messages. Only metadata (sender, recipient, timestamps, and provider status) is exposed to comply with privacy policies. Accessing message content requires emergency break-glass procedures and logs an immutable audit event.
          </p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex gap-4 items-center flex-wrap">
        <div className="flex-1 min-w-64 relative">
          <Search size={16} className="absolute left-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder="Search by message ID, rental, or number..."
            className="w-full pl-9 pr-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
          />
        </div>
        <select className="px-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all">
          <option>All Directions</option>
          <option>Inbound</option>
          <option>Outbound</option>
        </select>
        <select className="px-4 py-2.5 border border-slate-200/60 rounded-full bg-white text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-lime-400 transition-all">
          <option>All Statuses</option>
          <option>Delivered</option>
          <option>Failed</option>
          <option>Pending</option>
        </select>
      </div>

      {/* Messages Table */}
      <div className="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr className="bg-[#F9F9F8] border-b border-slate-200/60">
              <th className="p-4 font-semibold text-slate-600">Message ID</th>
              <th className="p-4 font-semibold text-slate-600">Rental ID</th>
              <th className="p-4 font-semibold text-slate-600">Direction</th>
              <th className="p-4 font-semibold text-slate-600">Status</th>
              <th className="p-4 font-semibold text-slate-600">Provider</th>
              <th className="p-4 font-semibold text-slate-600">Timestamp</th>
              <th className="p-4 font-semibold text-slate-600">Content Access</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Row 1 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs text-slate-900 font-medium">msg_9x8y7z6</td>
              <td className="p-4 font-mono text-xs text-slate-500">rnt_1a2b3c4</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  Inbound
                </span>
              </td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Delivered
                </span>
              </td>
              <td className="p-4 text-xs text-slate-600">Twilio</td>
              <td className="p-4 text-xs text-slate-600">Oct 24, 14:32:01 UTC</td>
              <td className="p-4">
                <button className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 transition-colors">
                  Restricted
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs text-slate-900 font-medium">msg_3a4b5c7</td>
              <td className="p-4 font-mono text-xs text-slate-500">rnt_2k3l4m5</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  Outbound
                </span>
              </td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Delivered
                </span>
              </td>
              <td className="p-4 text-xs text-slate-600">Telnyx</td>
              <td className="p-4 text-xs text-slate-600">Oct 24, 13:15:42 UTC</td>
              <td className="p-4">
                <button className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 transition-colors">
                  Restricted
                </button>
              </td>
            </tr>

            {/* Row 3 - Failed */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs text-slate-900 font-medium">msg_7f8g9h1</td>
              <td className="p-4 font-mono text-xs text-slate-500">rnt_8x7y6z9</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  Outbound
                </span>
              </td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Failed
                </span>
              </td>
              <td className="p-4 text-xs text-slate-600">Twilio</td>
              <td className="p-4 text-xs text-slate-600">Oct 24, 12:48:19 UTC</td>
              <td className="p-4">
                <button className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 transition-colors">
                  Restricted
                </button>
              </td>
            </tr>

            {/* Row 4 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs text-slate-900 font-medium">msg_5i6j7k2</td>
              <td className="p-4 font-mono text-xs text-slate-500">rnt_4a5b6c7</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  Inbound
                </span>
              </td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
                  Delivered
                </span>
              </td>
              <td className="p-4 text-xs text-slate-600">Telnyx</td>
              <td className="p-4 text-xs text-slate-600">Oct 24, 11:22:08 UTC</td>
              <td className="p-4">
                <button className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 transition-colors">
                  Restricted
                </button>
              </td>
            </tr>

            {/* Row 5 */}
            <tr className="hover:bg-[#F9F9F8]/50 transition-colors">
              <td className="p-4 font-mono text-xs text-slate-900 font-medium">msg_1m2n3o3</td>
              <td className="p-4 font-mono text-xs text-slate-500">rnt_7f8g9h0</td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                  Outbound
                </span>
              </td>
              <td className="p-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Pending
                </span>
              </td>
              <td className="p-4 text-xs text-slate-600">Twilio</td>
              <td className="p-4 text-xs text-slate-600">Oct 24, 10:05:33 UTC</td>
              <td className="p-4">
                <button className="text-xs font-medium px-2.5 py-1 rounded-full border border-slate-200 text-slate-600 hover:border-slate-400 transition-colors">
                  Restricted
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Privacy Notice */}
      <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60">
        <h3 className="font-semibold text-slate-900 mb-3">Emergency Access Protocol</h3>
        <p className="text-sm text-slate-600 mb-4">
          To access message content for security investigations or customer support escalations, submit a break-glass request. All access is logged and audited.
        </p>
        <button className="px-4 py-2.5 border border-slate-300 rounded-full text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors">
          Request Content Access
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-slate-600">
        <span>Showing 5 of 12,847 messages</span>
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
