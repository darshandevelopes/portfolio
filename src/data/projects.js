export const projects = [
  {
    id: 'payment-automation',
    title: 'Payment Automation API',
    shortDesc: 'Automated payment processing system with real-time transaction updates via webhooks.',
    fullDesc: 'Developed an automated payment processing system with an API and admin dashboard. Streamlined payment workflows, reducing overall payment processing costs by 50%.',
    stack: ['Python', 'Django', 'Playwright', 'AWS EC2', 'SQLite'],
    metric: '50% cost reduction',
    challenge: 'Handling real-time transaction updates reliably across distributed systems.',
    solution: 'Implemented a robust webhook system with retry logic and idempotent processing.',
    github: 'https://github.com/darshandevelopes', // General link as specific ones weren't provided
    live: '#',
    role: 'Lead Developer'
  },
  {
    id: 'web-scraping',
    title: 'Large-Scale Web Scraping Infrastructure',
    shortDesc: 'Robust infrastructure processing 1M records per day with high reliability.',
    fullDesc: 'Engineered a robust web scraping system capable of processing 1M records per day on Google Cloud Platform. Optimized infrastructure ensures high performance for large-scale data extraction.',
    stack: ['Python', 'Docker', 'GCP', 'Selenium', 'Redis'],
    metric: '1M+ records/day',
    challenge: 'Scaling data extraction while maintaining high reliability and avoiding rate limits.',
    solution: 'Architected a distributed worker system using Docker and Redis for queue management, with smart proxy rotation.',
    github: 'https://github.com/darshandevelopes',
    live: '#',
    role: 'Cloud Architect & Engineering'
  },
  {
    id: 'ai-job-portal',
    title: 'AI-based Job Portal',
    shortDesc: 'AI-powered platform reducing candidate screening time by 30%.',
    fullDesc: 'Developed an AI-powered mobile application with features such as resume grading, automated categorization, and personalized technical preparation resources.',
    stack: ['Python', 'Django', 'MySQL', 'JavaScript', 'NLTK'],
    metric: '30% faster screening',
    challenge: 'Building an accurate AI-driven evaluation system for diverse resume formats.',
    solution: 'Utilized natural language processing to extract key skills and quantify candidate expertise against job descriptions.',
    github: 'https://github.com/darshandevelopes',
    live: '#',
    role: 'Full-Stack Developer'
  }
];
