# Toppin Web

A modern web application built with Next.js 14, React 18, and TypeScript. This project implements a responsive and user-friendly interface using Chakra UI components.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Library**: React 18
- **Component Library**: Chakra UI
- **Styling**: Emotion
- **Internationalization**: react-intl
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Layout**: React Masonry CSS

## Project Structure

```
src/
├── app/           # Next.js app router pages and layouts
│   └── (web)/     # Web application routes
├── components/    # Reusable React components
│   └── layout/    # Layout-specific components
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── i18n/          # Internationalization configuration
│   ├── en.js      # English translations
│   ├── es.js      # Spanish translations
│   └── index.js   # i18n configuration
└── utils/         # Utility functions and helpers
```

## Getting Started

### Prerequisites

- Node.js (version specified in package.json)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Running in Production

```bash
npm run start
# or
yarn start
```

## Internationalization

The application supports multiple languages through react-intl:

- English (en)
- Spanish (es)

Language switching is handled through the `LocaleContext` and `LanguajeSelector` component.

## Docker Support

The project includes Docker configuration for containerized deployment:

- `Dockerfile`: Production build configuration
- `docker-compose.yml`: Container orchestration
- `nginx/`: Nginx configuration for serving the application

## CI/CD

The project uses GitLab CI/CD for automated deployment. Configuration can be found in `.gitlab-ci.yml`.

## Features

- Modern React with Next.js 14 App Router
- TypeScript for type safety
- Chakra UI for consistent design
- Internationalization support (English and Spanish)
- Responsive design
- Component-based architecture
- Cookie consent management
- Legal pages and documentation
- Docker containerization
- Automated deployment pipeline

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Intl Documentation](https://formatjs.io/docs/react-intl/)
