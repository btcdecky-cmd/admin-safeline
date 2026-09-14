import { Activity, AlertCircle, TrendingUp } from "lucide-react";

export default function AdminProviderHealthPage() {
  return (
    <div className="flex flex-col gap-6 pb-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Provider Health</h1>
        <p className="text-slate-500">Monitor webhook delivery, API latency, and provider availability.</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-3xl p-6 border border-slate-200/60">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 font-medium text-sm">Overall Availability</span>
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          </div>
          <div className="text-3xl font-semibold text-slate-900">99.98%</div>
          <span className="text-xs text-lime-600 mt-2 block">All systems healthy</span>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/60">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 font-medium text-sm">Avg Latency</span>
            <TrendingUp size={16} className="text-slate-400" />
          </div>
          <div className="text-3xl font-semibold text-slate-900">145ms</div>
          <span className="text-xs text-slate-500 mt-2 block">↓ 5% vs. last 24h</span>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-slate-200/60">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 font-medium text-sm">Webhook Errors (24h)</span>
            <AlertCircle size={16} className="text-amber-500" />
          </div>
          <div className="text-3xl font-semibold text-slate-900">3</div>
          <span className="text-xs text-amber-600 mt-2 block">Investigate required</span>
        </div>
      </div>

      {/* Provider Status Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Twilio */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Activity size={20} className="text-slate-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Twilio</h3>
                <p className="text-xs text-slate-500">US-based SMS provider</p>
              </div>
            </div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-600 mr-1.5"></span> Online
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">API Status</span>
              <span className="text-sm font-medium text-slate-900">✓ Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Avg Response Time</span>
              <span className="text-sm font-medium text-slate-900 font-mono">142ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Messages (24h)</span>
              <span className="text-sm font-medium text-slate-900">486,342</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Success Rate</span>
              <span className="text-sm font-medium text-lime-600">99.96%</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <span className="text-sm text-slate-600">Last Checked</span>
              <span className="text-sm font-medium text-slate-500">Just now</span>
            </div>
          </div>
        </div>

        {/* Telnyx */}
        <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Activity size={20} className="text-slate-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Telnyx</h3>
                <p className="text-xs text-slate-500">Multi-region SMS provider</p>
              </div>
            </div>
            <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-lime-100 text-lime-800">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-600 mr-1.5"></span> Online
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">API Status</span>
              <span className="text-sm font-medium text-slate-900">✓ Operational</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Avg Response Time</span>
              <span className="text-sm font-medium text-slate-900 font-mono">148ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Messages (24h)</span>
              <span className="text-sm font-medium text-slate-900">312,156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Success Rate</span>
              <span className="text-sm font-medium text-lime-600">99.93%</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t border-slate-100">
              <span className="text-sm text-slate-600">Last Checked</span>
              <span className="text-sm font-medium text-slate-500">Just now</span>
            </div>
          </div>
        </div>
      </div>

      {/* Webhook Performance */}
      <div className="bg-white rounded-3xl border border-slate-200/60 p-6 shadow-sm">
        <h2 className="text-lg font-semibold mb-6">Webhook Performance</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-slate-900 mb-4">Delivery Rate</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600">SMS Status Updates</span>
                  <span className="text-sm font-medium text-slate-900">99.94%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400" style={{ width: "99.94%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600">Rental Expiration</span>
                  <span className="text-sm font-medium text-slate-900">99.98%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400" style={{ width: "99.98%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-600">User Events</span>
                  <span className="text-sm font-medium text-slate-900">99.89%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400" style={{ width: "99.89%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-slate-900 mb-4">Recent Errors</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-2xl border border-red-100">
                <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-red-900">Timeout on SMS Status webhook</p>
                  <p className="text-xs text-red-700 mt-0.5">Oct 24, 14:15 UTC (2 hrs ago)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-2xl border border-red-100">
                <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-red-900">Delivery retry exhausted</p>
                  <p className="text-xs text-red-700 mt-0.5">Oct 24, 09:42 UTC (8 hrs ago)</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-2xl border border-red-100">
                <AlertCircle size={16} className="text-red-600 mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-red-900">Invalid payload signature</p>
                  <p className="text-xs text-red-700 mt-0.5">Oct 23, 22:08 UTC (16 hrs ago)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Page Link */}
      <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 flex justify-between items-center">
        <div>
          <h3 className="font-semibold text-slate-900 mb-1">Public Status Page</h3>
          <p className="text-sm text-slate-600">Users can view our operational status and incident history.</p>
        </div>
        <button className="px-6 py-2.5 border border-slate-300 rounded-full text-sm font-medium text-slate-900 hover:bg-slate-100 transition-colors">
          View →
        </button>
      </div>
    </div>
  );
}
