# Sentora - E-Commerce Fragrance Store

A modern, full-featured e-commerce application built with Next.js 15 (App Router), featuring product browsing, authentication, and a responsive design optimized for all devices.

**Live URL**: [https://sentora-online-perfume-shop.vercel.app/](https://sentora-online-perfume-shop.vercel.app/)

## 🚀 Project Overview

Sentora is a fragrance e-commerce platform that allows users to browse products, filter by categories and brands, view detailed product information, and manage their shopping experience with authentication-based features.

## ✨ Implemented Features

### 1. **Landing Page (Public)**

The homepage includes 7+ essential sections:

- **Navbar**: Navigation links to Shop, Login/Register pages
- **Hero Banner**: Eye-catching promotional section
- **Features Section**: Key benefits and selling points
- **Collections**: Curated product collections
- **Products Section**: Featured products with server-side rendering
- **Newsletter**: Email subscription component
- **Footer**: Site-wide footer with links and information

**Route**: `/`

### 2. **Authentication System**

- ✅ **NextAuth.js Integration**: Professional authentication solution
- ✅ **Credential Login**: Email & password authentication with MongoDB storage
- ✅ **Google OAuth**: Social login via Google provider
- ✅ **Session Management**: JWT-based session with cookies
- ✅ **Protected Routes**: Server-side session validation
- ✅ **User Roles**: Role-based access control (admin/user)

**Routes**:

- `/login` - Login page
- `/register` - Registration page
- `/api/auth/*` - NextAuth API routes

**Test Credentials** (if using mock/seed data):

```
Email: test@example.com
Password: password123
```

### 3. **Product List Page (Public)**

- ✅ **Server-Side Data Fetching**: Products loaded from database
- ✅ **Advanced Filtering**: Sort by price, rating, newest arrivals
- ✅ **Category Filter**: Filter by gender/category
- ✅ **Brand Filter**: Multi-select brand filtering with search
- ✅ **Responsive Grid**: 2-column mobile, 3-column tablet/desktop
- ✅ **Product Cards**: Display name, image, price, rating, "NEW" badges
- ✅ **Mobile-Optimized Filter**: Full-screen modal with React Portal

**Route**: `/shop`

### 4. **Product Details Page (Public)**

- ✅ **Dynamic Routes**: `/shop/[id]` for individual products
- ✅ **Full Product Information**: Images, descriptions, pricing, specifications
- ✅ **Add to Cart**: Quick add functionality
- ✅ **Related Products**: Suggestions based on category

**Route**: `/shop/[id]`

### 5. **Additional Features**

#### Shopping Cart

- Add/remove items
- Quantity management
- Session-based for guests, database-backed for authenticated users

#### Wishlist (Protected)

- Save favorite products
- Requires authentication
- Persistent across sessions

#### Contact Page

- Contact form for customer inquiries

**Route**: `/contact`

#### Blog Section

- Articles and content
- Dynamic routing for individual posts

**Routes**:

- `/blog` - Blog list
- `/blog/[id]` - Individual post

## 🛠️ Technologies Used

### Frontend

- **Next.js 15**: React framework with App Router
- **React 18**: UI library
- **Tailwind CSS**: Utility-first styling
- **React Icons**: Icon library (Font Awesome, Feather Icons)

### Backend

- **Next.js API Routes**: Server-side API endpoints
- **Server Actions**: Form handling and mutations
- **MongoDB**: Database for products, users, cart, wishlist
- **NextAuth.js**: Authentication library

### Authentication & State

- **NextAuth.js**: OAuth and credential authentication
- **JWT**: Token-based sessions
- **Cookies**: Secure session storage

### Tools & Utilities

- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Vercel**: Deployment platform

## 📦 Installation & Setup

### Prerequisites

- Node.js 18+ installed
- MongoDB instance (local or Atlas)
- Google OAuth credentials (optional, for social login)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd sentora
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=mongodb+srv://your-connection-string

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth (Optional)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
sentora/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.js            # Landing page
│   │   ├── layout.js          # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── login/             # Login page
│   │   ├── register/          # Registration page
│   │   ├── shop/              # Product listing
│   │   │   ├── page.jsx       # Shop page
│   │   │   └── [id]/          # Product details
│   │   ├── blog/              # Blog section
│   │   ├── contact/           # Contact page
│   │   ├── api/               # API routes
│   │   │   └── auth/          # NextAuth endpoints
│   │   └── actions/           # Server actions
│   │       └── server/        # Server-side logic
│   ├── Components/            # React components
│   │   ├── auth/              # Auth forms
│   │   ├── Buttons/           # Button components
│   │   ├── cards/             # Card components
│   │   ├── home/              # Homepage sections
│   │   ├── layout/            # Layout components
│   │   ├── shop/              # Shop components
│   │   └── skeleton/          # Loading skeletons
│   ├── lib/                   # Utilities
│   │   ├── authOptions.js     # NextAuth config
│   │   └── dbConnect.js       # Database connection
│   └── provider/              # Context providers
├── public/                    # Static assets
│   └── assets/               # Images, icons
├── .env.local                # Environment variables
├── next.config.mjs           # Next.js config
├── tailwind.config.js        # Tailwind config
└── package.json              # Dependencies
```

## 🗺️ Route Summary

| Route         | Type   | Description                       |
| ------------- | ------ | --------------------------------- |
| `/`           | Public | Landing page with 7+ sections     |
| `/shop`       | Public | Product listing with filters      |
| `/shop/[id]`  | Public | Product detail page               |
| `/login`      | Public | User login                        |
| `/register`   | Public | User registration                 |
| `/blog`       | Public | Blog posts listing                |
| `/blog/[id]`  | Public | Individual blog post              |
| `/contact`    | Public | Contact form                      |
| `/api/auth/*` | API    | NextAuth authentication endpoints |

## 🎯 Key Implementation Details

### Authentication Flow

1. User submits credentials via login form
2. NextAuth validates against MongoDB user collection
3. JWT token generated and stored in httpOnly cookie
4. Session available via `getServerSession()` on server
5. Protected routes check session before rendering

### Product Filtering

1. Filter state managed in client component
2. URL search params store active filters
3. Server-side filtering in `getFilteredProducts()`
4. Instant updates via Next.js navigation
5. Mobile: Full-screen modal with React Portal (z-index: 9999)

### Database Collections

- **users**: User accounts and profiles
- **products**: Product catalog
- **cart**: Shopping cart items
- **wishlist**: Saved products
- **blog**: Blog posts

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Add environment variables
4. Deploy automatically

**Live URL**: `https://your-app.vercel.app`

### Environment Variables for Production

Ensure all variables from `.env.local` are added to your Vercel project settings.

## 📸 Screenshots

### Landing Page

7+ sections including Hero, Features, Collections, Products, Newsletter

### Shop Page

Advanced filtering system with responsive design

### Product Details

Comprehensive product information with add-to-cart

### Authentication

Secure login with Google OAuth option

## 🔐 Login Credentials

For testing purposes:

**Method 1: Create New Account**

- Navigate to `/register`
- Fill in the registration form
- Login with created credentials

**Method 2: Google OAuth**

- Click "Sign in with Google" on login page
- Authorize with your Google account

**Method 3: Mock Credentials** (if seeded in database)

```
Email: demo@sentora.com
Password: Demo@123
```

## 🎨 Features Explanation

### Advanced Filtering System

The shop page implements a sophisticated filtering mechanism:

- **Server-Side**: Filters applied in database query for performance
- **URL Persistence**: Filter state stored in URL params
- **Mobile UX**: Portal-rendered modal prevents z-index conflicts
- **Real-time**: Instant updates without page reload

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-optimized interactions
- Adaptive layouts for all screen sizes

### Performance Optimizations

- Server-side rendering for SEO
- Suspense boundaries for loading states
- Image optimization with Next.js Image
- Code splitting and lazy loading

## 🤝 Contributing

This is a project submission. For any questions or issues, please contact the repository owner.

## 📄 License

This project is created for educational/assessment purposes.

---

**Built with ❤️ using Next.js 15 and modern web technologies**
