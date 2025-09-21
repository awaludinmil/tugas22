# 📊 Modern Dashboard App

A beautiful, responsive dashboard application built with Next.js, React, and Tailwind CSS. This project features a modern interface with analytics, settings, and comprehensive data visualization.

![Dashboard Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=Dashboard+Preview)

## ✨ Features

### 🎯 Core Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Real-time Analytics** - Interactive charts and data visualization
- **User Management** - Profile settings and preferences
- **Dark/Light Theme** - Customizable theme options
- **Mobile-First** - Optimized for mobile devices with collapsible sidebar

### 📱 Pages & Components

#### 📊 Overview Dashboard
- Key performance metrics with trend indicators
- Interactive revenue charts
- Recent activity feed
- Quick action buttons
- Statistics cards with real-time data

#### 📈 Analytics Page
- Period-based data filtering (24h, 7d, 30d, 90d)
- Comprehensive metrics dashboard
- Traffic visualization charts
- Device breakdown analytics
- Top pages performance table

#### ⚙️ Settings Page
- Profile information management
- Notification preferences (Email, Push, SMS)
- Privacy controls and data sharing options
- Theme, language, and timezone settings
- Interactive toggle switches and form controls

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/dashboard-app.git
   cd dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the dashboard.

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[React 19](https://reactjs.org/)** - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ESLint](https://eslint.org/)** - Code linting and formatting

## 📁 Project Structure

```
my-app/
├── src/
│   └── app/
│       ├── components/
│       │   ├── pages/
│       │   │   ├── Overview.tsx      # Main dashboard page
│       │   │   ├── Analytics.tsx     # Analytics and metrics
│       │   │   └── Settings.tsx      # User settings
│       │   ├── Dashboard.tsx         # Main dashboard layout
│       │   ├── Sidebar.tsx           # Navigation sidebar
│       │   ├── Header.tsx            # Top header component
│       │   ├── StatsCard.tsx         # Reusable stats cards
│       │   ├── Chart.tsx             # Data visualization
│       │   └── RecentActivity.tsx    # Activity feed
│       ├── main.tsx                  # Main app component
│       ├── page.tsx                  # Home page
│       ├── layout.tsx                # Root layout
│       └── globals.css               # Global styles
├── public/                           # Static assets
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
└── README.md                         # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray tones for backgrounds and text
- **Accent**: Green for positive trends, Red for negative trends
- **Background**: Light gray (#F9FAFB) with white cards

### Typography
- **Font Family**: Geist Sans & Geist Mono
- **Responsive**: Scales appropriately across devices
- **Hierarchy**: Clear heading and body text distinction

### Components
- **Cards**: Clean white cards with subtle shadows
- **Buttons**: Rounded corners with hover effects
- **Forms**: Consistent input styling with focus states
- **Navigation**: Smooth transitions and active states

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:

- **Desktop** (1024px+) - Full sidebar navigation
- **Tablet** (768px - 1023px) - Collapsible sidebar
- **Mobile** (320px - 767px) - Mobile-first design with hamburger menu

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Alternative with yarn
yarn dev
yarn build
yarn start
yarn lint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- **Netlify** - Static site generation
- **Railway** - Full-stack deployment
- **DigitalOcean** - App platform
- **AWS** - Amplify or EC2

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Awaludin**
- Email: awaludin@cobacoba.com
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [React](https://reactjs.org/) team for the powerful UI library
- All contributors and the open-source community

## 📊 Screenshots

### Desktop View
![Desktop Dashboard](https://via.placeholder.com/1200x800/3B82F6/FFFFFF?text=Desktop+Dashboard)

### Mobile View
![Mobile Dashboard](https://via.placeholder.com/400x800/3B82F6/FFFFFF?text=Mobile+Dashboard)

### Analytics Page
![Analytics](https://via.placeholder.com/1200x600/10B981/FFFFFF?text=Analytics+Page)

---

⭐ **Star this repository if you found it helpful!**

📧 **Contact**: awaludin@cobacoba.com for any questions or suggestions.