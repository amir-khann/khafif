# Khafif - Food Website

A modern, SEO-friendly food website built with Next.js, featuring a beautiful UI and Arabic translation support.

## Features

- 🏠 **Home Page**: Hero section with mobile app download links, menu showcase, and location map
- 📋 **Menu Page**: Complete menu display with all items and descriptions
- 💼 **Careers Page**: Job listings with location and posting dates
- 📞 **Contact Page**: Contact form and sign-in form
- 🌐 **Arabic Translation**: Bilingual support (English/Arabic)
- 📱 **Responsive Design**: Mobile-first, works on all devices
- 🔍 **SEO Optimized**: Meta tags, semantic HTML, and proper structure
- 🎨 **Modern UI**: Beautiful design with theme colors from logo

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Move images to public directory:
```bash
# Images should be in the public folder or root directory
# The app will look for images in /public/ or root
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
khafif/
├── app/
│   ├── page.tsx          # Home page
│   ├── menu/
│   │   ├── page.tsx      # Menu page
│   │   └── layout.tsx    # Menu metadata
│   ├── careers/
│   │   ├── page.tsx      # Careers page
│   │   └── layout.tsx    # Careers metadata
│   ├── contact/
│   │   ├── page.tsx      # Contact page
│   │   └── layout.tsx    # Contact metadata
│   └── layout.tsx        # Root layout
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Footer.tsx        # Footer with WhatsApp
│   ├── HeroSection.tsx   # Hero section
│   ├── MenuSection.tsx   # Menu section
│   └── LocationsSection.tsx # Locations with map
├── styles/
│   └── globals.css       # Global styles
└── public/               # Static assets (images)
```

## Theme Colors

Based on the Khafif logo:
- **Primary Orange**: #E66733
- **Primary Yellow**: #FFD700
- **Primary Blue**: #007BFF

## Menu Items

1. Tastyliscious Popcorn
2. Tasty-Crunchy-Nachos
3. Freshly Baked Cookies
4. Delicious Ice Cream
5. Refreshing Slush
6. French Fries with Hot Sauce

## Contact Information

- **WhatsApp**: +966557116527
- **Location**: الريـاض الازدهار عثمان بن عفان 7, Saudi Arabia

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Next.js Image Optimization

## License

© 2024 Khafif. All rights reserved.

