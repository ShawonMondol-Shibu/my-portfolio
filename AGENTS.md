# AGENTS.md

## Commands
| Action | Command |
|--------|---------|
| Dev server | `bun run dev` (Next.js 16 + Turbopack) |
| Build (TS check + prod) | `bun run build` |
| Lint | `bun run lint` |

No tests configured — only lint and build verify correctness.

## Stack
- **Next.js 16** (App Router), **React 19**, **TypeScript** (strict)
- **Tailwind CSS v4** (`@import "tailwindcss"` + `@theme inline` for token mapping)
- **shadcn/ui** (New York style, v4 with `data-slot` attributes)
- **next-themes** — dark-first, `attribute="class"`, `defaultTheme="dark"`, `enableSystem`
- **bun** package manager
- Icons: `lucide-react` (primary) + `react-icons` (Fa* brand icons)
- Fonts: Inter (`--font-inter`, body) via CSS, Playfair Display (`--font-playfair`, headings) via `h1,h2,h3,h4` in globals.css

## Architecture
- Single-page portfolio — all sections in `components/layout/`, composed in `app/page.tsx` (client component with mount guard)
- Entrypoint: `app/layout.tsx` — wraps `<ThemeProvider>`, fonts, `<CustomCursor>`
- Colors in oklch: `:root` = light theme, `.dark` = dark theme
- Custom animations and `.animate-on-scroll` (IntersectionObserver) in `app/globals.css`
- `public/images/` — profile/logo/project screenshots

## Critical shadcn rules (enforced by `.agents/skills/shadcn/rules/`)
- **No `space-x-*` / `space-y-*`** → use `flex flex-col gap-*` / `flex gap-*`
- **No `w-* h-*` on matching pairs** → use `size-*`
- **Icons in `<Button>`** → add `data-icon="inline-start"` or `"inline-end"`, no sizing classes
- **Conditional classes** → use `cn()` from `@/lib/utils`, not template literals
- **Loading placeholders** → use `<Skeleton>` from `@/components/ui/skeleton`, not custom divs
- **Status indicators** → use `<Badge>`, not custom styled spans with raw colors
- **No raw Tailwind colors** — use semantic tokens (`bg-primary`, `text-muted-foreground`, etc.)

## Important details
- Build output: static site (`next build` produces static HTML)
- GitHub Projects fetches client-side from `api.github.com/users/ShawonMondol-Shibu/repos` — no env vars
- Contact form uses Formspree (stub URL in code, needs real ID)
- CustomCursor only activates on non-touch devices (checks `matchMedia("(pointer:fine)"`)
- Scroll-reveal uses manual IntersectionObserver in page.tsx (adds `.visible` class)
- No `.env` files committed — gitignored
