# Birds of Malaiseville

A Next.js 15 website with Payload CMS integration.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router routes
│   │   ├── (frontend)/        # Frontend routes and pages
│   │   └── (payload)/         # Payload CMS admin routes
│   ├── components/            # Reusable React components
│   │   ├── common/           # Shared components
│   │   ├── layout/           # Layout components
│   │   └── ui/              # UI components
│   ├── lib/                  # Shared utilities and helpers
│   │   ├── hooks/           # Custom React hooks
│   │   └── utils/           # Utility functions
│   ├── styles/              # Global styles and theme
│   ├── payload/             # Payload CMS configuration
│   │   ├── blocks/          # Payload block components
│   │   ├── collections/     # Collection definitions
│   │   └── globals/         # Global definitions
│   └── types/               # TypeScript type definitions
```

## Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in the required values.

3. Run development server:

   ```bash
   pnpm dev
   ```

4. Access the site:
   - Frontend: http://localhost:3000
   - Payload CMS Admin: http://localhost:3000/admin

## Tech Stack

- Next.js 15 (App Router)
- Payload CMS 3.0
- TypeScript
- PNPM
- ESLint & Prettier

## Development Guidelines

1. **Components**: Place reusable components in `src/components/`
2. **Routes**: Use the App Router directory structure in `src/app/`
3. **CMS**: Payload configurations go in `src/payload/`
4. **Styling**: Global styles in `src/styles/`, component-specific styles alongside components

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

[Your License Here]
