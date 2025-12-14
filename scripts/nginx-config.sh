#!/bin/bash

# Nginx Configuration Script for www.redabenbo.se
# Following golden rules for script-driven changes

set -e

echo "🔧 Creating nginx configuration for www.redabenbo.se"

# Create nginx site configuration
sudo tee /etc/nginx/sites-available/redabenbo.se > /dev/null << 'EOF'
server {
    listen 80;
    server_name www.redabenbo.se redabenbo.se;
    
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Handle static assets
    location /static {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
EOF

# Enable the site
sudo ln -sf /etc/nginx/sites-available/redabenbo.se /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

echo "✅ Nginx configuration for www.redabenbo.se complete!"
echo "🌐 Site should now be accessible at www.redabenbo.se"