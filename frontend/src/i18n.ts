// Simple i18n system for Topaz IR site
// English and Arabic translations

export type Language = 'en' | 'ar';

export interface Translations {
  // Navigation
  heritage: string;
  performance: string;
  investment: string;
  downloads: string;
  contactIR: string;
  
  // Common
  learnMore: string;
  readMore: string;
  apply: string;
  viewAll: string;
  sendMessage: string;
  
  // Hero Section Main
  heroTagline: string;
  heroTitle: string;
  heroDescription: string;

  // Hero Cards
  heroHeritageTitle: string;
  heroHeritageSubtitle: string;
  heroHeritageDescription: string;
  
  heroPropertyTitle: string;
  heroPropertySubtitle: string;
  heroPropertyDescription: string;
  heroPropertyLink1: string;
  heroPropertyLink1Desc: string;
  heroPropertyLink2: string;
  heroPropertyLink2Desc: string;
  heroPropertyCTA: string;
  
  heroFutureTitle: string;
  heroFutureSubtitle: string;
  heroFutureDescription: string;
  focusAreas: string;
  focusArea1: string;
  focusArea2: string;
  focusArea3: string;

  // KPI Labels
  founded: string;
  employees: string;
  aum: string;
  valuation: string;
  completed: string;
  underDevelopment: string;
  completedProjects: string;

  // Section 1: Heritage & Performance
  section1Eyebrow: string;
  section1Title: string;
  section1Subtitle: string;
  
  overviewTitle: string;
  overviewHeading: string;
  overviewPara1: string;
  overviewPara2: string;
  overviewPara3: string;
  
  regionalTitle: string;
  regionalPoint1: string;
  regionalPoint2: string;
  regionalPoint3: string;
  regionalPoint4: string;
  
  footprintTitle: string;
  metric: string;
  valueExample: string;
  residentialUnits: string;
  commercialUnits: string;
  hospitalityKeys: string;
  builtUpArea: string;
  managedArea: string;
  
  financeTitle: string;
  kpi: string;
  revenue: string;
  ebitdaMargin: string;
  netMargin: string;
  avgIRR: string;
  figuresNote: string;
  
  evolutionTitle: string;
  phase1Title: string;
  phase1Period: string;
  phase1Desc1: string;
  phase1Desc2: string;
  phase2Title: string;
  phase2Period: string;
  phase2Desc1: string;
  phase2Desc2: string;
  phase3Title: string;
  phase3Period: string;
  phase3Desc1: string;
  phase3Desc2: string;
  phase3Desc3: string;
  phase4Title: string;
  phase4Period: string;
  phase4Desc1: string;
  phase4Desc2: string;
  phase4Desc3: string;
  milestone: string;
  
  regionalPresence: string;
  strategicDevelopment: string;
  vision2030: string;

  // Section 3: Future & Investment Case
  section3Eyebrow: string;
  section3Title: string;
  section3Subtitle: string;
  
  forwardTitle: string;
  forwardHeading: string;
  forwardPara1: string;
  forwardPara2: string;
  forwardPara3: string;
  
  investmentTitle: string;
  investmentHeading: string;
  highlight1Title: string;
  highlight1Desc1: string;
  highlight1Desc2: string;
  highlight1Desc3: string;
  highlight2Title: string;
  highlight2Point1: string;
  highlight2Point2: string;
  highlight2Point3: string;
  highlight2Point4: string;
  highlight3Title: string;
  highlight3Desc1: string;
  highlight3Desc2: string;
  highlight4Title: string;
  highlight4Desc1: string;
  highlight4Desc2: string;
  highlight4Desc3: string;
  
  macroTitle: string;
  macroHeading: string;
  macro1: string;
  macro2: string;
  macro3: string;
  macro4: string;
  macro5: string;
  macro6: string;
  marketContext: string;
  marketPoint1: string;
  marketPoint2: string;
  marketPoint3: string;
  
  ipoTitle: string;
  ipoHeading: string;
  ipoPrep: string;
  ipoPrep1: string;
  ipoPrep2: string;
  ipoPrep3: string;
  ipoPrep4: string;
  strategicPriorities: string;
  priority1: string;
  priority2: string;
  priority3: string;
  priority4: string;
  
  disclaimer: string;

  // Press Releases
  pressReleases: string;
  pressDesc: string;
  pr1Title: string;
  pr1Summary: string;
  pr2Title: string;
  pr2Summary: string;
  pr3Title: string;
  pr3Summary: string;
  
  // Downloads
  downloadsTitle: string;
  downloadsDesc: string;
  factSheet: string;
  factSheetDesc: string;
  presentation: string;
  presentationDesc: string;
  financials: string;
  financialsDesc: string;
  
