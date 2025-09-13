# St. Philomena's School Bellary - Official Website

A comprehensive, modern website for St. Philomena's School Bellary, built with Next.js 15 and TypeScript. The website features a clean, responsive design with complete information about the school's academics, admissions, facilities, and community.

## 🌟 Features

- **Modern Design**: Clean, professional layout with consistent branding
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Proper meta tags, structured data, and SEO best practices
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full type safety and better developer experience
- **Static Export**: Optimized for GitHub Pages deployment

## 📱 Website Sections

### Main Pages
- **Home**: Welcome page with school highlights and quick navigation
- **About Us**: Mission, vision, history, leadership team, and campus information
- **Academics**: Programs for Nursery, Grades 1-10, and PUC
- **Admissions**: Application process, requirements, and FAQ
- **Student Life**: Activities, events, achievements, and traditions
- **Community**: News, gallery, alumni network, and careers
- **Contact**: Contact information, campus location, and inquiry form

### Key Features
- **Interactive Navigation**: Smooth sidebar navigation with categorized menus
- **Contact Forms**: Multiple contact forms for inquiries and applications
- **Gallery Sections**: Photo and video galleries for school events
- **News & Updates**: Latest school news and announcements
- **Alumni Network**: Connect with former students and success stories
- **Career Opportunities**: Job listings and application portal

## 🚀 Live Website

The website is live at: **https://bhavinjoyp.github.io/stphilo_website/**

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **Build**: Static export for optimal performance

## 📁 Project Structure

```
st-philomenas-school/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us section
│   ├── admissions/        # Admissions pages
│   ├── community/         # Community pages
│   ├── contact/           # Contact page
│   ├── student-life/      # Student Life section
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── Header.tsx        # Site header
│   ├── Footer.tsx        # Site footer
│   └── Sidebar.tsx       # Navigation sidebar
├── data/                 # Static data files
├── public/               # Static assets
└── styles/               # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bhavinjoyp/stphilo_website.git
cd stphilo_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files
- `npm run deploy` - Build and prepare for deployment

## 🌐 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow:

1. **Automatic Deployment**: Every push to `main` branch triggers deployment
2. **Static Export**: Next.js builds and exports static files
3. **GitHub Pages**: Deployed using modern Actions workflow
4. **Custom Domain**: Accessible at the GitHub Pages URL

### Deployment Status
✅ **Updated July 19, 2025**: GitHub Pages deployment is now working correctly with modern workflow including YouTube link updates

### Manual Deployment

To deploy manually:

```bash
npm run build
npm run export
git checkout gh-pages
# Copy out/* to root and commit
git push origin gh-pages
```

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Static Generation**: All pages pre-rendered for fast loading
- **Optimized Images**: Responsive images with proper sizing
- **Minimal JavaScript**: Only necessary client-side code
- **Fast Navigation**: Instant page transitions

## 🎨 Design System

### Colors
- **Primary**: #A6192E (School Red)
- **Secondary**: #F8F9FA (Light Gray)
- **Accent**: #E4405F (Instagram Pink)
- **Text**: #2D3748 (Dark Gray)

### Typography
- **Primary Font**: Inter (System font stack)
- **Headings**: Bold, uppercase for emphasis
- **Body**: Regular weight, optimized for readability

### Components
- **Buttons**: Primary, secondary, and tertiary variants
- **Cards**: Consistent padding and hover effects
- **Forms**: Accessible with proper validation
- **Navigation**: Responsive sidebar with smooth animations

## 📱 Mobile Optimization

- **Responsive Design**: Works on all screen sizes
- **Touch-Friendly**: Proper touch targets and gestures
- **Fast Loading**: Optimized for mobile networks
- **Accessible**: WCAG 2.1 AA compliant

## 🔧 Configuration

### Environment Variables
```bash
NODE_ENV=production  # For production builds
```

### Next.js Configuration
- **Static Export**: Enabled for GitHub Pages
- **Image Optimization**: Disabled for static hosting
- **Base Path**: Set to repository name for GitHub Pages
- **Trailing Slash**: Enabled for compatibility

## 📈 Analytics & SEO

- **Meta Tags**: Complete Open Graph and Twitter Cards
- **Structured Data**: Schema.org markup for better search results
- **Sitemap**: Auto-generated sitemap for search engines
- **Performance**: Core Web Vitals optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m "Add new feature"`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For any questions or support:
- **Email**: bhavinjoyp@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/bhavinjoyp/stphilo_website/issues)

## 🏫 About St. Philomena's School Bellary

St. Philomena's School Bellary is a prestigious educational institution known for its academic excellence, character development, and holistic education approach. The school has been serving the Bellary community for decades, nurturing young minds and preparing them for successful futures.

---

**Built with ❤️ for St. Philomena's School Bellary**

*Last updated: July 19, 2025 - YouTube links updated and deployment fixed*