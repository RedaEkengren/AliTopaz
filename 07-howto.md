# How to Use and Maintain the Topaz Investor Relations Website

This guide explains how to use, update, edit, and maintain the Topaz IR website deployed at https://www.redabenbo.se

## Prerequisites

- Node.js and npm installed
- Access to the server with sudo privileges
- Understanding of React and TypeScript
- Familiarity with the golden rules in `01-goldenrules.md`

## Development Workflow

### 1. Making Content Changes

To update the investor relations content:

```bash
# Navigate to the project
cd /home/reda/development/topaz

# Edit the main component
nano frontend/src/TopazIRSite.tsx

# Common changes:
# - Update press releases in the pressReleases array
# - Modify job listings in the jobs array  
# - Add/change events in the events array
# - Update company data in the COMPANY constant
# - Modify financial KPIs in the tables
```

### 2. Adding New Images

To add or replace images:

```bash
# Add images to the public directory
cp new-image.jpg frontend/public/images/

# Convert to WebP for optimization
cwebp -q 85 frontend/public/images/new-image.jpg -o frontend/public/images/new-image.webp

# Update the React component to use the new image
nano frontend/src/TopazIRSite.tsx
```

### 3. Building and Testing

Always test changes locally before deployment:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (if needed)
npm install

# Start development server
npm start
# Opens http://localhost:3000

# Build for production
npm run build
# Creates optimized files in frontend/dist/
```

### 4. Deployment Process

**IMPORTANT: Always follow the golden rules - use scripts for all deployments**

```bash
# Deploy using the approved script
./scripts/deploy.sh

# Or manually (following golden rules):
cd /home/reda/development/topaz/frontend
npm run build
sudo cp -r dist/* /var/www/html/
sudo chown -R www-data:www-data /var/www/html/
sudo systemctl reload nginx
```

## Common Updates

### Updating Press Releases

1. Edit `frontend/src/TopazIRSite.tsx`
2. Find the `pressReleases` array
3. Add new releases at the top:

```typescript
const pressReleases: PressRelease[] = [
  {
    id: "pr-004",
    date: "2025-12-15", // YYYY-MM-DD format
    title: "New press release title",
    summary: "Brief summary of the announcement",
    href: "#", // Link to full release
  },
  // ... existing releases
];
```

### Updating Job Listings

1. Edit the `jobs` array in `TopazIRSite.tsx`
2. Add new positions or remove filled ones:

```typescript
const jobs: Job[] = [
  {
    id: "job-004",
    title: "New Position Title",
    location: "City",
    type: "Full-time",
    href: "#", // Link to job application
  },
  // ... existing jobs
];
```

### Updating Company KPIs

1. Find the KPI sections in `TopazIRSite.tsx`
2. Update financial data in the tables
3. Modify the quick KPI strip under the hero section

### Adding New Events

1. Update the `events` array
2. Use ISO date format (YYYY-MM-DD)
3. The calendar widget will automatically display them

## SSL Certificate Management

The site uses Let's Encrypt SSL certificates that auto-renew. To manually renew:

```bash
sudo certbot renew
sudo systemctl reload nginx
```

## Nginx Configuration

The web server configuration is managed by script:

```bash
# To reconfigure nginx (if needed)
./scripts/nginx-config.sh
```

Manual nginx commands:
```bash
# Test configuration
sudo nginx -t

# Reload configuration
sudo systemctl reload nginx

# Check status
sudo systemctl status nginx
```

## Backup and Version Control

### Important Files to Backup
- `frontend/src/TopazIRSite.tsx` - Main component
- `frontend/package.json` - Dependencies  
- `scripts/*.sh` - Deployment scripts
- `/etc/nginx/sites-available/redabenbo.se` - Web server config

### Version Control Workflow
```bash
# Add changes
git add .

# Commit with descriptive message
git commit -m "Update Q4 financial results and add new press release"

# Push to repository (if configured)
git push origin main
```

## Troubleshooting

### Site Not Loading
1. Check nginx status: `sudo systemctl status nginx`
2. Check SSL certificate: `sudo certbot certificates`
3. Verify files in `/var/www/html/`
4. Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`

### Build Errors
1. Check Node.js version: `node --version`
2. Clear npm cache: `npm cache clean --force`
3. Delete node_modules: `rm -rf node_modules && npm install`
4. Check for TypeScript errors in the console

### Image Not Showing
1. Verify image exists in `/var/www/html/images/`
2. Check file permissions: `ls -la /var/www/html/images/`
3. Ensure WebP format is used
4. Verify correct path in React component

## Performance Optimization

### Image Optimization
- Always convert images to WebP format
- Use quality setting 85 for good balance
- Compress large images before conversion

### Caching
- Static assets are cached for 1 year (configured in nginx)
- Update filenames when making significant changes

### Monitoring
- Monitor site performance at https://www.redabenbo.se
- Check Google PageSpeed Insights regularly
- Monitor SSL certificate expiration

## Security Best Practices

- Keep dependencies updated: `npm audit && npm update`
- Monitor for security vulnerabilities: `npm audit`
- Ensure all commits are reviewed
- Never commit sensitive data or passwords
- Keep server packages updated: `sudo apt update && sudo apt upgrade`

## Contact and Support

For technical issues:
1. Check this documentation first
2. Review error logs in `/var/log/nginx/`
3. Verify compliance with golden rules
4. Test changes in development before production deployment

Remember: All changes must follow the golden rules defined in `01-goldenrules.md` - use scripts for all state-changing operations.

## Design System Guidelines (Dec 14, 2025)

### Typography Standards
When updating content, use only these font-weights:
- **Regular text**: Default weight for body text
- **Emphasis**: `font-semibold` (600) for labels, eyebrows  
- **Headlines**: `font-bold` (700) for titles, important numbers

### Color System
- **Text Colors**: Use CSS variables `--gray-light`, `--gray-medium`, `--gray-dark`
- **Brand Accent**: `--topaz-accent` for primary branding
- **Gold Highlights**: `--topaz-gold` for important KPIs and milestones
- **Avoid**: Multiple slate- variations (use the 3 defined grays only)

### Spacing System
- **Small gaps**: `mt-4` (16px) 
- **Medium gaps**: `mt-6` (24px)
- **Large gaps**: `mt-8` (32px) for sections
- **Avoid**: Random spacing like `mt-2`, `mt-3`, `mt-5`

### Button Hierarchy
- **Primary Buttons**: ONLY for Downloads and Contact IR
- **Secondary Buttons**: All other navigation and actions
- **Never**: Use Primary for internal navigation

### Image Requirements
All images must be:
- **Format**: WebP for optimization
- **Quality**: 85% compression via `cwebp -q 85`
- **Naming**: Descriptive names like `hero-property.webp`
- **Sizing**: Consistent heights in hero sections (h-32)

**Design System Updated**: December 14, 2025