  // Careers
  careers: string;
  careersDesc: string;
  job1: string;
  job2: string;
  job3: string;
  location1: string;
  location2: string;
  location3: string;
  fullTime: string;
  
  // Events
  events: string;
  eventsDesc: string;
  prev: string;
  next: string;
  eventScheduled: string;
  upcomingIn: string;
  noEvents: string;
  eventList: string;
  event1: string;
  event1Location: string;
  event2: string;
  event2Location: string;
  event3: string;
  
  // Footer
  whoWeAre: string;
  companyDesc: string;
  dataForward: string;
  institutionalTone: string;
  capitalReadiness: string;
  
  contact: string;
  investorRelations: string;
  email: string;
  phone: string;
  
  ourOffices: string;
  riyadh: string;
  riyadhAddress: string;
  jeddah: string;
  jeddahAddress: string;
  easternProvince: string;
  easternAddress: string;
  
  quickLinks: string;
  copyright: string;
  disclaimers: string;
  privacyPolicy: string;
  terms: string;
  forwardStatements: string;
  
  // Alt text
  logoAlt: string;
  miningAlt: string;
  propertyAlt: string;
  futureAlt: string;
  skylineAlt: string;
  mapAlt: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    heritage: 'Heritage',
    performance: 'Performance', 
    investment: 'Investment',
    downloads: 'Downloads',
    contactIR: 'Contact IR',
    
    // Common
    learnMore: 'Learn More',
    readMore: 'Read more',
    apply: 'Apply',
    viewAll: 'View all jobs',
    sendMessage: 'Send a message',

    // Hero Section Main
    heroTagline: 'Institutional • Data-forward • Capital readiness',
    heroTitle: 'Topaz Investor Relations',
    heroDescription: 'Evidence-led updates on heritage, performance, and the forward roadmap—structured for institutional review.',

    // Hero Cards
    heroHeritageTitle: 'Heritage',
    heroHeritageSubtitle: 'Built on delivery since 2003',
    heroHeritageDescription: 'Over two decades of successful project completion across the Kingdom, establishing Topaz as a trusted partner in Saudi Arabia\'s development journey.',
    
    heroPropertyTitle: 'Property',
    heroPropertySubtitle: 'Strategic real estate investments',
    heroPropertyDescription: 'Premium developments aligned with Vision 2030, focusing on high-growth corridors and emerging economic zones throughout Saudi Arabia.',
    heroPropertyLink1: 'View available properties',
    heroPropertyLink1Desc: 'Listings, brochures, and pricing guidance',
    heroPropertyLink2: 'Buying checklist',
    heroPropertyLink2Desc: 'Steps, documents, and timelines',
    heroPropertyCTA: 'Start here',
    
    heroFutureTitle: 'Future', 
    heroFutureSubtitle: 'Vision 2030 alignment',
    heroFutureDescription: 'Positioned at the forefront of Saudi Arabia\'s transformation, with projects directly supporting the Kingdom\'s diversification and modernization goals.',
    focusAreas: 'Focus areas',
    focusArea1: '• Scalable reporting and controls',
    focusArea2: '• Portfolio and pipeline aligned with Vision 2030',
    focusArea3: '• Disciplined capital allocation',

    // KPI Labels
    founded: 'Founded',
    employees: 'Employees',
    aum: 'AUM',
    valuation: 'Valuation (Internal)',
    completed: 'Completed',
    underDevelopment: 'Under Development',
    completedProjects: 'Completed Projects',

    // Section 1: Heritage & Performance
    section1Eyebrow: 'SECTION 1',
    section1Title: 'Our Heritage & Performance',
    section1Subtitle: 'Demonstrate credibility, scale, discipline, and consistency. This section anchors investor confidence by combining narrative history with hard performance data.',
    
    overviewTitle: '1.1 Overview Narrative',
    overviewHeading: 'Building Value Across Saudi Arabia Since 2008',
    overviewPara1: 'Founded in 2008, Topaz has grown from a single-project developer into a fully integrated real estate platform operating across residential, commercial, and mixed-use assets.',
    overviewPara2: 'Over the past decade and a half, the company has delivered landmark developments that align with Saudi Arabia\'s urbanization goals, while maintaining strong capital discipline and operational efficiency.',
    overviewPara3: 'Today, Topaz manages a diversified portfolio across multiple cities, serving thousands of residents and commercial tenants, and generating stable recurring revenue supported by high-quality assets.',
    
    regionalTitle: '1.4 Regional Coverage',
    regionalPoint1: '• Strategic presence across Saudi Arabia\'s major economic centers',
    regionalPoint2: '• Development portfolio spanning Riyadh, Jeddah, and Eastern Province',
    regionalPoint3: '• Urban growth aligned with Vision 2030 initiatives',
    regionalPoint4: '• Demonstrated execution capability across diverse markets',
    
