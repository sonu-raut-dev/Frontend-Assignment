# 🧩 Frontend Developer Assignment — Users Directory

A **responsive card-view dashboard** built with **Next.js**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**, inspired by the Dribbble shot _Rentabel — Card View of Orders_.

---

## ⚙️ Setup (Run Locally)

```bash
# 1) Clone
git clone https://github.com/sonu-raut-dev/Frontend-Assignment.git
cd frontend-assignment

# 2) Install deps
npm install

# 3) Dev server
npm run dev
# open http://localhost:3000

```


## 🛠️ Tech Stack

| Category | Technology | Description |
|-----------|-------------|--------------|
| **Framework** | [Next.js 14](https://nextjs.org/) | React framework for SSR, routing & performance |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strongly typed JavaScript for maintainable code |
| **State Management** | [Redux Toolkit](https://redux-toolkit.js.org/) | Simplified global state management |
| **API Handling** | [Axios](https://axios-http.com/) | Promise-based HTTP client for data fetching |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework for responsive design |
| **UI Components** | [Lucide React](https://lucide.dev/) & [Remix Icons](https://remixicon.com/) | Scalable SVG icon libraries |
| **Fonts** | [Outfit](https://fonts.google.com/specimen/Outfit) | Clean, modern sans-serif font used throughout UI |
| **Linting & Formatting** | ESLint + Prettier | Ensures consistent code quality and style |
| **Deployment** | [Vercel](https://vercel.com/) | Cloud platform optimized for Next.js apps |


## 🎯 What's Implemented

### 🧩 Core Functionality
- Fetches user data from **[JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)**
- Displays users in a **responsive card grid** (1 / 2 / 4 columns for mobile, tablet, desktop)
- Each **User Card** shows:
  - Avatar with user initials  
  - Name and a **randomly assigned role**, since the API does not provide any designation field  
  - Company name and city  
  - Status chip (Active / Inactive)  
  - “Details” button to view more info

---

### 🔍 Search & Sort
- **Debounced Search:** Filters users by name (400ms delay)
- **Sort Dropdown:** Sorts users alphabetically by:
  - Name  
  - Company

---

### 📦 Modal View
- Opens on card click  
- Displays full user details:
  - Phone  
  - Website  
  - Complete address (street, suite, city, zipcode)
- Click-away listener to close modal

