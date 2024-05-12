interface svgProps extends React.SVGProps<SVGSVGElement> {}

export const Pipe: React.FC<svgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    color="var(--primaryColor)"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M22 14h-2v2h-6v-3h2v-2h-2V6a2 2 0 0 0-2-2H4V2H2v8h2V8h6v3H8v2h2v5a2 2 0 0 0 2 2h8v2h2"
    ></path>
  </svg>
);
