const GithubIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3-0.5 6-2.1 6-6 0-1.7-0.7-3.2-2-4.3 0.3-1 0.3-2 0-3 0 0-1 0-3 1.2a9 9 0 0 0-5 0C8 1.2 7 1.2 7 1.2c-0.3 1-0.3 2 0 3-1.3 1.1-2 2.6-2 4.3 0 3.9 3 5.5 6 6a4.8 4.8 0 0 0-1 3.5v4" />
    <path d="M9 22c-3 1.5-5-0.5-5-1" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export { GithubIcon, LinkedinIcon };