# 📝 Prostore Modern Clothing E-Commerce Platform

ProStore is a modern full-stack e-commerce application built with **Next.js**, **TypeScript**, **Tailwind CSS**, **shadcn/ui**, **Supabase**, **Prisma**, and **Stripe**.  
It provides a seamless shopping experience for customers and a robust admin dashboard for managing products, orders, and analytics.

🔗 **Live Demo:** [prostore.vercel.app](https://prostore-rho-brown.vercel.app/)

## 🖼️ Screenshot

![Task Tracker Screenshot](./public/ss-readme.png)

---

## 🚀 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Prisma ORM**
- **Supabase (PostgreSQL Database)**
- **Tailwind CSS**
- **Zod** (schema validation)
- **Vercel** (deployment target)
- **shadcn/ui**
- **Stripe** (Checkout Session + Webhooks)

---

## ✨ Features

### 🛒 **Storefront (Customer Side)**
- Homepage with hero, featured products & categories  
- Product catalogue with filtering (size, color, price, category)  
- Product detail page with gallery, variations, stock, and reviews  
- Advanced search & sorting  
- Shopping cart (client/server synced)  
- Stripe checkout integration  
- Order confirmation page  
- Review & rating system per product
  
### 🛠 **Admin Dashboard**
- Protected admin access  
- Product management (CRUD)  
- Category management  
- Inventory and product variations  
- Order management & order status  
- Basic analytics (revenue, best-selling items)  

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/<your-username>/task-tracker-nextjs.git
cd prostore
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up environtment variabels

create .env

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/postgres?sslmode=require"
NEXTAUTH_SECRET=""
PAYMENT_METHODS="PayPal, Stripe, CashOnDelivery"
DEFAULT_PAYMENT_METHOD="PayPal"

PAYPAL_API_URL="https://api-m.sandbox.paypal.com"
PAYPAL_CLIENT_ID=""
PAYPAL_APP_SECRET=""

UPLOADTHING_TOKEN=''

UPLOADTHING_SECRET=""
UPLOADTHING_APPID=""

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=""
STRIPE_SECRET_KEY=""

RESEND_API_KEY=""
SENDER_EMAIL=""
```

Make sure to replace credentials with your Supabase connection string

### 4. Set up the database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run development server

```bash
npm run dev
```

## Seeder Project

```bash
npx prisma db seed
```

## 📁 Project Structure

```bash
.
├─ app/
│  ├─ (auth)/
│  ├─ (root)/
│  ├─ admin/
│  ├─ api/
│  ├─ user/
│  ├─ favicon.ico
│  ├─ layout.tsx
│  ├─ loading.tsx
│  └─ not-found.tsx
│
├─ assets/
│  ├─ styles/
│  └─ loader.gif
│
├─ components/
│  ├─ admin/
│  ├─ shared/
│  └─ ui/
│     ├─ deal-countdown.tsx
│     ├─ footer.tsx
│     ├─ icon-boxes.tsx
│     └─ view-all-products-button.tsx
│
├─ db/
│  ├─ prisma.ts
│  ├─ sample-data.ts
│  └─ seed.ts
│
├─ email/
│  ├─ index.tsx
│  └─ purchase-receipt.tsx
│
├─ lib/
│  ├─ actions/
│  ├─ constants/
│  ├─ generated/
│  ├─ paypal.ts
│  ├─ uploadthing.ts
│  ├─ utils.ts
│  └─ validators.ts
│
├─ prisma/
│  ├─ migrations/
│  └─ schema.prisma
│
├─ public/
│  └─ images/
│
├─ tests/
│  └─ paypal.test.ts
│

```

## 🧩 Future Improvements

- Tracking shipment
- Integrate optimistic UI updates

## 🧑‍💻 Author

**Octavianus Fian**
Front-end developer learning fullstack web development
