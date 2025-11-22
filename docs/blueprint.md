# **App Name**: StockPilot

## Core Features:

- User Authentication: Secure sign-up/login with OTP-based password reset, redirecting to the inventory dashboard.
- Inventory Dashboard KPIs: Display key performance indicators (KPIs) such as total products, low stock items, pending receipts and deliveries, and scheduled internal transfers.
- Product Management: Create, update, and categorize products, track stock availability per location, and define reordering rules. Let LLM tool help managers set better rules by suggesting improvements.
- Receipts Management: Create and manage incoming stock receipts, adding suppliers, products, and quantities received, updating stock levels automatically upon validation.
- Delivery Orders: Process outgoing stock deliveries by picking, packing, and validating items, automatically reducing stock levels upon validation.
- Internal Transfers: Record stock movements within the company (e.g., warehouse to production floor), logging each transfer in the stock ledger.
- Stock Adjustments: Correct discrepancies between recorded and physical stock counts by entering the counted quantity, with automatic system updates and ledger logging.

## Style Guidelines:

- Primary color: Deep blue (#2962FF) for a sense of trust, stability, and efficiency, aligning with inventory management's core purpose.
- Background color: Light blue (#E6F0FF), a very desaturated tint of the primary hue, for a clean and calming interface.
- Accent color: Purple (#A214FF), an analogous color to the primary that offers high contrast for highlighting key actions.
- Body and headline font: 'Inter', a grotesque-style sans-serif with a modern, machined, objective, neutral look.
- Use clean, consistent icons to represent product categories and operations.
- Implement a modular layout with clear sections for dashboard KPIs, product listings, and operations management.
- Subtle transitions and animations for receipt and delivery validations.