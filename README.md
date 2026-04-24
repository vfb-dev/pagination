# ⚛️ Pagination

Reusable and lightweight **React pagination component** built for flexibility and clean UI integration.

Designed for learning, customization, and real-world usage in modern React apps.

## Screenshot

<div align="center">
  <p float="left">
    <img src="src/assets/images/screenshot.png" width="100%" />
  </p>
</div>

## Architecture

- **Frontend** → React
- **Styling** → Tailwind CSS + shadcn/ui
- **Component Design** → Reusable & composable
- **State Management** → useState / props-driven logic

## Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/vfb-dev/pagination.git
cd pagination
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm run dev
```

## Usage

```jsx
<PaginationMenu
  currentPage={currentPage}
  onPreviousPage={handlePrevious}
  onNextPage={handleNext}
  onSelectPage={handleSelect}
/>
```

## Author

vfb-dev — Crafting awesome React components
