export const DATA = {
  name: 'Gelda, a self-hosted helpdesk assistant',
  url: 'https://gelda.kinotio.io',
  description:
    'AI-powered helpdesk assistant designed to provide users with an efficient and personalized support experience.',
  social_url: {
    github: 'https://github.com/kinotio',
    discord: 'https://discord.gg/cskvbKQA',
    linkedin: 'https://linkedin.com/company/kinotio',
    x: 'https://x.com/kinotio_io',
  },
  repo: 'https://github.com/kinotio/gelda',
  keywords: [
    'Gelda',
    'Helpdesk',
    'Open Source',
    'AI',
    'IA',
    'Free',
    'Ticketing',
  ],
  color: {
    gradient: {
      from: '#6048e7',
      to: '#56d49e',
    },
    base: {
      dark: '#000000',
      light: '#ffffff',
    },
  },
  navbar: [
    {
      href: 'docs',
      name: 'Docs',
    },
  ],
  footer: {
    contact: [
      {
        icon: 'Mail',
        href: 'mailto:contact@kinotio.io',
        label: 'contact@kinotio.io',
      },
    ],
    help: [
      {
        href: '#faq',
        name: 'FAQ',
      },
      {
        href: '#issues',
        name: 'Issues',
      },
    ],
    socials: [
      {
        icon: 'Github',
        href: 'https://github.com/kinotio',
        name: 'github',
      },
      {
        icon: 'X',
        href: 'https://x.com/kinotio_io',
        label: 'X',
      },
      {
        icon: 'Linkedin',
        href: 'https://linkedin.com/company/kinotio',
        label: 'LinkedIn',
      },
      {
        icon: 'MessageCircle',
        href: 'https://discord.gg/cskvbKQA',
        label: 'Discord',
      },
    ],
  },
  trustedBy: [
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Crown',
      name: 'Your company',
    },
    {
      icon: 'Crown',
      name: 'Your company',
    },
  ],
  faq: [
    {
      question: 'What are the system requirements for hosting Gelda',
      answer:
        "Gelda requires a minimum of 4GB RAM, 2 CPU cores, and 20GB of disk space. It's recommended to have Docker installed for easy setup.",
    },
    {
      question: 'How do I install Gelda?',
      answer:
        'You can install Gelda by running the setup script, and configuring the environment variables. Detailed installation instructions can be found in the documentation.',
    },
    {
      question: 'How do I update the Gelda?',
      answer:
        'Updates can be applied by pulling the latest changes from the repository and running the update script. Make sure to backup your data before performing an update.',
    },
  ],
}
