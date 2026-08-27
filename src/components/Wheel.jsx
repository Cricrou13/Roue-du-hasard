import { getSlicePath, getSliceColor, getLabelPosition } from '../utils/wheelHelpers';

function Wheel({ options }) {
  const size = 300;
  const radius = size / 2;
  const center = size / 2;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {options.map((option, index) => {
        const label = getLabelPosition(index, options.length, radius, center, center);

        return (
          <g key={index}>
            <path
              d={getSlicePath(index, options.length, radius, center, center)}
              fill={getSliceColor(index)}
            />
            <text
              x={label.x}
              y={label.y}
              fill="#fff"
              fontSize="14"
              textAnchor="middle"
              transform={`rotate(${label.rotation}, ${label.x}, ${label.y})`}
            >
              {option}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export default Wheel;