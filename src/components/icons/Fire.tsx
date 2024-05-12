interface svgProps extends React.SVGProps<SVGSVGElement> {}

export const Fire: React.FC<svgProps> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    color="var(--primaryColor)"
    {...props}
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <path
        d="M16.5582 15.0001C16.835 14.3566 17 13.5859 17 12.6667C17 10.0558 15.4593 8.16231 14.0008 7.03166C13.2525 6.45159 12.2941 7.05323 12.2941 8.00001C12.2941 8.64273 12.0054 9.71299 11.4205 10.5011C10.7814 11.3622 9.95616 10.5021 9.89841 9.43131C9.87201 8.94193 9.36421 8.76864 8.95593 9.03976C8.06292 9.63276 7 10.8109 7 12.6667C7 16.9333 10.1111 18 11.6667 18C12.474 18 13.648 17.78 14.6891 17.1403"
        stroke="#003823"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
      <path
        d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
        stroke="#003823"
        stroke-width="1.5"
        stroke-linecap="round"
      ></path>{" "}
    </g>
  </svg>
);
