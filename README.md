# 🌾 AgriBid – Smart Bidding-Based Agri Trade Platform

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://yourusername.github.io/AgriBid/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://pages.github.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

AgriBid is a web application that connects farmers directly with warehouses, restaurants, and supershops, promoting fair trade and transparent pricing. The platform eliminates intermediaries, empowering farmers to earn more while allowing buyers to access fresh produce at competitive rates.

![AgriBid Landing Page](images/banner-1.png)

---

## 🎯 Live Demo

**Visit:** [https://yourusername.github.io/AgriBid/](https://srbshakib.github.io/AgriBid/)

---

## 🌟 Key Features

### 🔐 **Authentication System** (NEW!)
- **Complete Login/Logout System** - Secure authentication for all user types
- **Session Management** - Persistent login with localStorage
- **Dashboard Protection** - Automatic access control
- **User Type Validation** - Ensures correct dashboard access
- **Beautiful Notifications** - Toast-style feedback messages
- **No Backend Required** - Client-side authentication ready

### 1. 👥 User Management
User Authentication & Roles

Secure sign-up and login for Farmers, Buyers, and Admins

Role-based dashboard and access controls

Profile management for all users

2. 🌽 Product & Inventory Management
Product Listing & Bidding

Farmers can list agricultural products with full descriptions and multimedia (photos/videos)

Option to sell via direct sale or auction bidding

Inventory Management

Stock control: Add, update, and remove product listings

Expiry tracking and product lifecycle monitoring

3. 🛒 Purchase & Auction Management
Search & Filters

Product search by category, location, price range

Sorting by freshness, price, and availability

Direct Buy System

Instant purchase from farmers at listed price

Auction System

Buyers can place competitive bids on products

Real-time bid notifications and auction results

Advance Sale Option

Buyers can prepay for future deliveries (ideal for bulk or seasonal purchases)

4. 💳 Payment & Order Management
Payment Integration

Seamless and secure transactions

Integrated with SSLCommerz for advance sales

Order Tracking

Real-time status updates on order processing and delivery

Alerts for auction wins, purchase confirmations, and delivery logistics

User Feedback System

Post-transaction reviews and ratings for both farmers and buyers

Promotes trust and reliability on the platform

5. 🛠️ Admin & Control Panel
Admin Dashboard

Full control to manage users, product approvals, and content moderation

View and analyze platform activity and trends

Market Insights & Analytics

Admins and power users can access data on:

Product performance

Price trends

User engagement and bidding activity

📌 Tech Stack (Suggested, edit as per actual)
Frontend:  HTML-CSS-JS

Backend: PHP

Database: MySQL

Authentication: JWT / OAuth

Payment Gateway: SSLCommerz

---

## 🚀 Deploy to GitHub Pages

### Quick Setup (5 Minutes)

1. **Fork or Clone this Repository**
   ```bash
   git clone https://github.com/yourusername/AgriBid.git
   cd AgriBid
   ```

2. **Push to Your GitHub Repository**
   ```bash
   git remote set-url origin https://github.com/YOUR-USERNAME/AgriBid.git
   git add .
   git commit -m "Initial commit - AgriBid Platform"
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll to **Pages** section (left sidebar)
   - Under **Source**, select `main` branch
   - Click **Save**
   - Your site will be live at: `https://YOUR-USERNAME.github.io/AgriBid/`

4. **Update README Links**
   - Replace `yourusername` with your GitHub username in the badges and demo links above

### Custom Domain (Optional)

To use a custom domain like `www.agribid.com`:

1. Add a file named `CNAME` in the root directory with your domain:
   ```
   www.agribid.com
   ```

2. Configure your domain's DNS settings:
   - Add a CNAME record pointing to `YOUR-USERNAME.github.io`
   - Or add A records for GitHub Pages IPs

3. In GitHub Settings > Pages, enter your custom domain and save

---

## 📁 Project Structure

```
AgriBid/
├── index.html              # Landing page (Entry point)
├── farmerdashboard.html    # Farmer dashboard
├── buyerDashboard.html     # Buyer dashboard
├── adminDashboard.html     # Admin panel
├── css/
│   └── Style.css          # Core design system
├── images/                 # Product images & assets
│   ├── banner-1.png
│   ├── tomato.jpg
│   ├── mango.jpg
│   └── ...
├── DOCUMENTS/             # Documentation files
└── README.md              # This file
```

---

## 🎨 Features Showcase

### 🏠 Landing Page
- **Hero Section** with parallax scrolling and floating product images
- **Features Grid** showcasing 6 key platform features
- **Live Product Showcase** with real agricultural products
- **Animated Statistics** with counter animations
- **User Type Selection** for Farmers and Buyers
- **Testimonials** from real users
- **Login Modal** for easy access

### 👨‍🌾 Farmer Dashboard
- Product listing and management
- Real-time bidding notifications
- Sales analytics and insights
- Wallet and payment tracking

### 🛒 Buyer Dashboard
- Product browsing with advanced filters
- Bidding system
- Order history and tracking
- Market analytics

### 🔧 Admin Panel
- User management
- Product approvals
- Platform analytics
- Content moderation

---

## 🎬 Animations & Effects

✨ **Advanced Animations:**
- Parallax scrolling on hero section
- Floating product images with independent timing
- Counter animations for statistics
- 3D tilt effect on hover for cards
- Smooth scroll with AOS library
- Pulse animations on badges
- Image zoom on product hover
- Gradient transitions

---

## 📱 Responsive Design

Fully responsive across all devices:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1200px+)

---

## 🔧 Local Development

### Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/AgriBid.git
   ```

2. **Open in browser:**
   ```bash
   cd AgriBid
   open index.html
   # or use a local server:
   python3 -m http.server 8000
   # Then visit: http://localhost:8000
   ```

3. **Make changes and test**

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

   GitHub Pages will auto-deploy your changes!

---

## 🌐 Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Opera (latest)

---

## 📸 Screenshots

### Landing Page
![Landing Page](images/banner-1.png)

### Product Showcase
Check out fresh products with live bidding!

### Farmer Dashboard
Manage your products and track sales in real-time.

### Buyer Dashboard
Browse, bid, and purchase quality agricultural products.

---

## 🔐 Security Features

- Secure authentication system
- Role-based access control
- Encrypted payment processing
- Data validation and sanitization
- HTTPS enforcement on GitHub Pages

---

## 🤝 Contribution
Contributions, bug reports, and suggestions are welcome! Please open an issue or submit a pull request to collaborate.
