import { getSlicePath, getSliceColor, getLabelPosition } from '../utils/wheelHelpers';
import './Wheel.css';

function Wheel({ options, rotation }) {
  const size = 300;
  const radius = size / 2;
  const center = size / 2;

  return (
    <div className="wheel-container">
      <div className="wheel-pointer" />
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)',
        }}
      >
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
    </div>
  );
}

export default Wheel;