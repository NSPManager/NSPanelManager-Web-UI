interface Props {
  className?: string;
  isOn: boolean;
}
function CeilingLightIcon({ className, isOn }: Props) {
  return (
    <svg
      viewBox="0 0 94.71 191.38"
      width="100%"
      height="100%"
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(-55.82, -91.01)">
        <path
          id="mount"
          fill="currentColor"
          d="m 101.98,125.17 h -2.25 v -2.74 c -14.16,-2.44 -17.39,-14.82 -17.39,-14.82 v -16.6 h 0.36 l 20.4,0 20.4,0 h 0.36 v 16.6 c 0,0 -3.23,12.37 -17.39,14.82 v 2.74 h -2.52"
        />
        <path
          id="stem"
          fill="currentColor"
          d="m 101.14,202.9 h 3.95 v -77.73 h -3.95 z"
        />

        <path
          id="glass"
          fill={isOn ? "#ffc101" : "currentColor"}
          className="transition-colors duration-300 ease-in-out"
          d="m 105.09,202.9 v 0 h 2.7 v 2.48 c 0,0 37.39,-3.92 36.86,44.66 v 0.53 h 2.79 c 0,0 2.97,0.31 2.97,3.28 v 23.64 l 0.12,4.89 H 103.18 55.82 v -4.89 -23.64 c 0,-2.97 2.97,-3.28 2.97,-3.28 h 2.79 v -0.53 c -0.53,-48.58 36.86,-44.66 36.86,-44.66 v -2.48 h 2.7 v 0"
        />
      </g>
    </svg>
  );
}
export default CeilingLightIcon;
