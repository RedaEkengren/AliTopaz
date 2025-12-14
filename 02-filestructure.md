# Topaz Project File Structure

This document describes the current file structure of the Topaz investor relations website project, following the golden rules defined in 01-goldenrules.md.

## Project Root Structure

```
/home/reda/development/topaz/
├── 01-goldenrules.md          # Project rules and constraints
├── 02-filestructure.md        # This file - project structure documentation
├── 03-mvp.md                  # MVP requirements (empty)
├── 04-landingpage.md          # Original React component source
├── 05-clientwants.md          # Client requirements and image URLs
├── 06-domain.md               # Domain configuration (www.redabenbo.se)
├── 07-howto.md                # Usage instructions
├── 08-thisserver.md           # Server constraints  
├── 09-image-requirements.md   # Image specifications for final implementation
├── frontend/                  # Frontend React application
└── scripts/                   # Deployment and configuration scripts
```

## Frontend Directory (`/frontend`)

Following golden rules: Frontend builds to `frontend/dist`

```
frontend/
├── package.json              # React app dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── public/                  # Static assets
│   ├── index.html          # HTML template with Topaz branding
│   └── images/             # Optimized images
│       ├── logo.webp       # Topaz logo (WebP format)
│       ├── topaz-mining.webp # Topaz mining image
│       └── saudi-map.webp  # Saudi Arabia map
├── src/                    # React source code
│   ├── index.tsx          # Application entry point
│   ├── index.css          # Tailwind CSS imports
│   ├── App.tsx            # Main App component
│   └── TopazIRSite.tsx    # Complete investor relations site
├── dist/                  # Built application (canonical output)
│   ├── index.html
│   ├── static/
│   │   ├── js/            # Compiled JavaScript
│   │   └── css/           # Compiled CSS
│   └── images/            # Optimized images
└── node_modules/          # Dependencies
```

## Scripts Directory (`/scripts`)

Following golden rules: All state-changing operations via scripts

```
scripts/
├── deploy.sh              # Main deployment script
└── nginx-config.sh        # Nginx configuration script
```

## Deployment Target

```
/var/www/html/             # Web server document root
├── index.html            # Built React application
├── static/              # Compiled assets
│   ├── js/
│   └── css/
└── images/              # Optimized WebP images
```

## Key Files Used

### Active Files
- `frontend/src/TopazIRSite.tsx` - Main React component (935 lines)
- `frontend/package.json` - Project dependencies and build scripts
- `scripts/deploy.sh` - Deployment automation
- `scripts/nginx-config.sh` - Web server configuration

### Configuration Files  
- `frontend/tailwind.config.js` - CSS framework setup
- `frontend/tsconfig.json` - TypeScript compilation settings
- `/etc/nginx/sites-available/redabenbo.se` - Web server configuration

### Assets
- `frontend/public/images/*.webp` - Optimized images from client URLs
- `/etc/letsencrypt/live/www.redabenbo.se/` - SSL certificates

## Build Process

1. **Development**: Edit files in `frontend/src/`
2. **Build**: `npm run build` creates optimized files in `frontend/dist/`
3. **Deploy**: `scripts/deploy.sh` copies to `/var/www/html/`
4. **Serve**: Nginx serves HTTPS site at www.redabenbo.se

## Image Assets

All images converted to WebP format as requested:
- Original JPEGs/PNGs downloaded from client URLs
- Converted with `cwebp -q 85` for quality/size optimization
- Deployed to both `/frontend/public/images/` and `/var/www/html/images/`

## Latest Updates (Dec 14, 2025)

- ✅ **Final Images**: All high-quality images implemented and optimized
- ✅ **Design System**: Implemented professional typography and spacing system
- ✅ **Gold Accents**: Added warm accent colors for KPI highlighting
- ✅ **Button Hierarchy**: Fixed Primary/Secondary button logic for IR standards
- ✅ **Expert Polish**: Applied institutional design discipline throughout

## Compliance with Golden Rules

- ✅ Frontend builds to `frontend/dist` (not root dist)
- ✅ All changes via scripts (`deploy.sh`, `nginx-config.sh`)
- ✅ No manual file creation outside of approved scripts
- ✅ Single source of truth maintained
- ✅ Canonical structure followed