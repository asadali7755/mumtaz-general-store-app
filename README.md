# Mumtaz General Store — Online Order & Khata

Two connected pages for Mumtaz General Store, Mansar Camp (Urdu + English):

- **`/` — Customer page:** register with name, mobile number, address and a PIN; browse items with pictures; order with payment on khata, cash on delivery, or Easypaisa / JazzCash (the customer sends money and types the TID); see their own balance, orders and khata history.
- **`/dukan` — Shopkeeper page (PIN):** new orders arrive with the customer's name, number, address and items; accept → deliver (khata orders are written to the customer's khata automatically); verify Easypaisa / JazzCash payments; customer list with balances, manual credit / payment entries, credit limit, and a WhatsApp bill.

Both pages talk to the same API, so an order placed on the customer page shows up on the shop page within ~10 seconds.

## How it runs

Cloudflare Pages serves the static files, and a Pages Function (`functions/api/[[path]].js`) provides the API on top of a **Cloudflare D1** database. Tables are created automatically on the first request.

Cloudflare settings needed (Pages project → Settings):

| Setting | Value |
| --- | --- |
| Binding (D1 database) | variable name `DB` → your D1 database |
| Environment variable `SHOP_PIN` | the shop's PIN (if unset, the PIN is `1234` — change it before real use) |

## Files

| Path | What it is |
| --- | --- |
| `index.html`, `assets/customer.js` | Customer page |
| `dukan/index.html`, `assets/shop.js` | Shopkeeper page |
| `assets/app.css`, `assets/common.js` | Shared styles and helpers |
| `functions/api/[[path]].js` | API (customers, orders, khata, payments) |
| `functions/_lib/catalog.js` | **Items, prices, categories, and the store's Easypaisa number — edit here** |
| `images/` | Product and banner pictures |

## Making changes

Edit, commit and push to `main` — Cloudflare Pages redeploys automatically. No build step.

Local testing: `npx wrangler pages dev . --d1 DB` then open http://localhost:8788 and http://localhost:8788/dukan.

Built by Asad Ali · NexaGrow
