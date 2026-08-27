// Convertit un angle en degrés vers des coordonnées x/y sur un cercle
function getCoordinatesForAngle(angle, radius, centerX, centerY) {
  const angleInRadians = (angle - 90) * (Math.PI / 180);
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

// Génère le "path" SVG (la forme) d'une part de la roue
export function getSlicePath(index, totalSlices, radius, centerX, centerY) {
  const anglePerSlice = 360 / totalSlices;
  const startAngle = index * anglePerSlice;
  const endAngle = startAngle + anglePerSlice;

  const start = getCoordinatesForAngle(startAngle, radius, centerX, centerY);
  const end = getCoordinatesForAngle(endAngle, radius, centerX, centerY);

  const largeArcFlag = anglePerSlice > 180 ? 1 : 0;

  return `M ${centerX} ${centerY} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
}

// Génère une couleur différente pour chaque part
export function getSliceColor(index) {
  const colors = ['#4F46E5', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];
  return colors[index % colors.length];
}

// Calcule la position et la rotation du texte pour une part donnée
export function getLabelPosition(index, totalSlices, radius, centerX, centerY) {
  const anglePerSlice = 360 / totalSlices;
  const middleAngle = index * anglePerSlice + anglePerSlice / 2;
  const labelRadius = radius * 0.65;

  const angleInRadians = (middleAngle - 90) * (Math.PI / 180);
  const x = centerX + labelRadius * Math.cos(angleInRadians);
  const y = centerY + labelRadius * Math.sin(angleInRadians);

  return { x, y, rotation: middleAngle };
}