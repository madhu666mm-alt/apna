# Apna — India's Community Platform for America

> Events · Directory · Jobs · Accommodations · Roommates · Seva AI · Newcomers Guide

## 🚀 Deploy in 5 Minutes

### Prerequisites
- Node.js 18+ 
- An Anthropic API key (for Seva AI chat) — get one at [console.anthropic.com](https://console.anthropic.com)

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local and add your ANTHROPIC_API_KEY

# 3. Run locally
npm run dev
# Open http://localhost:3000

# 4. Deploy to Vercel (one command)
npx vercel --prod
```

### One-Click Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Add your `ANTHROPIC_API_KEY` in the Vercel dashboard under Settings → Environment Variables.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌐 **State-wise Onboarding** | Full-screen state picker on first visit. All content filtered for your state. All 50 US states with Indian population data. |
| 🎟️ **Events + Ticketing** | Browse and buy tickets with QR code confirmation. H1B, Navratri, Diwali, concerts. |
| 🏪 **Business Directory** | Indian restaurants, groceries, lawyers, doctors with community reviews. |
| 💼 **Jobs with Visa Filters** | Every job tagged: H1B Sponsor, OPT/CPT OK, J1. No more guessing. |
| 🏠 **Accommodations** | Find and post apartments, houses, rooms in Indian neighborhoods. |
| 🤝 **Roommates** | Find Indian roommates. Filter by gender, habits, diet, budget, and city. |
| 🙏 **Seva AI** | AI concierge powered by Claude. Speaks Hindi, Gujarati, Telugu, Tamil, Punjabi, Bengali. |
| 🛬 **Newcomers Guide** | 8-step interactive guide: SSN, bank, SIM, housing, license, insurance, credit, community. |
| 🏘️ **Community Circles** | 10 community forums: IT Pros, Newcomers Hub, Telugu, Gujarati, Women of Apna, etc. |
| 📊 **Business Dashboard** | Analytics, reviews, and promotion plans for business owners. |

---

## 🗂️ Project Structure

```
apna/
├── app/                      # Next.js App Router pages
│   ├── api/chat/route.js     # Seva AI API route (Anthropic SDK)
│   ├── events/               # Events listing + detail + ticketing
│   ├── directory/            # Business directory + detail + reviews
│   ├── jobs/                 # Jobs board with visa filters
│   ├── accommodations/       # Housing listings + post form + detail
│   ├── roommates/            # Roommate profiles + post form + detail
│   ├── community/            # Community circles + circle detail
│   ├── seva/                 # AI chat interface
│   ├── newcomers/            # 8-step newcomer guide
│   ├── dashboard/            # Business owner dashboard
│   ├── globals.css           # Tailwind + Google Fonts
│   ├── layout.js             # Root layout (StateProvider + Nav + Footer)
│   └── page.js               # Home page
├── components/
│   ├── Nav.jsx               # Sticky navigation with state pill
│   ├── Footer.jsx            # Site footer
│   ├── StatePicker.jsx       # Full-screen state selection UI
│   └── StateGate.jsx         # Shows picker if no state chosen
├── context/
│   └── StateContext.jsx      # Global state selection (localStorage)
├── lib/
│   ├── states.js             # All 50 US states with Indian population data
│   └── data.js               # Mock data: events, businesses, jobs, housing, roommates
└── .env.example              # Environment variables template
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#E8420A` (Saffron) |
| Secondary | `#F5A623` (Gold) |
| Background | `#FEFCF7` (Cream) |
| Text | `#0F0A00` (Ink) |
| Font | Plus Jakarta Sans + Playfair Display |

---

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3
- **AI:** Anthropic Claude (via `@anthropic-ai/sdk`) 
- **Icons:** Lucide React
- **Database Ready:** Supabase (`@supabase/supabase-js`) — replace mock data with real DB
- **Payments Ready:** Stripe — integrate for real event ticketing

---

## 📦 Extending with a Real Database (Supabase)

1. Create a project at [supabase.com](https://supabase.com)
2. Add your keys to `.env.local`
3. Replace data imports in each page with Supabase queries
4. Create tables: `events`, `businesses`, `jobs`, `accommodations`, `roommates`, `reviews`

---

## 📝 License

MIT — free to use, modify, and deploy.

Built for the 4.5 million Indian-Americans across every US state. 🇮🇳🇺🇸