    footprintTitle: '1.2 Development Footprint',
    metric: 'Metric',
    valueExample: 'Value (Example)',
    residentialUnits: 'Residential Units Delivered',
    commercialUnits: 'Commercial Units Delivered',
    hospitalityKeys: 'Hospitality Keys',
    builtUpArea: 'Total Built-Up Area Developed',
    managedArea: 'Total Area Currently Managed',
    
    financeTitle: '1.2 Financial Performance Snapshot',
    kpi: 'KPI',
    revenue: 'Revenue (SAR)',
    ebitdaMargin: 'EBITDA Margin',
    netMargin: 'Net Profit Margin',
    avgIRR: 'Average Project IRR',
    figuresNote: 'All figures illustrative.',
    
    evolutionTitle: '1.3 Evolution Over Time',
    phase1Title: 'Foundation Phase',
    phase1Period: '2008–2012',
    phase1Desc1: 'First residential developments',
    phase1Desc2: 'Privately funded, founder-led capital structure',
    phase2Title: 'Expansion Phase',
    phase2Period: '2013–2017',
    phase2Desc1: 'Entry into mixed-use and commercial assets',
    phase2Desc2: 'Strategic partnerships with local contractors and financiers',
    phase3Title: 'Institutionalization',
    phase3Period: '2018–2022',
    phase3Desc1: 'Governance upgrades',
    phase3Desc2: 'Portfolio diversification',
    phase3Desc3: 'Recurring revenue introduced',
    phase4Title: 'Scale & Capital Readiness',
    phase4Period: '2023–Today',
    phase4Desc1: 'Strong balance sheet',
    phase4Desc2: 'Pipeline aligned with Vision 2030',
    phase4Desc3: 'IPO-grade reporting and controls',
    milestone: 'Milestone',
    
    regionalPresence: 'Regional Presence',
    strategicDevelopment: 'Strategic development across Saudi Arabia',
    vision2030: 'Vision 2030',

    // Section 3: Future & Investment Case
    section3Eyebrow: 'SECTION 3',
    section3Title: 'Our Future & Investment Case',
    section3Subtitle: 'Position the company as a future-listed, institutionally credible platform with strong fundamentals, favorable macro tailwinds, and a disciplined growth strategy.',
    
    forwardTitle: '3.1 Forward-Looking Narrative',
    forwardHeading: 'Positioned for Long-Term Growth',
    forwardPara1: 'Topaz is entering its next phase of growth, driven by a strong development pipeline, expanding recurring revenue streams, and structural tailwinds in the Saudi real estate market.',
    forwardPara2: 'With a proven execution track record and increasing operational scale, Topaz is preparing for broader capital market participation.',
    forwardPara3: 'Our strategy is centered on sustainable profitability, disciplined capital allocation, and alignment with national development priorities.',
    
    investmentTitle: '3.2 Investment Highlights',
    investmentHeading: 'Why Invest in Topaz',
    highlight1Title: 'Proven Profitability',
    highlight1Desc1: 'Consistent revenue growth over multiple cycles',
    highlight1Desc2: 'Strong EBITDA margins relative to peers',
    highlight1Desc3: 'High project-level returns',
    highlight2Title: 'Diversified Revenue Streams',
    highlight2Point1: 'Residential sales',
    highlight2Point2: 'Commercial leasing',
    highlight2Point3: 'Property management income',
    highlight2Point4: 'Hospitality and mixed-use exposure',
    highlight3Title: 'Strong Project Pipeline',
    highlight3Desc1: 'SAR 12+ billion GDV under development',
    highlight3Desc2: 'Balanced mix of pre-sold and income-generating assets',
    highlight4Title: 'Experienced Management Team',
    highlight4Desc1: 'Local market expertise',
    highlight4Desc2: 'Institutional governance mindset',
    highlight4Desc3: 'Long-term alignment with shareholders',
    
    macroTitle: '3.3 Saudi Arabia Macro Tailwinds',
    macroHeading: 'Structural Market Drivers',
    macro1: 'Vision 2030 Urban Development Programs',
    macro2: 'Population Growth & Urbanization',
    macro3: 'Housing Supply Gap in Key Cities',
    macro4: 'Mortgage Market Expansion',
    macro5: 'Foreign Ownership Liberalization',
    macro6: 'Government-Backed Financing Programs',
    marketContext: 'Illustrative Market Context',
    marketPoint1: 'Saudi real estate market projected CAGR: 6–8%',
    marketPoint2: 'Homeownership targets increasing nationally',
    marketPoint3: 'Government-led infrastructure spend supporting asset values',
    
