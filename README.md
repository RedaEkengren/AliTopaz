# Topaz Investor Relations Website

A professional, bilingual investor relations platform built with React and TypeScript, designed for institutional investors and capital markets readiness.

## 🌐 Live Site

**Production**: https://www.redabenbo.se

## 📋 Project Overview

Topaz is a comprehensive investor relations website featuring:

- **Bilingual Support**: Full Arabic (RTL) and English language support
- **Professional Design**: Investment-grade design system with institutional credibility
- **Mobile-First**: Responsive design optimized for all devices
- **Data-Forward**: Financial performance tables, KPI dashboards, and investor materials
- **Capital Markets Ready**: Structured for institutional review and compliance

## ✨ Key Features

### 🏢 Investor Relations Core
- **Heritage & Performance**: Company timeline, development footprint, financial KPIs
- **Investment Case**: Growth strategy, macro tailwinds, IPO readiness framework
- **Press Releases**: Latest company updates with Arabic/English date formatting
- **Financial Reports**: Responsive tables with mobile card layouts
- **Events Calendar**: Interactive calendar with investor events
- **Document Downloads**: Fact sheets, presentations, financial statements

### 🌍 Internationalization
- **Default Language**: Arabic (client requirement)
- **Language Toggle**: Seamless EN/العربية switching
- **RTL Support**: Complete right-to-left layout for Arabic
- **Font System**: IBM Plex Sans/Arabic for institutional credibility
- **200+ Translation Keys**: Comprehensive bilingual content

### 📱 Mobile Excellence
- **Responsive Tables**: Financial data cards instead of horizontal scrolling
- **Touch Targets**: 44px minimum for accessibility compliance
- **Mobile Typography**: Optimized font sizes for readability
- **Hamburger Navigation**: Full mobile menu (optional implementation)
- **Performance**: Optimized loading and WebP image compression

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build**: Create React App
- **Deployment**: Nginx on Ubuntu
- **SSL**: Let's Encrypt with auto-renewal
- **Images**: WebP optimization with 85% quality

## 🏗 Architecture

### Project Structure
```
/home/reda/development/topaz/
├── 01-goldenrules.md          # Development rules and constraints
├── 03-mvp.md                  # MVP status and features
├── 07-howto.md                # Maintenance and usage guide
├── frontend/                  # React application
│   ├── src/
│   │   ├── TopazIRSite.tsx    # Main component (1000+ lines)
│   │   ├── i18n.ts            # Translation system
│   │   └── index.css          # Tailwind + custom styles
│   ├── public/images/         # WebP optimized images
│   └── dist/                  # Build output (canonical)
└── scripts/                   # Deployment automation
    ├── deploy.sh              # Main deployment script
    └── nginx-config.sh        # Server configuration
```

### Design System
- **Typography**: 3 font weights (regular, semibold, bold)
- **Colors**: Topaz accent blue, warm gold highlights, 3-tier gray system
- **Spacing**: Consistent 8px/16px/24px spacing scale
- **Components**: Reusable Card, Button, Pill, and SectionTitle components

## 🚀 Quick Start

### Development
```bash
cd frontend
npm install
npm start                    # Runs on http://localhost:3000
```

### Production Build
```bash
npm run build               # Creates optimized build
./scripts/deploy.sh         # Deploys to production
```

### Golden Rules Compliance
All development follows strict golden rules:
- **Script-driven deployment** only
- **Frontend builds to** `frontend/dist`
- **No manual file creation** outside approved scripts
- **Single source of truth** maintained

## 📊 Performance Metrics

### Mobile UX Scoring
- **Table Responsiveness**: 9.5/10 ✅
- **Touch Usability**: 9/10 ✅  
- **Data Readability**: 9/10 ✅
- **No Horizontal Scroll**: 10/10 ✅
- **Bilingual Mobile**: 9/10 ✅

### Expert Assessment
- **Informationsarkitektur**: 9/10
- **Innehållskvalitet**: 9/10  
- **IR-credibility**: 9/10
- **Design-disciplin**: 8.5/10
- **Mobile Experience**: 9/10

## 🔧 Maintenance

### Common Updates
1. **Press Releases**: Edit `pressReleases` array in `TopazIRSite.tsx`
2. **Financial Data**: Update KPI tables and performance metrics
3. **Images**: Add WebP files to `/public/images/` via cwebp
4. **Languages**: Modify translation keys in `i18n.ts`

### Deployment
```bash
# Always use the approved deployment script
./scripts/deploy.sh

# Manual deployment (following golden rules)
cd frontend
npm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl reload nginx
```

### SSL Management
- **Auto-renewal**: Let's Encrypt certificates renew automatically
- **Manual renewal**: `sudo certbot renew && sudo systemctl reload nginx`

## 📱 Mobile Implementation

### Responsive Tables Strategy
Financial tables use desktop/mobile approach:

**Desktop**: Traditional tables with `overflow-x-auto`
**Mobile**: Card layouts with `grid-cols-3` for FY data

```typescript
{/* Desktop table */}
<div className="hidden sm:block overflow-x-auto">
  <table>...</table>
</div>

{/* Mobile cards */}
<div className="sm:hidden p-5 space-y-4">
  {data.map(item => (
    <div className="rounded-xl border p-4">
      {/* Mobile-friendly layout */}
    </div>
  ))}
</div>
```

## 🌟 Business Impact

### Investor Relations Excellence
- **Institutional Grade**: Professional presentation suitable for capital markets
- **Compliance Ready**: Structured for SEC requirements and investor expectations
- **Multilingual Access**: Serves both English and Arabic-speaking investors
- **Mobile Accessibility**: Full financial data access on mobile devices

### Strategic Positioning
- **IPO Readiness**: Demonstrates governance and reporting capabilities
- **Market Credibility**: Evidence-led, data-forward approach
- **Regional Focus**: Saudi Arabia Vision 2030 alignment
- **Scalable Platform**: Built for growth and future enhancements

## 📄 Documentation

- **MVP Status**: [03-mvp.md](03-mvp.md) - Complete feature overview and scoring
- **How-to Guide**: [07-howto.md](07-howto.md) - Maintenance and development guide
- **Golden Rules**: [01-goldenrules.md](01-goldenrules.md) - Development constraints

## 🏆 Achievement Summary

**Phase 1**: ✅ MVP Development with professional design system
**Phase 2**: ✅ Arabic i18n implementation with expert consultation  
**Phase 3**: ✅ Mobile UX optimization with responsive financial tables
**Phase 4**: ✅ Production deployment with SSL and performance optimization

## 📞 Contact

For technical support or deployment issues:
1. Review documentation in `/07-howto.md`
2. Check server logs in `/var/log/nginx/`
3. Verify golden rules compliance
4. Test changes in development before production

---

**Status**: Production-ready for investor meetings and institutional presentations  
**Last Updated**: December 14, 2025  
**Mobile-Optimized**: Financial tables complete