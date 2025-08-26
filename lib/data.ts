export interface Project {
  id: string
  slug: string
  title: string
  description: string
  category: 'ai' | 'finance' | 'strategy' | 'product' | 'coding'
  image: string
  tags: string[]
  overview: string
  tech: string
  results: string
  lessons: string
  link?: string
  caseStudy?: string
  codePreview?: string
}

export const ABOUT = {
  blurb: `I'm Viom Kapur — an AI Engineer × Finance student who enjoys building intelligent systems that bridge finance and technology. I like machine learning, financial modeling, and creating data-driven solutions.`,
  fun: ['Football • F1 • Guitar', 'Stock Market • Strategy']
}

export interface Experience {
  id: string
  slug: string
  company: string
  role: string
  duration: string
  location: string
  description: string
  achievements: string[]
  skills: string[]
  color: string
  logo?: string
}

export const PROJECTS: Project[] = [
  // Featured Projects
  {
    id: 'credit-card-fraud',
    slug: 'credit-card-fraud',
    title: 'Credit Card Fraud Detection',
    description: 'XGBoost model with 46% detection rate (267x improvement)',
    category: 'ai',
    image: '/placeholder-headshot.jpg',
    tags: ['AI/ML', 'Finance'],
    overview: 'XGBoost fraud detection improving recall',
    tech: 'Python, XGBoost, Pandas',
    results: '46% detection, 267x improvement',
    lessons: 'Feature engineering and class imbalance handling',
    link: '/projects/credit-card-fraud'
  },
  {
    id: 'dlf-analysis',
    slug: 'dlf-analysis',
    title: 'DLF Financial Analysis',
    description: 'Comprehensive investment thesis for DLF',
    category: 'finance',
    image: '/placeholder-headshot.jpg',
    tags: ['Finance', 'Strategy'],
    overview: 'Equity research and thesis for DLF',
    tech: 'Excel, Valuation, Research',
    results: 'Investment recommendation with risk analysis',
    lessons: 'Assumption sensitivity and scenario planning',
    link: '/projects/dlf-analysis'
  },
  {
    id: 'tcns-strategy',
    slug: 'tcns-strategy',
    title: 'TCNS Future Strategy Report',
    description: 'Financial evaluation and investment recommendations',
    category: 'strategy',
    image: '/placeholder-headshot.jpg',
    tags: ['Strategy', 'Product'],
    overview: 'Corporate strategy evaluation for TCNS',
    tech: 'Strategy, FP&A',
    results: 'Roadmap and measurable KPIs',
    lessons: 'Stakeholder alignment and execution risk',
    link: '/projects/tcns-strategy'
  },
  {
    id: 'trezi-memo',
    slug: 'trezi-memo',
    title: 'Trezi Investment Memo',
    description: 'Investment thesis for YourNest Capital',
    category: 'finance',
    image: '/placeholder-headshot.jpg',
    tags: ['Finance', 'Product'],
    overview: 'VC-style memo with market sizing',
    tech: 'Research, Modeling',
    results: 'Memo and recommended stance',
    lessons: 'Signal vs noise in early-stage data',
    link: '/projects/trezi-memo'
  },
  {
    id: 'tips-thesis',
    slug: 'tips-thesis',
    title: 'Tips Music Investment Thesis',
    description: 'Comprehensive analysis and recommendations',
    category: 'finance',
    image: '/placeholder-headshot.jpg',
    tags: ['Finance'],
    overview: 'Public markets deep-dive into music label',
    tech: 'Valuation, Channel checks',
    results: 'Buy/Sell view with thesis score',
    lessons: 'Behavioral biases and conviction management',
    link: '/projects/tips-thesis'
  },
  // Coding Projects
  {
    id: 'portfolio-tracker',
    slug: 'portfolio-tracker',
    title: 'Stock Portfolio Tracker',
    description: 'A comprehensive stock portfolio tracking application with real-time updates, interactive visualizations, and Google Sheets integration for data management.',
    category: 'coding',
    image: '/placeholder-headshot.jpg',
    tags: ['Financial Technology'],
    overview: 'Real-time portfolio tracking with data visualization',
    tech: 'JavaScript, Google Sheets API, Data Visualization, RESTful APIs',
    results: 'Interactive dashboard with real-time updates',
    lessons: 'API integration and data visualization best practices',
    link: '/coding-projects/stock-portfolio-tracker',
    codePreview: `// Key Features
const features = {
    realTimeUpdates: true,
    dataVisualization: true,
    googleSheetsAPI: true,
    responsiveDesign: true
};

// Tech Stack
const techStack = [
    'JavaScript', 'Google Sheets API', 
    'Data Visualization', 'RESTful APIs'
];`
  },
  {
    id: 'option-pricing',
    slug: 'option-pricing',
    title: 'Option Pricing & Strategy',
    description: 'An analysis of a Bull Call Spread options trading strategy for Reliance Industries using Black-Scholes and Monte Carlo models.',
    category: 'coding',
    image: '/placeholder-headshot.jpg',
    tags: ['Financial Analytics'],
    overview: 'Options strategy analysis using quantitative models',
    tech: 'Python, Numpy, Pandas, Matplotlib',
    results: 'Bull Call Spread strategy evaluation',
    lessons: 'Quantitative modeling and risk assessment',
    link: '/coding-projects/option-pricing-strategy',
    codePreview: `# Black-Scholes Model
def black_scholes(S, K, T, r, sigma):
    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    call = S * norm.cdf(d1) - K * np.exp(-r*T) * norm.cdf(d2)
    return call`
  },
  {
    id: 'stock-analyser',
    slug: 'stock-analyser',
    title: 'Stock Analyser',
    description: 'An AI-powered stock analysis tool that uses an LSTM model for price prediction and a DNN for portfolio health assessment.',
    category: 'coding',
    image: '/placeholder-headshot.jpg',
    tags: ['AI & Financial Analysis'],
    overview: 'AI-powered stock analysis with LSTM and DNN models',
    tech: 'TensorFlow, Python, Flask, Scikit-learn',
    results: 'Price prediction and portfolio health assessment',
    lessons: 'Deep learning for financial time series',
    link: '/coding-projects/stock-analyser',
    codePreview: `# Build and Train LSTM Model
def build_lstm_model(time_steps):
    model = tf.keras.Sequential([
        tf.keras.layers.LSTM(64, input_shape=(time_steps, 1)),
        tf.keras.layers.Dense(1)
    ])
    model.compile(optimizer='adam', loss='mse')
    return model`
  }
]

