My Store App 🛍️

**Video Demo**

<img src="./src/Videos/ScreenRecording2025-05-29at11.12.09-ezgif.com-video-to-gif-converter.gif" width="600">

**Overview**
My Store App is an e-commerce web application built using React and Vite. It enables users to browse products, add items to their cart, favorite products, checkout and pay. Users are also able to view a product page dedicated to individual products, which provides them with more details about the product and a list of related products beneath. The app uses Zustand for state management, MUI for UI components, and integrates form validation with Yup and React Hook Form.

**Tech Stack**
✨ **Frontend:** React, Vite
🎨 **UI Components:** Material-UI (MUI), Emotion
🗂️ **State Management:** Zustand
🛣️ **Routing:** React Router
📝 **Form Validation:** Yup, React Hook Form
🛠️ **Development Tools:** ESLint, Vite, GitHub Actions

**Design**

✅ Prototype: Created in Figma for desktop and mobile:

[Visit the design page](https://www.figma.com/design/DUTVlbY10PKQkLFLsX4amx/E-commerce-store?node-id=0-1&t=bME8PMQSrX5I6Qgb-1)

**Installation**

Install Dependencies by running:

npm install

**Running the Development Server**

Start the app locally by running:

npm run dev

**Build for Production**

Run the following:

npm run build

**Lint the Code**

To check for linting issues, run:

npm run lint

**Preview Production Build**

To run a preview of the built app, run:

npm run preview

**Features**
🛒 **Product Listing:**
Browse products fetched from an API Product Listing: Browse products fetched from an API
🛍️ **Shopping Cart:**
Add/remove items with dynamic price calculation
❤️ **Favorites Sidebar:**
Save favorite items persistently
💳 **Secure Checkout & Pay:**
Process orders with form validation
🎨 **Responsive Design:**
Styled with MUI for a modern look
🚀 **Optimized Performance:**
Built using Vite for fast loading

**Project Structure**

my-store-app/
│── src/ # Main source code
│ ├── Components/ # Reusable components (Product, Cart, Sidebar)
│ ├── Pages/ # App pages (Home, Checkout, Product Details)
│ ├── Store/ # Zustand global state management
│ ├── CSS_Modules/ # CSS modules for styling
│── public/ # Static assets
│── package.json # Project dependencies & scripts
│── README.md # Project documentation

**API Integration**

Products are fetched from:

🔗 API URL: https://v2.api.noroff.dev/online-shop

**How to contribute**

1. Fork the repository

2. Create a new branch (feature/new-feature)

3. Submit a Pull Request

🚀 [Visit the Deployed Version](https://easybuyonline.netlify.app/)

**License**

This project is licensed under MIT.
