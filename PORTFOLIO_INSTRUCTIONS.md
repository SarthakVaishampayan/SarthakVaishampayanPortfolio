# 🏟️ VenuePro SaaS — Portfolio Showcase Guide

> **Copy this file** into your portfolio repo, open Codebuff there, and paste: `Follow PORTFOLIO_INSTRUCTIONS.md to add the VenuePro SaaS project to my portfolio site.`

---

## 📋 Project Overview

| Field | Value |
|-------|-------|
| **Name** | VenuePro SaaS |
| **Tagline** | Multi-tenant sports facility management platform |
| **Description** | A full-stack SaaS platform for managing pool/snooker parlours, cricket/football turfs, pickleball courts, and gaming zones. Features multi-tenant architecture with tenant isolation, subscription management, real-time session tracking, staff management, and advanced analytics. |
| **Live Demo** | *(your deployed URL here — e.g., https://venuepro-five.vercel.app)* |
| **GitHub** | *(your repo URL)* |
| **Duration** | ~3 months active development (May 2026 – present) |
| **Role** | Solo full-stack developer & architect |

---

## 🛠 Tech Stack

### Frontend
- **React 19** + **Vite 8** — Fast builds with HMR
- **React Router v7** — Client-side routing (super admin, owner, staff, player portals)
- **Tailwind CSS v4** — Utility-first styling with dark/light mode
- **Recharts** — Dashboard charts (MRR, revenue trends, analytics)
- **Lucide React** — Icons
- **Axios** — HTTP client with JWT interceptor & auto-refresh
- **Deployed on:** Vercel

### Backend
- **Node.js** + **Express 4** — RESTful API
- **MongoDB** + **Mongoose** — Shared database with `tenantId` isolation
- **JWT** — 15-min access + 7-day refresh token rotation
- **Helmet** + **CORS** + **Rate Limiting** + **MongoDB Sanitization** — Security pipeline
- **Swagger/OpenAPI** — Auto-generated API docs at `/api-docs`
- **Zod** — Request validation
- **Winston** + **Morgan** — Logging
- **Node-cron** — Scheduled tasks (demo cleanup)
- **Nodemailer** — Transactional emails
- **Deployed on:** DigitalOcean Droplet

### Architecture
- **Multi-tenant SaaS** — Single shared MongoDB with `tenantId` isolation
- **Module-based design** — 4 business types as plug-in modules with a dispatcher pattern
- **Repository pattern** — Data access abstraction for future per-tenant DB scaling
- **Event-driven notifications** — EventBus → subscribers → in-app notifications + email

---

## ✨ Key Features to Showcase

### 1. Multi-Tenant Architecture
- Super admin panel — manage tenants, subscriptions, platform analytics
- Owner portal — manage venue operations (resources, sessions, customers, payments)
- Staff portal — limited operational access (start/end sessions, accept payments)
- Player portal — cross-tenant identity, booking history, live venue browsing
- Tenant isolation enforced via middleware — every query filtered by `tenantId`

### 2. Four Business Type Modules
| Module | Resource | Booking Mode | Pricing |
|--------|----------|-------------|---------|
| Pool & Snooker | Tables | Elapsed timer (5-min rounding) | Day/night rates |
| Pickleball | Courts | Duration picker + countdown | Hourly rate |
| Cricket/Football | Turfs | Duration picker + countdown | Hourly rate |
| Gaming Zone | Consoles | Elapsed timer | Day/night rates |

### 3. Real-Time Session Tracking
- 1-second client-side timer (zero server cost per tick)
- Chained `setTimeout` polling (no request pileup)
- Optimistic updates — UI updates instantly, server confirms on next sync
- 5-minute business rounding (industry standard for pool/snooker)

### 4. Subscription & Billing
- 4 tiers (Free/Starter/Pro/Enterprise) with manual billing
- Multi-step "Record Payment" modal with MongoDB transactions
- Auto invoice generation with sequential numbering
- Status lifecycle: trial → active → overdue → suspended → expired
- Owner-facing billing dashboard with invoice history

### 5. Self-Service Signup & Onboarding
- 5-step signup wizard (business type → account → details → plan → confirm)
- 7-step onboarding wizard with progress indicator
- 14-day trial with watermark on free plan
- Demo environment — 1-click "Try Demo" with pre-seeded data, 24h auto-expiry
- Guided tour (8-step DemoTour component)

### 6. Staff Portal & Branch Management
- Multi-branch support with branch-specific dashboards
- Role-based permissions (manager/staff/cashier) with 8 granular permissions
- Staff shift scheduling with check-in/check-out
- Salary payment tracking (full/half/partial)
- Activity audit trail with 7-day chart

### 7. Reports & Analytics
- Customer lifetime value (CLV) tracking
- Peak hours analysis (24h breakdown + day-of-week)
- Resource utilization heatmap
- Staff performance (sessions, revenue, ROI)
- Branch P&L reports
- CSV export
- Comparative period analysis

### 8. Player Portal & Live Availability
- Cross-tenant player identity (sign up once, visit any venue)
- Live venue browsing with real-time resource availability
- SVG progress rings showing available/occupied/maintenance
- Dark mode, mobile-responsive

### 9. Notifications Engine
- Event-driven system (15+ event types)
- In-app notification bell with 30s polling
- Notification center with All/Unread filters
- Email notifications via Nodemailer

---

## 📸 Suggested Screenshots to Capture

1. **Super Admin Dashboard** — KPI cards (MRR, ARR, active tenants, revenue chart)
2. **Owner Sessions Page** — Resource tiles grid with live timers, duration picker
3. **Owner Dashboard** — Today's stats, revenue chart, active sessions
4. **Subscription Management** — Subscription list with status badges, Record Payment modal
5. **Pricing Page** — 4-tier pricing cards with feature comparison
6. **Public Venues Page** — Live availability with SVG progress rings
7. **Reports Tab** — CLV analytics, peak hours heatmap, branch P&L
8. **Staff Shift Management** — Shift calendar with check-in/check-out
9. **Signup Wizard** — 5-step signup flow
10. **API Docs** — Swagger UI at `/api-docs`

---

## 💻 Portfolio Implementation Suggestions

The portfolio repo is likely a React/Next.js site. Here are flexible ways to add this project:

### Option A: Projects Array Entry (if you have a data-driven projects page)

```js
{
  id: 'venuepro-saas',
  title: 'VenuePro SaaS',
  tagline: 'Multi-Tenant Sports Facility Management Platform',
  description: `A full-stack SaaS platform managing 4 business types (pool/snooker, cricket/football, pickleball, gaming zones) with tenant isolation, real-time session tracking, subscription billing, staff management, and advanced analytics. Features 4 portals: super admin, venue owner, staff, and player.`,
  techStack: ['React 19', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Recharts', 'Swagger'],
  features: [
    'Multi-tenant architecture with strict tenant isolation',
    '4 business-type modules with plug-in dispatcher pattern',
    'Real-time session tracking with 1-second timers',
    'Subscription management with auto invoicing',
    'Staff management with shift scheduling & role-based permissions',
    'Advanced analytics (CLV, peak hours, heatmap, branch P&L)',
    'Player portal with cross-tenant identity & live availability',
    'Event-driven notification engine (in-app + email)',
    'Self-service signup, trials, demo environment with guided tour',
    'Multi-branch support with P&L reporting'
  ],
  liveUrl: 'https://venuepro-five.vercel.app',
  githubUrl: 'https://github.com/yourusername/venuepro-saas',
  screenshots: [
    { src: '/images/venuepro-dashboard.png', alt: 'Super Admin Dashboard' },
    { src: '/images/venuepro-sessions.png', alt: 'Live Session Tracking' },
    { src: '/images/venuepro-pricing.png', alt: 'Pricing Page' },
    { src: '/images/venuepro-analytics.png', alt: 'Analytics Dashboard' },
    { src: '/images/venuepro-venues.png', alt: 'Public Venues Page' },
  ],
  highlights: [
    'Solo architected & built a multi-tenant SaaS from scratch',
    'Module-based design supports easy addition of new business types',
    'Production-ready with security pipeline, rate limiting, and audit logging',
    '~88% complete — core product feature-complete'
  ]
}
```

### Option B: Dedicated Project Page Sections

1. **Hero** — Large screenshot of the super admin dashboard + tagline overlay
2. **Problem** — "Sports venues need unified management software that works for their specific business type, supports cash-heavy operations, and handles multi-branch operations."
3. **Solution** — "VenuePro SaaS: a white-label platform supporting 4 business types with module-based architecture, real-time tracking, and enterprise-grade features."
4. **Architecture Diagram** — Show the tenant isolation model (visual: Super Admin → Multiple Tenants → Each with Owner/Staff/Player portals)
5. **Tech Stack** — Grid of technology badges/cards
6. **Key Features** — Tabbed or accordion sections for each major feature
7. **Screenshots Gallery** — Lightbox gallery of 6-10 screenshots
8. **Testimonial / Metrics** — "3 months build time, 4 business types, 4 portals, 15+ route files, 30+ frontend pages"
9. **Live Demo + GitHub** — Call-to-action buttons

### Option C: Simple Card (for a minimal portfolio)

```jsx
<ProjectCard
  title="VenuePro SaaS"
  description="Multi-tenant SaaS platform for sports facility management. 4 business modules, 4 user portals, real-time session tracking, subscription billing, and advanced analytics."
  tech={["React", "Node.js", "MongoDB", "Express", "Tailwind"]}
  liveUrl="https://venuepro-five.vercel.app"
  githubUrl="https://github.com/yourusername/venuepro-saas"
  image="/images/venuepro.png"
  highlights={["Multi-tenant architecture", "4 business types", "Real-time timers", "Staff/Player portals"]}
/>
```

---

## 🎯 Key Technical Highlights to Emphasize

1. **Tenant isolation via middleware** — Every MongoDB query includes `req.tenantId`. This is enforced at the middleware level, not left to individual controllers.

2. **Module dispatcher pattern** — `registerModuleControllers('pickleball', { resourceController, bookingController })` makes adding a new business type a 3-step process.

3. **Cross-module payment tracking** — The payment controller iterates all 4 Mongoose model names to update `paymentStatus`, because each module uses a separate Mongoose collection.

4. **Zero-cost timers** — 1-second client-side `setInterval` with chained `setTimeout` polling (instead of `setInterval`) prevents server request pileup on free-tier hosts.

5. **MongoDB transactions** — Payment recording atomically creates/updates subscription + generates invoice + updates tenant, all in one transaction. If any step fails, everything rolls back.

---

## 🔗 Quick Links

- **Live Site:** [https://venuepro-five.vercel.app](https://venuepro-five.vercel.app)
- **API Docs:** `https://venuepro-five.vercel.app/api-docs`
- **Health Check:** `https://venuepro-five.vercel.app/api/health`
- **Super Admin Login:** `https://venuepro-five.vercel.app/superadmin/login`
- **Owner Login:** `https://venuepro-five.vercel.app/owner/login`
- **Public Venues:** `https://venuepro-five.vercel.app/venues`

> **Note:** The backend is hosted on the user's DigitalOcean droplet. If the droplet is off, the live site will show loading states. The project can be run locally with `npm install && npm run seed && npm run dev` from `saas-platform/`.

---

## 🚀 How to Run Locally (for portfolio screenshots)

```bash
git clone <repo-url>
cd saas-platform
npm run install:all    # Install root + server + client deps
# Make sure MongoDB is running on localhost:27017
npm run seed           # Seeds super admin, business types, subscription plans
npm run dev            # Starts both server (:5000) and client (:5173)
```

**Default super admin credentials:** `admin@venuepro.com` / `Admin@123`
*(See seed.js for custom env vars)*




"Follow PORTFOLIO_INSTRUCTIONS.md to add the VenuePro SaaS project to my portfolio"