interface svgProps extends React.SVGProps<SVGSVGElement> {}

export const Industry: React.FC<svgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    color="var(--primaryColor)"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="currentColor"
      d="M20 5v5.469l-3 1.781V9.219l-1.5.937L12 12.25V9.219l-1.5.937l-5 3l-.5.281V27h22V5zm2 2h3v18H7V14.531l3-1.781v3.031l1.5-.937L15 12.75v3.031l1.5-.937l5-3l.5-.281zM9 17v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zM9 21v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"
    ></path>
  </svg>
);
