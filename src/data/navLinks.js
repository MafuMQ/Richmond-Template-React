export const navLinks = [
  { label: 'Home', href: '#' },
  {
    label: 'Municipality',
    href: '/about-us/',
    children: [
      { label: 'About Umhlabuyalingana', href: '/about-us/', icon: 'fas fa-sun' },
      { label: 'Mission & Vision', href: '#mission-vision', icon: 'fas fa-bullseye' },
      { label: 'Council Members', href: '/about-us/#council-members', icon: 'fas fa-user' },
      {
        label: 'Departments', href: '/departments/', icon: 'fas fa-chart-bar',
        subdropdown: [
          { label: 'Human Resources', href: '/human-resources/' },
          { label: 'Finance', href: '/finance/' },
          { label: 'Technical Services', href: '/technical-services/' },
          { label: 'Community Services', href: '/community-services/' },
          { label: 'Corporate Services', href: '/corporate-services/' },
          { label: 'Office of the Municipal Manager', href: '/office-of-the-mm/' },
        ],
      },
      { label: 'Team Portal', href: '#', icon: 'fas fa-hand-paper' },
    ],
  },
  {
    label: 'Municipal Services',
    href: '#',
    children: [
      { label: 'Municipal Accounts', href: '/municipal-accounts/', icon: 'fas fa-money-bill' },
      { label: 'Traffic & Licensing', href: '/traffic-licensing/', icon: 'fas fa-car' },
      { label: 'Library Service', href: '/library-service/', icon: 'fas fa-book' },
    ],
  },
  {
    label: 'Procurement',
    href: '/scm/',
    children: [
      { label: 'Tenders', href: '/tenders/', icon: 'fas fa-pencil-alt' },
      { label: 'Quotations', href: '/rfqs-bids-below-r300-000/', icon: 'fas fa-file-invoice' },
      { label: 'Supply Chain Documents', href: '/supply-chain-documents/', icon: 'fas fa-file-alt' },
      { label: 'Reports', href: '/reports/', icon: 'fas fa-table' },
      { label: 'Public Notices', href: '/public-notices/', icon: 'fas fa-bullhorn' },
    ],
  },
  {
    label: 'Vacancies',
    href: '/vacancies/',
    children: [
      { label: 'Application Form', href: '/application-form/', icon: 'fas fa-edit' },
      { label: 'External Vacancies', href: '/vacancies/', icon: 'fas fa-share-alt' },
      { label: 'In-Service Training', href: '/in-service-training/', icon: 'fas fa-rocket' },
    ],
  },
  {
    label: 'Documents',
    href: '#documents',
    twoCol: true,
    children: [
      { label: 'Annual Reports', href: '#doc/annual-reports', icon: 'fas fa-folder' },
      { label: 'Budgets', href: '#doc/budgets', icon: 'fas fa-chart-pie' },
      { label: 'By-Laws', href: '#doc/by-laws', icon: 'fas fa-gavel' },
      { label: 'Financial Statements', href: '#doc/financial-statements', icon: 'fas fa-file-invoice-dollar' },
      { label: 'IDP', href: '#doc/idp', icon: 'fas fa-sitemap' },
      { label: 'Performance Agreements', href: '#doc/performance-agreements', icon: 'fas fa-file-contract' },
      { label: 'Performance Reports', href: '#doc/performance-reports', icon: 'fas fa-chart-line' },
      { label: 'Policies', href: '#doc/policies', icon: 'fas fa-clipboard-list' },
      { label: 'SDBIP', href: '#doc/sdbip', icon: 'fas fa-tasks' },
      { label: 'In-Year Reporting', href: '#doc/in-year-reporting', icon: 'fas fa-calendar-check' },
    ],
  },
  {
    label: 'Events & Media',
    href: '#',
    children: [
      { label: 'Events', href: '/events/', icon: 'fas fa-calendar-alt' },
      { label: 'Media', href: '/media/', icon: 'fas fa-photo-video' },
      { label: 'Newsletters', href: '/newsletters/', icon: 'fas fa-newspaper' },
      { label: 'Gallery', href: '/gallery/', icon: 'fas fa-camera' },
    ],
  },
  { label: 'Contacts', href: '#contact-us' },
]
