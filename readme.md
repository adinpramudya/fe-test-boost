# 🚀 FE Test Boost - Blog Wizard (Next.js)

Multi-step blog creation wizard built with **Next.js 14, TypeScript, and TailwindCSS**.  
This project was developed as part of the **Frontend Test for Boost**.

---

## 📌 Features

- 📝 **Multi-Step Wizard**
  - Step 1: Blog Metadata (title, author)
  - Step 2: Blog Summary & Category
  - Step 3: Blog Content
  - Step 4: Review & Submit
- 📂 **Blog List Page**
  - Shows all created blog posts with title, author, summary, category, and date
- 📖 **Blog Detail Page**
  - Displays full blog details
- 💾 **Data Persistence**
  - Uses React Context + LocalStorage to persist blog posts
- 🎨 **Responsive Design**
  - Mobile-first with TailwindCSS
- ✅ **Form Validation**
  - Required fields, minimum length checks

---

## 🛠️ Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React Context](https://react.dev/reference/react/useContext) for state management
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [UUID](https://www.npmjs.com/package/uuid) for blog IDs

---

## 📂 Project Structure

```bash
src/
├── app/
│ ├── page.tsx # Blog List Page
│ ├── blog/
│ │ ├── [id]/page.tsx # Blog Detail Page
│ │ └── new/page.tsx # Blog Wizard Page
│ └── layout.tsx # Root Layout with BlogProvider
│
├── components/
│ ├── BlogCard.tsx
│ ├── BlogFormField.tsx
│ └── Wizard/
│ ├── Step1Metadata.tsx
│ ├── Step2Summary.tsx
│ ├── Step3Content.tsx
│ ├── Step4Review.tsx
│ ├── Stepper.tsx
│ └── WizardNavigation.tsx
│
├── context/
│ └── BlogContext.tsx
│
├── lib/
│ └── storage.ts
│
└── types/
└── blog.ts
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/fe-test-boost.git
cd fe-test-boost
```

```bash
npm install
```

```bash
npm run dev
```