    ipoTitle: '3.4 IPO Readiness & Forward Roadmap',
    ipoHeading: 'Capital Markets Preparation',
    ipoPrep: 'Capital Markets Preparation',
    ipoPrep1: 'IFRS-compliant financial reporting',
    ipoPrep2: 'Independent board committees',
    ipoPrep3: 'ESG framework under development',
    ipoPrep4: 'Scalable ERP and reporting systems',
    strategicPriorities: '3–5 Year Strategic Priorities',
    priority1: 'Grow recurring revenue to 45–50% of total revenue',
    priority2: 'Expand into two additional Tier-1 cities',
    priority3: 'Optimize capital structure ahead of listing',
    priority4: 'Selective asset recycling to enhance ROIC',
    
    disclaimer: 'For an investor relations audience, both sections should be data-forward, not marketing-heavy; use consistent KPI definitions; allow downloadable fact sheets and presentations; and clearly separate historical facts from forward-looking statements.',

    // Press Releases
    pressReleases: 'Press releases',
    pressDesc: 'Latest company updates (placeholders).',
    pr1Title: 'Topaz reports continued margin expansion and strong recurring revenue growth',
    pr1Summary: 'Operational discipline and portfolio quality supported stable cash generation across residential and commercial assets.',
    pr2Title: 'Topaz announces new mixed-use development aligned with Vision 2030 priorities',
    pr2Summary: 'The pipeline remains balanced across pre-sold and income-generating projects, supporting disciplined growth.',
    pr3Title: 'Topaz strengthens governance and reporting controls for capital markets readiness',
    pr3Summary: 'Enhanced IFRS reporting processes and committee structures to meet institutional expectations.',
    
    // Downloads
    downloadsTitle: 'Downloads',
    downloadsDesc: 'Add fact sheets, presentations, and financial statements here.',
    factSheet: 'Fact sheet (PDF)',
    factSheetDesc: 'Key KPIs and portfolio snapshot',
    presentation: 'Investor presentation',
    presentationDesc: 'Quarterly deck',
    financials: 'Financial statements',
    financialsDesc: 'IFRS reporting',
    
    // Careers
    careers: 'Vacant jobs',
    careersDesc: 'Short list of open roles. Link to the main jobs page for the full list.',
    job1: 'Senior Project Manager (Real Estate Development)',
    job2: 'Financial Reporting Analyst (IFRS)',
    job3: 'Leasing & Asset Management Associate',
    location1: 'Riyadh',
    location2: 'Jeddah',
    location3: 'Eastern Province',
    fullTime: 'Full-time',
    
    // Events
    events: 'Upcoming events',
    eventsDesc: 'Calendar view and a quick list for investor and company events.',
    prev: 'Prev',
    next: 'Next',
    eventScheduled: 'Event scheduled',
    upcomingIn: 'Upcoming in',
    noEvents: 'No events scheduled for this month.',
    eventList: 'Event list',
    event1: 'Investor Briefing: Portfolio Performance & FY Outlook',
    event1Location: 'Riyadh (Hybrid)',
    event2: 'Careers Open Day',
    event2Location: 'Online',
    event3: 'Sustainability & ESG Update',
    
    // Footer
    whoWeAre: 'Who we are',
    companyDesc: 'Topaz is a real estate platform focused on disciplined delivery, operational efficiency, and long-term value creation.',
    dataForward: 'Data-forward',
    institutionalTone: 'Institutional tone',
    capitalReadiness: 'Capital readiness',
    
    contact: 'Contact us',
    investorRelations: 'Investor Relations',
    email: 'Email: ir@topaz.example',
    phone: 'Phone: +966 00 000 0000',
    
    ourOffices: 'Our offices',
    riyadh: 'Riyadh',
    riyadhAddress: 'Business District (placeholder address)',
    jeddah: 'Jeddah',
    jeddahAddress: 'Waterfront (placeholder address)',
    easternProvince: 'Eastern Province',
    easternAddress: 'Commercial hub (placeholder address)',
    
    quickLinks: 'Quick links',
    copyright: '© 2025 Topaz. All rights reserved.',
    disclaimers: 'Disclaimers',
    privacyPolicy: 'Privacy policy',
    terms: 'Terms',
    forwardStatements: 'Forward-looking statements',
    
