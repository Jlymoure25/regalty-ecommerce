# regalty-ecommerce

Regalty-ecommerce website with React

## Getting Started

This is a React-based e-commerce application built with Vite.

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Jlymoure25/regalty-ecommerce.git
cd regalty-ecommerce
```

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the application for production:
```bash
npm run build
```

### Lint

Run ESLint to check code quality:
```bash
npm run lint
```

## Technology Stack

- React 19
- Vite 7
- ESLint for code quality

## Deployment

### Netlify Deployment

This project is configured for deployment on Netlify with the following setup:

**Automatic Deployment:**
1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect the `netlify.toml` configuration
3. Build and deployment settings are pre-configured:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node.js version: 20

**Manual Deployment:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod
```

**Configuration Files:**
- `netlify.toml` - Main Netlify configuration with build settings, redirects, and headers
- `public/_redirects` - SPA routing support (automatically copied to dist during build)

**Features:**
- ✅ Single Page Application (SPA) routing support
- ✅ Security headers configured
- ✅ Static asset caching optimized
- ✅ Node.js 20 environment

## License

This project is private and not licensed for public use.
