import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialMediaLinks = [
  {
    title: 'Github',
    link: 'https://github.com/singnet',
    icon: () => <GitHubIcon />,
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/singularity_net',
    icon: () => <TwitterIcon />,
  },
  {
    title: 'Facebook',
    link: 'https://www.facebook.com/singularityNET.io',
    icon: () => <FacebookIcon />,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/company/singularitynet/',
    icon: () => <LinkedInIcon />,
  },
  {
    title: 'YouTube',
    link: 'https://www.youtube.com/channel/UCbTE8vfz5zuEK5uRnc2yjrw',
    icon: () => <YouTubeIcon />,
  },
  {
    title: 'Instagram',
    link: 'https://instagram.com/singularitynet.io',
    icon: () => <InstagramIcon />,
  },
];

export const LegalLinks = [
  {
    title: 'Terms of Use',
    link: 'https://public.singularitynet.io/terms_and_conditions.html',
  },
  {
    title: 'Privacy Policy',
    link: 'https://public.singularitynet.io/privacy_policy.html',
  },
];

export const PrimaryFooterMainLinks = [
  {
    title: 'SingularityNet',
    children: [
      { label: 'Foundation Site', link: '#', internalLink: false },
      { label: 'Terms of Service', link: '#', internalLink: false },
      { label: 'Privacy Policy', link: '#', internalLink: false },
    ],
  },
  {
    title: 'Technology',
    children: [
      { label: 'A.I Marketplace', link: 'https://beta.singularitynet.io/', internalLink: false },
      { label: 'A.I Publisher', link: 'https://publisher.singularitynet.io/', internalLink: false },
      { label: 'AGIX Staking', link: 'https://staking.singularitynet.io/', internalLink: false },
      { label: 'Bridge', link: 'https://bridge.singularitynet.io', internalLink: false },
    ],
  },
  {
    title: 'Ecosystem',
    children: [
      { label: 'Rejuve', link: 'https://rejuve.ai/', internalLink: false },
      { label: 'SingularityDAO', link: 'https://singularitydao.ai/', internalLink: false },
      { label: 'Nunet', link: 'https://nunet.io/', internalLink: false },
      { label: 'HyperCycle', link: '#', internalLink: false },
      { label: 'Mindplex', link: '#', internalLink: false },
      { label: 'SophiaVerse', link: '#', internalLink: false },
      { label: 'Awakening Health', link: '#', internalLink: false },
      { label: 'TrueAGI', link: '#', internalLink: false },
      { label: 'Singularity Studio', link: '#', internalLink: false },
      { label: 'Twin Protocol', link: '#', internalLink: false },
      { label: 'Jam Galaxy', link: '#', internalLink: false },
    ],
  },
  {
    title: 'Community',
    children: [
      { label: 'Telegram', link: 'https://telegram.me/singularitynet', internalLink: false },
      { label: 'Discord', link: 'https://discord.com/invite/snet', internalLink: false },
      { label: 'Forum', link: 'https://community.singularitynet.io/', internalLink: false },
      { label: 'Official Blog', link: 'https://blog.singularitynet.io/', internalLink: false },
      { label: 'Devloper Portal', link: 'https://dev.singularitynet.io/', internalLink: false },
    ],
  },
];

export const navData = [
  {
    name: 'SingularityNet',
    url: 'https://singularitynet.io',
    external: true,
  },
];

export const API_PATHS = {
  CONTACT_US: '',
};

export const SUPPORT_SUBJECT = 'Maintenance Support Enquiry'
