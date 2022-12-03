export const EmailIcon = ({
  size,
  fill,
  stroke = "currentColor",
  width = 24,
  height = 24,
  ...props
}: {
  size?: number;
  fill?: string;
  width?: number;
  height?: number;
  stroke?: string;
}) => {
  return (
    <svg
      className="h-4 w-4 text-white"
      fill={fill}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke={stroke}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
};