    // Alt text
    logoAlt: 'Topaz Logo',
    miningAlt: 'Topaz mining operation showing precision and craftsmanship',
    propertyAlt: 'Modern Saudi Arabian residential properties and luxury developments',
    futureAlt: 'Futuristic Saudi Arabia cityscape and Vision 2030 development',
    skylineAlt: 'Saudi Arabia skyline showcasing urban development and Vision 2030 progress',
    mapAlt: 'Saudi Arabia regional development map showing project locations'
  },

  ar: {
    // Navigation  
    heritage: 'التراث',
    performance: 'الأداء',
    investment: 'الاستثمار', 
    downloads: 'التحميلات',
    contactIR: 'اتصل بعلاقات المستثمرين',
    
    // Common
    learnMore: 'اعرف المزيد',
    readMore: 'اقرأ المزيد',
    apply: 'تقديم الطلب',
    viewAll: 'عرض جميع الوظائف',
    sendMessage: 'إرسال رسالة',

    // Hero Section Main
    heroTagline: 'مؤسسي • يعتمد على البيانات • الاستعداد لرأس المال',
    heroTitle: 'علاقات المستثمرين توباز',
    heroDescription: 'تحديثات مدعومة بالأدلة حول التراث والأداء وخارطة الطريق المستقبلية—منظمة للمراجعة المؤسسية.',

    // Hero Cards
    heroHeritageTitle: 'التراث',
    heroHeritageSubtitle: 'مبني على التنفيذ منذ ٢٠٠٣',
    heroHeritageDescription: 'أكثر من عقدين من إنجاز المشاريع بنجاح عبر المملكة، مما يرسخ مكانة توباز كشريك موثوق في رحلة التنمية السعودية.',
    
    heroPropertyTitle: 'العقارات',
    heroPropertySubtitle: 'استثمارات عقارية استراتيجية',
    heroPropertyDescription: 'مشاريع تطوير متميزة متوافقة مع رؤية ٢٠٣٠، تركز على ممرات النمو العالي والمناطق الاقتصادية الناشئة في جميع أنحاء المملكة العربية السعودية.',
    heroPropertyLink1: 'عرض العقارات المتاحة',
    heroPropertyLink1Desc: 'القوائم والكتيبات وإرشادات التسعير',
    heroPropertyLink2: 'قائمة مراجعة الشراء',
    heroPropertyLink2Desc: 'الخطوات والوثائق والجداول الزمنية',
    heroPropertyCTA: 'ابدأ من هنا',
    
    heroFutureTitle: 'المستقبل',
    heroFutureSubtitle: 'التوافق مع رؤية ٢٠٣٠', 
    heroFutureDescription: 'في المقدمة من تحول المملكة العربية السعودية، مع مشاريع تدعم مباشرة أهداف التنويع والتحديث في المملكة.',
    focusAreas: 'مجالات التركيز',
    focusArea1: '• تقارير وضوابط قابلة للتوسع',
    focusArea2: '• محفظة وأنابيب متوافقة مع رؤية ٢٠٣٠',
    focusArea3: '• تخصيص منضبط لرأس المال',

    // KPI Labels
    founded: 'تأسست',
    employees: 'الموظفين',
    aum: 'الأصول المدارة',
    valuation: 'التقييم (داخلي)',
    completed: 'مكتمل',
    underDevelopment: 'قيد التطوير',
    completedProjects: 'مشاريع مكتملة',

    // Section 1: Heritage & Performance
    section1Eyebrow: 'القسم ١',
    section1Title: 'تراثنا وأداؤنا',
    section1Subtitle: 'إظهار المصداقية والحجم والانضباط والاتساق. يرسي هذا القسم ثقة المستثمرين من خلال دمج التاريخ السردي مع بيانات الأداء الصلبة.',
    
    overviewTitle: '١.١ السرد العام',
    overviewHeading: 'بناء القيمة عبر المملكة العربية السعودية منذ ٢٠٠٨',
    overviewPara1: 'تأسست توباز في عام ٢٠٠٨، ونمت من مطور مشروع واحد إلى منصة عقارية متكاملة بالكامل تعمل عبر الأصول السكنية والتجارية ومتعددة الاستخدامات.',
    overviewPara2: 'على مدى العقد ونصف العقد الماضيين، نجحت الشركة في تقديم تطويرات بارزة تتماشى مع أهداف التحضر في المملكة العربية السعودية، مع الحفاظ على انضباط رأس المال القوي والكفاءة التشغيلية.',
    overviewPara3: 'اليوم، تدير توباز محفظة متنوعة عبر مدن متعددة، تخدم الآلاف من السكان والمستأجرين التجاريين، وتولد إيرادات متكررة مستقرة مدعومة بأصول عالية الجودة.',
    
    regionalTitle: '١.٤ التغطية الإقليمية',
    regionalPoint1: '• وجود استراتيجي عبر المراكز الاقتصادية الرئيسية في المملكة العربية السعودية',
    regionalPoint2: '• محفظة تطوير تمتد عبر الرياض وجدة والمنطقة الشرقية',
    regionalPoint3: '• نمو حضري متماشي مع مبادرات رؤية ٢٠٣٠',
    regionalPoint4: '• قدرة تنفيذ مثبتة عبر أسواق متنوعة',
    
    footprintTitle: '١.٢ بصمة التطوير',
    metric: 'المقياس',
    valueExample: 'القيمة (مثال)',
    residentialUnits: 'الوحدات السكنية المسلمة',
    commercialUnits: 'الوحدات التجارية المسلمة',
    hospitalityKeys: 'مفاتيح الضيافة',
    builtUpArea: 'إجمالي المساحة المبنية المطورة',
    managedArea: 'إجمالي المساحة المدارة حاليًا',
    
    financeTitle: '١.٢ لقطة الأداء المالي',
    kpi: 'مؤشر الأداء الرئيسي',
    revenue: 'الإيرادات (ريال سعودي)',
    ebitdaMargin: 'هامش الأرباح قبل الفوائد والضرائب والاستهلاك',
    netMargin: 'هامش صافي الربح',
    avgIRR: 'متوسط عائد المشروع الداخلي',
    figuresNote: 'جميع الأرقام توضيحية.',
    
    evolutionTitle: '١.٣ التطور عبر الزمن',
    phase1Title: 'مرحلة التأسيس',
    phase1Period: '٢٠٠٨–٢٠١٢',
    phase1Desc1: 'أول التطويرات السكنية',
    phase1Desc2: 'هيكل رأس مال ممول من القطاع الخاص ويقوده المؤسس',
    phase2Title: 'مرحلة التوسع',
    phase2Period: '٢٠١٣–٢٠١٧',
    phase2Desc1: 'دخول في أصول متعددة الاستخدامات وتجارية',
    phase2Desc2: 'شراكات استراتيجية مع المقاولين والممولين المحليين',
    phase3Title: 'المأسسة',
    phase3Period: '٢٠١٨–٢٠٢٢',
    phase3Desc1: 'ترقيات الحوكمة',
    phase3Desc2: 'تنويع المحفظة',
    phase3Desc3: 'إدخال الإيرادات المتكررة',
    phase4Title: 'الحجم والاستعداد لرأس المال',
    phase4Period: '٢٠٢٣–اليوم',
    phase4Desc1: 'ميزانية عمومية قوية',
    phase4Desc2: 'أنابيب متوافقة مع رؤية ٢٠٣٠',
    phase4Desc3: 'تقارير وضوابط بدرجة الاكتتاب العام',
    milestone: 'المعلم',
    
    regionalPresence: 'الحضور الإقليمي',
    strategicDevelopment: 'تطوير استراتيجي عبر المملكة العربية السعودية',
    vision2030: 'رؤية ٢٠٣٠',

    // Section 3: Future & Investment Case
    section3Eyebrow: 'القسم ٣',
    section3Title: 'مستقبلنا وقضية الاستثمار',
    section3Subtitle: 'وضع الشركة كمنصة مستقبلية مدرجة وذات مصداقية مؤسسية مع أسس قوية ورياح خلفية كلية مواتية واستراتيجية نمو منضبطة.',
    
    forwardTitle: '٣.١ السرد المستقبلي',
    forwardHeading: 'موضعة للنمو طويل الأمد',
    forwardPara1: 'تدخل توباز مرحلتها التالية من النمو، مدفوعة بأنابيب تطوير قوية وتوسيع تدفقات الإيرادات المتكررة والرياح الخلفية الهيكلية في سوق العقارات السعودي.',
    forwardPara2: 'مع سجل تنفيذ مثبت وحجم تشغيلي متزايد، تستعد توباز لمشاركة أوسع في أسواق رأس المال.',
    forwardPara3: 'استراتيجيتنا تتمحور حول الربحية المستدامة وتخصيص رأس المال المنضبط والتوافق مع أولويات التنمية الوطنية.',
    
    investmentTitle: '٣.٢ النقاط البارزة للاستثمار',
    investmentHeading: 'لماذا الاستثمار في توباز',
    highlight1Title: 'ربحية مثبتة',
    highlight1Desc1: 'نمو إيرادات متسق عبر دورات متعددة',
    highlight1Desc2: 'هوامش أرباح قوية قبل الفوائد والضرائب مقارنة بالأقران',
    highlight1Desc3: 'عوائد عالية على مستوى المشروع',
    highlight2Title: 'تدفقات إيرادات متنوعة',
    highlight2Point1: 'مبيعات سكنية',
    highlight2Point2: 'تأجير تجاري',
    highlight2Point3: 'دخل إدارة العقارات',
    highlight2Point4: 'تعرض للضيافة والاستخدام المختلط',
    highlight3Title: 'أنابيب مشاريع قوية',
    highlight3Desc1: 'أكثر من ١٢ مليار ريال سعودي قيمة التطوير الإجمالية قيد التطوير',
    highlight3Desc2: 'مزيج متوازن من الأصول المباعة مسبقًا ومولدة الدخل',
    highlight4Title: 'فريق إدارة ذو خبرة',
    highlight4Desc1: 'خبرة في السوق المحلي',
    highlight4Desc2: 'عقلية حوكمة مؤسسية',
    highlight4Desc3: 'توافق طويل الأمد مع المساهمين',
    
    macroTitle: '٣.٣ الرياح الخلفية الكلية للمملكة العربية السعودية',
    macroHeading: 'محركات السوق الهيكلية',
    macro1: 'برامج التنمية الحضرية لرؤية ٢٠٣٠',
    macro2: 'نمو السكان والتحضر',
    macro3: 'فجوة المعروض السكني في المدن الرئيسية',
    macro4: 'توسع سوق الرهن العقاري',
    macro5: 'تحرير الملكية الأجنبية',
    macro6: 'برامج التمويل المدعومة حكوميًا',
    marketContext: 'سياق السوق التوضيحي',
    marketPoint1: 'معدل النمو السنوي المركب المتوقع لسوق العقارات السعودي: ٦–٨٪',
    marketPoint2: 'أهداف ملكية المنازل تزداد على المستوى الوطني',
    marketPoint3: 'الإنفاق الحكومي على البنية التحتية يدعم قيم الأصول',
    
    ipoTitle: '٣.٤ الاستعداد للاكتتاب العام وخارطة الطريق المستقبلية',
    ipoHeading: 'إعداد أسواق رأس المال',
    ipoPrep: 'إعداد أسواق رأس المال',
    ipoPrep1: 'تقارير مالية متوافقة مع المعايير الدولية للتقارير المالية',
    ipoPrep2: 'لجان مجلس إدارة مستقلة',
    ipoPrep3: 'إطار عمل البيئة والاجتماع والحوكمة قيد التطوير',
    ipoPrep4: 'أنظمة تخطيط موارد المؤسسة والتقارير القابلة للتوسع',
    strategicPriorities: 'الأولويات الاستراتيجية لـ ٣–٥ سنوات',
    priority1: 'نمو الإيرادات المتكررة إلى ٤٥–٥٠٪ من إجمالي الإيرادات',
    priority2: 'التوسع في مدينتين إضافيتين من الدرجة الأولى',
    priority3: 'تحسين هيكل رأس المال قبل الإدراج',
    priority4: 'إعادة تدوير انتقائية للأصول لتعزيز العائد على رأس المال المستثمر',
    
    disclaimer: 'لجمهور علاقات المستثمرين، يجب أن يكون كلا القسمين يعتمد على البيانات وليس ثقيلاً في التسويق؛ استخدام تعريفات مؤشرات الأداء الرئيسية المتسقة؛ السماح بتنزيل صحائف الوقائع والعروض التقديمية؛ والفصل الواضح بين الحقائق التاريخية والبيانات المستقبلية.',

    // Press Releases
    pressReleases: 'البيانات الصحفية',
    pressDesc: 'أحدث تحديثات الشركة (عناصر نائبة).',
    pr1Title: 'توباز تُبلغ عن استمرار توسع الهوامش ونمو قوي في الإيرادات المتكررة',
    pr1Summary: 'الانضباط التشغيلي وجودة المحفظة دعما توليد النقد المستقر عبر الأصول السكنية والتجارية.',
    pr2Title: 'توباز تُعلن عن تطوير جديد متعدد الاستخدامات متماشي مع أولويات رؤية ٢٠٣٠',
    pr2Summary: 'تبقى الأنابيب متوازنة عبر المشاريع المباعة مسبقًا ومولدة الدخل، مما يدعم النمو المنضبط.',
    pr3Title: 'توباز تُعزز الحوكمة وضوابط التقارير للاستعداد لأسواق رأس المال',
    pr3Summary: 'عمليات تقارير محسنة وفقًا للمعايير الدولية للتقارير المالية وهياكل لجان لتلبية التوقعات المؤسسية.',
    
    // Downloads
    downloadsTitle: 'التحميلات',
    downloadsDesc: 'أضف صحائف الوقائع والعروض التقديمية والبيانات المالية هنا.',
    factSheet: 'صحيفة الوقائع (PDF)',
    factSheetDesc: 'مؤشرات الأداء الرئيسية ولقطة المحفظة',
    presentation: 'عرض المستثمرين',
    presentationDesc: 'عرض ربع سنوي',
    financials: 'البيانات المالية',
    financialsDesc: 'تقارير المعايير الدولية للتقارير المالية',
    
    // Careers
    careers: 'الوظائف الشاغرة',
    careersDesc: 'قائمة قصيرة من الأدوار المفتوحة. رابط لصفحة الوظائف الرئيسية للحصول على القائمة الكاملة.',
    job1: 'مدير مشروع أول (تطوير عقاري)',
    job2: 'محلل تقارير مالية (المعايير الدولية للتقارير المالية)',
    job3: 'مساعد تأجير وإدارة أصول',
    location1: 'الرياض',
    location2: 'جدة',
    location3: 'المنطقة الشرقية',
    fullTime: 'دوام كامل',
    
    // Events
    events: 'الفعاليات القادمة',
    eventsDesc: 'عرض التقويم وقائمة سريعة لفعاليات المستثمرين والشركة.',
    prev: 'السابق',
    next: 'التالي',
    eventScheduled: 'فعالية مجدولة',
    upcomingIn: 'قادم في',
    noEvents: 'لا توجد فعاليات مجدولة لهذا الشهر.',
    eventList: 'قائمة الفعاليات',
    event1: 'إحاطة المستثمرين: أداء المحفظة ونظرة السنة المالية',
    event1Location: 'الرياض (مختلط)',
    event2: 'يوم مفتوح للوظائف',
    event2Location: 'عبر الإنترنت',
    event3: 'تحديث الاستدامة والبيئة والاجتماع والحوكمة',
    
    // Footer
    whoWeAre: 'من نحن',
    companyDesc: 'توباز هي منصة عقارية تركز على التسليم المنضبط والكفاءة التشغيلية وخلق القيمة طويلة الأمد.',
    dataForward: 'يعتمد على البيانات',
    institutionalTone: 'نبرة مؤسسية',
    capitalReadiness: 'الاستعداد لرأس المال',
    
    contact: 'اتصل بنا',
    investorRelations: 'علاقات المستثمرين',
    email: 'البريد الإلكتروني: ir@topaz.example',
    phone: 'الهاتف: +966 00 000 0000',
    
    ourOffices: 'مكاتبنا',
    riyadh: 'الرياض',
    riyadhAddress: 'الحي التجاري (عنوان نائب)',
    jeddah: 'جدة',
    jeddahAddress: 'الواجهة البحرية (عنوان نائب)',
    easternProvince: 'المنطقة الشرقية',
    easternAddress: 'المركز التجاري (عنوان نائب)',
    
    quickLinks: 'روابط سريعة',
    copyright: '© ٢٠٢٥ توباز. جميع الحقوق محفوظة.',
    disclaimers: 'إخلاء المسؤولية',
    privacyPolicy: 'سياسة الخصوصية',
    terms: 'الشروط',
    forwardStatements: 'البيانات المستقبلية',
    
    // Alt text
    logoAlt: 'شعار توباز',
    miningAlt: 'عملية تعدين التوباز تُظهر الدقة والحرفية',
    propertyAlt: 'عقارات سكنية سعودية حديثة وتطويرات فاخرة',
    futureAlt: 'مناظر مدن سعودية مستقبلية وتطوير رؤية ٢٠٣٠',
    skylineAlt: 'أفق المملكة العربية السعودية يُظهر التنمية الحضرية وتقدم رؤية ٢٠٣٠',
    mapAlt: 'خريطة التنمية الإقليمية للمملكة العربية السعودية تُظهر مواقع المشاريع'
  }
};

// Hook for using translations
export const useTranslations = (language: Language) => {
  return translations[language];
};

// Helper for RTL direction
export const isRTL = (language: Language): boolean => {
  return language === 'ar';
};

// Helper for language direction attribute
export const getDir = (language: Language): string => {
  return isRTL(language) ? 'rtl' : 'ltr';
};

// Helper for text alignment classes
export const getTextAlign = (language: Language) => {
  return {
    start: isRTL(language) ? 'text-right' : 'text-left',
    end: isRTL(language) ? 'text-left' : 'text-right',
    center: 'text-center'
  };
};

// Helper for margin classes (logical spacing)
export const getSpacing = (language: Language) => {
  return {
    ms: (size: string) => isRTL(language) ? `mr-${size}` : `ml-${size}`,
    me: (size: string) => isRTL(language) ? `ml-${size}` : `mr-${size}`,
    ps: (size: string) => isRTL(language) ? `pr-${size}` : `pl-${size}`,
    pe: (size: string) => isRTL(language) ? `pl-${size}` : `pr-${size}`
  };
};