# Pre-deployment checklist

## Still to build
- [*] Route transitions — intro grid (first visit) + cursor wipe (navigation)
- [*] 404 not-found page
- [*] `.md` content files for all project entries
- [*] `.md` content files for all lab entries
- [*] Images for all project and lab entries (`public/images/...`)

## Polish & correctness
- [*] Meta tags — title, description, canonical
- [-] Open Graph tags (link previews on social/messaging)
- [*] Structured data (JSON-LD)
- [*] Sitemap
- [*] Aria labels audit
- [*] Heading hierarchy audit
- [*] Focus management during route transitions
- [*] Animations

## Pre-deployment checks
- [ ] `ng build` with no errors or warnings
- [*] Replace all placeholder `href="#"` links
- [*] Test form end to end via Formspree
- [*] Test on a real mobile device
- [ ] Set up custom domain on Vercel
- [ ] Confirm HTTPS is working

## Nice to have
- [*] `robots.txt`
- [*] Favicon + PWA manifest icons
- [*] `prefers-reduced-motion` support for animations
