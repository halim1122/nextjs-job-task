# Sh🍔pDay - Food & Products Delivery Website

A modern **Next.js** e-commerce style website for products and food delivery. Users can browse products, see details, and add them to cart. Admin can add products via dashboard.

---

## 🔹 Features

### User Features
- Browse all products and food items
- Product detail page with image, category, price, ratings, and shipping info
- Add to Cart and Buy Now options
- Responsive Hero and Best Deals sections
- Product Highlights section with featured items
- Loading spinners for better UX

### Admin / Dashboard Features
- Add new products with image upload (ImgBB integration)
- Submit product info to backend (MongoDB)
- Interactive form with validation (React Hook Form)
- Manage products (Edit/Delete)

---

## 🔹 Technologies Used
- **Frontend:** Next.js 13, React, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **Form Handling:** React Hook Form
- **HTTP Requests:** Axios
- **Image Hosting:** ImgBB
- **Deployment:** Vercel (frontend), Render/other hosting for backend

---

## 🔹 Pages & Components
- **Home Page:** Hero, Beast Deals, Product Highlights
- **Products Page:** Shows all products with pagination (10 per page)
- **Product Details Page:** Detailed info + interactive quantity + Add to Cart
- **Dashboard/Add Product:** Admin can add new products
- **Navbar:** Fixed top navbar, highlights active page
- **Footer:** Logo + links + social info
- **Loading State:** Displayed while fetching data

---

## 🔹 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/halim1122/nextjs-job-task.git
cd nextjs-job-task
2. Install dependencies
npm install
# or
yarn install
3. Set up environment variables
Create a .env.local file in root:
MONGODB_URI=your_mongodb_connection_string
IMGBB_API_KEY=your_imgbb_api_key
4. Run locally
npm run dev
# or
yarn dev
Frontend will run on http://localhost:3000.

5. Backend
If using Express backend locally:
cd backend
npm install
npm run dev
