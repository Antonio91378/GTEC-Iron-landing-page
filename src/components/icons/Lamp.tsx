interface svgProps extends React.SVGProps<SVGSVGElement> {}

export const Lamp: React.FC<svgProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2.5em"
    height="2.5em"
    color="var(--primaryColor)"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none">
      <path
        fill="currentColor"
        d="m10.211 20.106l-.223.447zm-1.067-4.42l-.462.19zm-.226-.452l-.395.306zm6.164 0l.395.306zM17.5 10c0 1.8-.865 3.4-2.204 4.403l.6.8A6.491 6.491 0 0 0 18.5 10zM12 4.5a5.5 5.5 0 0 1 5.5 5.5h1A6.5 6.5 0 0 0 12 3.5zM6.5 10A5.5 5.5 0 0 1 12 4.5v-1A6.5 6.5 0 0 0 5.5 10zm2.204 4.403A5.49 5.49 0 0 1 6.5 10h-1a6.491 6.491 0 0 0 2.604 5.203zm1.793 5.35a11.797 11.797 0 0 0-.891-4.258l-.924.382c.51 1.234.788 2.556.816 3.897zm3.068-.095a3.5 3.5 0 0 1-3.13 0l-.447.895a4.5 4.5 0 0 0 4.024 0zm.83-4.163a11.797 11.797 0 0 0-.892 4.259l1 .02c.027-1.341.305-2.663.815-3.897zm-.383 5.058a.89.89 0 0 0 .49-.779l-1-.02a.11.11 0 0 1 .063-.096zm-4.514-.779a.89.89 0 0 0 .49.779l.447-.895a.11.11 0 0 1 .062.095zm-1.394-4.57c.318.238.39.297.42.336l.79-.613c-.135-.174-.353-.33-.61-.524zm1.502.29c-.087-.21-.16-.396-.292-.567l-.79.613c.032.042.054.086.158.337zm5.69-1.09c-.257.192-.475.35-.61.523l.79.613c.03-.039.101-.098.42-.337zm.022 1.473c.104-.251.126-.295.159-.337l-.79-.613c-.133.171-.206.358-.293.568z"
      ></path>
      <path stroke="currentColor" d="M14.5 16.5a6.732 6.732 0 0 1-5 0"></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M11 14V9.75c0-.69-.56-1.25-1.25-1.25v0c-.69 0-1.25.56-1.25 1.25v0c0 .69.56 1.25 1.25 1.25h4.5c.69 0 1.25-.56 1.25-1.25v0c0-.69-.56-1.25-1.25-1.25v0c-.69 0-1.25.56-1.25 1.25V14"
      ></path>
    </g>
  </svg>
);
