# Copilot Coding Agent Instructions

## Repository Overview

This is **Regalty E-Commerce**, a React-based e-commerce web application built with Vite. The project aims to provide a modern, performant online shopping experience.

## Technology Stack

- **React 19**: UI framework for building the user interface
- **Vite 7**: Build tool and development server
- **ESLint**: Code quality and style checking
- **JavaScript (ES2020+)**: Primary programming language with JSX support

## Project Structure

```
regalty-ecommerce/
├── .github/              # GitHub configuration files
├── public/               # Static assets (images, icons, etc.)
├── src/                  # Source code
│   ├── assets/          # Application assets (images, styles, etc.)
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## Build & Test Instructions

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# Application will be available at http://localhost:5173
```

### Build for Production
```bash
npm run build
# Output will be in the dist/ directory
```

### Linting
```bash
npm run lint
# Run ESLint to check code quality
```

### Preview Production Build
```bash
npm run preview
```

## Coding Standards & Conventions

### JavaScript/JSX
- Use modern ES2020+ JavaScript syntax
- Prefer functional components with React Hooks over class components
- Use JSX for component templates
- Follow the existing ESLint configuration rules
- Variables matching pattern `^[A-Z_]` are allowed to be unused (as per ESLint config)

### Component Structure
- Place new components in the `src/` directory
- Keep components focused and single-purpose
- Use meaningful, descriptive component names in PascalCase
- Co-locate component-specific styles (e.g., `Component.jsx` with `Component.css`)

### Styling
- Use CSS files for component styling
- Follow existing class naming conventions
- Maintain responsive design principles
- Keep global styles in `index.css`
- Keep component-specific styles in separate CSS files

### File Organization
- Keep source files organized in the `src/` directory
- Static assets go in the `public/` directory
- Configuration files remain at the root level

### Code Quality
- Always run `npm run lint` before committing changes
- Ensure code builds successfully with `npm run build`
- Fix any ESLint errors or warnings
- Remove unused imports and variables
- Use meaningful variable and function names

## Scope for Copilot Tasks

### ✅ Safe for Copilot
- Adding new React components for UI features
- Updating existing components with new functionality
- Styling changes and CSS improvements
- Refactoring components for better readability
- Adding or updating documentation
- Code formatting and linting fixes
- Performance optimizations
- Accessibility improvements (WCAG compliance)
- Bug fixes in UI components

### ⚠️ Requires Careful Review
- State management changes
- Routing implementation (when added)
- API integration (when added)
- Form validation logic
- Cart and checkout functionality

### 🚫 Avoid Automated Changes
- Payment processing logic
- User authentication and authorization
- Sensitive data handling
- Security-critical features
- Third-party service integrations without proper documentation

## Development Guidelines

1. **Make Minimal Changes**: Focus on the specific task at hand. Avoid unnecessary refactoring.

2. **Test Your Changes**: 
   - Run `npm run dev` to verify the application works
   - Run `npm run build` to ensure production builds succeed
   - Run `npm run lint` to check code quality

3. **Maintain Consistency**: Follow the existing code style and patterns in the repository.

4. **Document Changes**: Update relevant comments or documentation when making significant changes.

5. **Responsive Design**: Ensure all UI changes work across different screen sizes.

6. **Accessibility**: Follow WCAG AA guidelines for new UI components.

## Common Tasks

### Adding a New Component
1. Create component file in `src/` (e.g., `src/ProductCard.jsx`)
2. Create corresponding CSS file if needed (e.g., `src/ProductCard.css`)
3. Import and use the component in the appropriate parent component
4. Run lint and build to verify

### Updating Styles
1. Locate the relevant CSS file
2. Make targeted changes to specific classes
3. Test in the browser to verify visual changes
4. Ensure responsive behavior is maintained

### Bug Fixes
1. Identify the bug in the specific component or file
2. Make minimal changes to fix the issue
3. Test the fix in development mode
4. Run lint to ensure code quality

## Notes

- This project uses Vite's fast HMR (Hot Module Replacement) for quick development iteration
- The application uses React 19 with the latest features
- ESLint is configured to enforce code quality standards
- The project is private and not licensed for public use

## Getting Help

If you encounter issues or need clarification:
- Check the README.md for basic setup instructions
- Review existing code patterns in the `src/` directory
- Consult React 19 documentation for React-specific questions
- Consult Vite documentation for build-related questions
