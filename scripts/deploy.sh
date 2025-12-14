#!/bin/bash

# Topaz Deployment Script
# This script follows the golden rules by being a scripted change operation

set -e

echo "🔍 Starting Topaz deployment to www.redabenbo.se"
echo "Following golden rules - script-driven deployment"

# Build the frontend
echo "📦 Building frontend..."
cd /home/reda/development/topaz/frontend
npm run build

# Create the canonical build output in frontend/dist
echo "🔄 Moving build output to canonical location..."
if [ -d "dist" ]; then
    rm -rf dist
fi
mv build dist

echo "✅ Build complete at frontend/dist"
echo "📂 Build contents:"
ls -la dist/

# Copy to web server directory
# Note: This assumes standard web server directory structure
# Adjust the target path based on actual server configuration
TARGET_DIR="/var/www/html"

if [ -d "$TARGET_DIR" ]; then
    echo "🚀 Deploying to $TARGET_DIR"
    sudo cp -r dist/* $TARGET_DIR/
    
    # Set proper permissions
    sudo chown -R www-data:www-data $TARGET_DIR
    sudo chmod -R 755 $TARGET_DIR
    
    echo "✅ Deployment complete!"
    echo "🌐 Site should be available at www.redabenbo.se"
else
    echo "⚠️  Target directory $TARGET_DIR not found"
    echo "📁 Available options for manual deployment:"
    echo "   - Copy contents of frontend/dist to your web server"
    echo "   - Or set up alternative deployment method"
fi

echo "🎉 Topaz IR site deployment script completed"