export const EXPERIENCE: Experience[] = [
  {
    id: 'deloitte-india',
    slug: 'deloitte-india',
    company: 'Deloitte India',
    role: 'Strategy, Risk and Transactions Intern, M&A',
    duration: 'Jun 2025 - Sep 2025',
    location: 'Gurugram, India (Hybrid)',
    description: 'Executed statutory and risk based audit procedures on a leading real estate developer\'s project in Delhi-NCR, enhancing investor confidence and ensuring compliance in a high stakes capital raise scenario.',
    achievements: [
      'Executed statutory and risk based audit procedures on a leading real estate developer\'s project in Delhi-NCR, enhancing investor confidence and ensuring compliance in a high stakes capital raise scenario.',
      'Developed strategic acquisition proposals in the API/CRAMS space for a global pharmaceutical client, shortlisting targets with valuations ranging from ₹500-1,200 crore and with market trends and company outlooks to support investment decisions.',
      'Led inorganic growth assessments for a major logistics player by identifying and profiling tie-ups and acquisition targets with combined revenue of ~₹500 crore, projecting a 20% uplift in earnings post integration.',
      'Authored Deloitte India\'s industry outlook on the freight and logistics market conducting in depth research on the current landscape and outlook in India combining macroeconomic drivers, policy shifts, and market trends; findings are slated for publication by Deloitte.',
      'Supported JSW Paints in its ₹8,986 crore acquisition of a 75% stake in AkzoNobel India: led the due diligence review on product verticals and compliance overlaps, estimating ₹400 crore in integration synergy with a 5-7% projected uplift in EBITDA.',
      'Prepared a detailed diligence memo outlining regulatory compliance for Manipal Hospitals\' ₹6,400 crore acquisition of Sahyadri Hospitals.'
    ],
    skills: ['M&A Due Diligence', 'Strategic Analysis', 'Risk Assessment', 'Financial Modeling', 'Regulatory Compliance', 'Industry Research'],
    color: '#86bc25',
    logo: '/deloitte_logo.png'
  },
  {
    id: 'bdo-india',
    slug: 'bdo-india',
    company: 'BDO India LLP',
    role: 'Deal Value Creation Intern',
    duration: 'Jul 2024 - Sep 2024',
    location: 'Gurugram, India (Hybrid)',
    description: 'Worked on M&A due diligence and deal value creation projects, analyzing financial data and market trends to support investment decisions.',
    achievements: [
      'Conducted comprehensive financial due diligence for 3 M&A transactions',
      'Developed valuation models using DCF and comparable company analysis',
      'Created detailed investment memorandums with risk assessments',
      'Collaborated with cross-functional teams to analyze market opportunities'
    ],
    skills: ['Portfolio Management', 'Due Diligence', 'Market Analysis', 'Financial Modeling', 'Valuation'],
    color: '#00d4aa',
    logo: '/bdo_logo.png'
  },
  {
    id: 'pragmana-foundation',
    slug: 'pragmana-foundation',
    company: 'Pragmana Foundation',
    role: 'Founder\'s Office Intern',
    duration: 'Jun 2024 - Dec 2024',
    location: 'Gurugram, India (Hybrid)',
    description: 'Supported strategic initiatives and product development in the founder\'s office, working on financial planning and web development projects.',
    achievements: [
      'Led product design initiatives for 2 new financial technology solutions',
      'Developed comprehensive financial planning frameworks',
      'Built web applications using modern development technologies',
      'Managed stakeholder relationships and project timelines'
    ],
    skills: ['Product Design', 'Financial Planning', 'Web Development', 'Strategic Planning', 'Stakeholder Management'],
    color: '#4ecdc4',
    logo: '/pragmana_logo.png'
  },
  {
    id: 'itc-limited',
    slug: 'itc-limited',
    company: 'ITC Limited',
    role: 'SAP Intern',
    duration: 'Jun 2023 - Jul 2023',
    location: 'Gurugram, India (On-Site)',
    description: 'Worked on SAP implementation and AI development projects, focusing on data processing and AWS cloud infrastructure.',
    achievements: [
      'Developed AI-powered data processing solutions using machine learning',
      'Implemented SAP modules for enterprise resource planning',
      'Deployed applications on AWS cloud infrastructure',
      'Optimized data workflows and system performance'
    ],
    skills: ['AI Development', 'Data Processing', 'AWS', 'SAP', 'Machine Learning'],
    color: '#45b7d1',
    logo: '/itc_logo.png'
  }
]

export const SKILLS = [
  { name: 'TypeScript', level: 90 },
  { name: 'React / Next.js', level: 92 },
  { name: 'Tailwind', level: 90 },
  { name: 'Three.js', level: 70 },
  { name: 'Anime.js', level: 75 },
  { name: 'Python', level: 88 },
  { name: 'Finance / Markets', level: 85 }
]
