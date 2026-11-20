# Mumtaz General Store — Digital Khata & Order App (Demo)

A clickable demo for Mumtaz General Store, Mansar Camp, in Urdu and English.

- **Customer app:** shop by category, cart, home delivery, monthly list, a personal khata, and Easypaisa / JazzCash payments (the customer sends money and enters the TID).
- **Shopkeeper panel:** dashboard, mobile payments to verify, orders, customer ledgers, and WhatsApp bills.

All data is sample data, held in the page only. Nothing is saved and nothing is sent.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | The live page (built, do not edit by hand) |
| `images/` | Product and banner images |
| `src/app.dc.html` | App screens (markup) and logic (the `Component` class at the bottom) |
| `src/pitch.dc.html` | The "Why this app" screen |
| `src/shell.html` | Page wrapper and the small template runtime |
| `src/images.json` | Image id → file name map |
| `build.py` | Rebuilds `index.html` from `src/` |

## Making changes

1. Edit files in `src/` — products and prices are in `this.P`, Urdu/English text in `this.T`, sample customers in `this.state.customers`.
2. Run `python build.py`.
3. Commit and push. Cloudflare Pages redeploys automatically.

No build step runs on Cloudflare: it serves the files as they are.

Built by Asad Ali · NexaGrow
