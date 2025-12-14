# Topaz Website - Image Requirements & Specifications

## 🎨 **Current Status: AWAITING HIGH-QUALITY IMAGES**

The website currently uses professional placeholders for pitch demonstrations. All placeholders are designed to show exactly what type of images are needed and where they will be placed.

**⚠️ ACTION REQUIRED**: Please provide image links for the final implementation.

---

## 📸 **Required Images with Specifications**

### **1. Saudi Skyline Hero Image** 🏙️
**Location**: Full-width visual break after heritage section
**Dimensions**: Wide panoramic (suggested 1920x400px minimum)
**Format**: Should be delivered as high-res JPEG, will be converted to WebP

**Content Requirements**:
- Riyadh or Jeddah modern skyline
- Shows urban development and Vision 2030 progress  
- Conveys scale, modernity, and growth potential
- Preferably shot during golden hour/sunset for dramatic effect
- Should include notable landmarks or new developments

**Visual Impact**: This is the primary "wow" image that breaks visual monotony

---

### **2. Enhanced Topaz Mining Image** 💎
**Location**: Heritage column in hero section (right side)
**Dimensions**: Square or portrait format (suggested 600x800px minimum)
**Format**: High-res JPEG → WebP conversion

**Content Requirements**:
- High-resolution topaz mining operation
- Shows precision, craftsmanship, and professional equipment
- Close-up of topaz crystals or mining process
- Should convey quality and attention to detail
- Professional, industrial aesthetic

**Visual Impact**: Supports heritage narrative with authentic mining imagery

---

### **3. Saudi Regional Development Map** 📍
**Location**: "Suggested Images" section  
**Dimensions**: Landscape format (suggested 800x500px minimum)
**Format**: High-res JPEG/PNG → WebP conversion

**Content Requirements**:
- Map of Saudi Arabia showing project locations
- Marked development sites across regions
- Clean, professional cartographic style
- Shows strategic geographic distribution
- May include city names and project markers

**Visual Impact**: Demonstrates regional reach and strategic positioning

---

## 🔧 **Technical Specifications**

### **Image Processing Pipeline**
1. **Receive**: High-resolution images via provided links
2. **Download**: Using wget to `/frontend/public/images/`
3. **Convert**: Using cwebp with quality 85 for optimal balance
4. **Deploy**: Automated deployment to production server
5. **Replace**: Swap placeholders with actual images in React component

### **File Naming Convention**
```bash
saudi-skyline-hero.webp       # Full-width skyline image
topaz-mining-enhanced.webp    # Heritage mining image  
saudi-regional-map.webp       # Development locations map
```

### **Code Integration Points**
```typescript
// Replace these placeholders in TopazIRSite.tsx:
// 1. Saudi Skyline Hero (line ~640-655)
// 2. Enhanced Mining Image (line ~371-382) 
// 3. Regional Map (line ~500-508)
```

---

## 📋 **Image Delivery Checklist**

When providing image links, please ensure:
- [ ] **High Resolution**: Minimum 1920px width for skyline, 600px for others
- [ ] **Professional Quality**: Sharp, well-lit, professional photography
- [ ] **Relevant Content**: Matches the content requirements above
- [ ] **Accessible URLs**: Direct links to image files (JPEG/PNG format)
- [ ] **Rights Cleared**: Appropriate usage rights for investor relations website

---

## 🚀 **Implementation Process**

1. **Receive Links**: You provide image URLs
2. **Download & Process**: Automated download and WebP conversion
3. **Integration**: Replace placeholders in React component  
4. **Build & Deploy**: Updated site deployed to https://www.redabenbo.se
5. **Verification**: Confirm images display correctly across devices

**Estimated Time**: 30 minutes from receiving links to live deployment

---

## 📝 **Notes for Image Provider**

- **Context**: These images will be used on an investor relations website
- **Tone**: Should convey professionalism, quality, and institutional credibility
- **Audience**: Potential investors, institutional stakeholders, media
- **Usage**: Website display optimized for both desktop and mobile viewing

**Current Placeholders**: https://www.redabenbo.se (shows exact placement and sizing)

**Ready to implement immediately upon receiving image links.**