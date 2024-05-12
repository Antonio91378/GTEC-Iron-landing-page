interface svgProps extends React.SVGProps<SVGSVGElement> {}

export const MageCupHot: React.FC<svgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    color="var(--primaryColor)"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M3.5 9.256h12v7.996a3.997 3.997 0 0 1-4 3.998h-4a4.001 4.001 0 0 1-4-3.998z"></path>
      <path d="M15.5 10.256h3a2 2 0 0 1 2 1.999v3.998a1.998 1.998 0 0 1-2 1.999h-3.13M5.89 6.748a1.41 1.41 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998m3.25 3.998a1.419 1.419 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998m3.49 3.998a1.41 1.41 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998"></path>
    </g>
  </svg>
);
