# admin-safeline

Production operations dashboard for [Safeline](https://github.com/btcdecky-cmd/safeline).

Controls live inventory, rentals, messages, provider health, OTP sessions, finance audit, and treasury records against the Safeline API.

## Connect to production

```bash
cp .env.example .env.local
# Point at your Safeline API
SAFELINE_API_URL=https://api.your-safeline.com
# Admin JWT (login on Safeline with role=admin, or first signup user)
SAFELINE_ADMIN_TOKEN=eyJ...
```

On Safeline, set `ADMIN_EMAILS=you@company.com` or use the first registered user (auto-admin).

## Admin API surface (Safeline)

| Endpoint | Purpose |
|----------|---------|
| `GET /api/admin/ops` | KPIs, expiring rentals, failed purchases |
| `GET /api/admin/numbers` | Inventory |
| `GET /api/admin/rentals` | All rentals |
| `GET /api/admin/messages` | Inbound SMS |
| `GET /api/admin/providers` | PVAPins / 5SIM / Solana / Paystack health |
| `GET /api/admin/audit` | Audit + ledger |
| `GET /api/admin/otp` | OTP orchestration sessions |
| `GET /api/admin/finance` | Treasury / profit |

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000/admin](http://localhost:3000/admin).

UI shell is Next.js (v0). Data layer: `lib/safeline.ts` → production Safeline backend.
