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

// Calcule la rotation finale à appliquer pour que la roue s'arrête sur l'option gagnante
export function getSpinRotation(winningIndex, totalSlices, currentRotation) {
  const anglePerSlice = 360 / totalSlices;
  const middleAngle = winningIndex * anglePerSlice + anglePerSlice / 2;

  // Angle (mod 360) nécessaire pour que le milieu de la part gagnante arrive en haut (0°)
  const targetMod = (360 - middleAngle) % 360;

  // Position actuelle de la roue (mod 360)
  const currentMod = currentRotation % 360;

  // Distance à parcourir pour aller de la position actuelle à la position cible (toujours en avançant)
  let delta = targetMod - currentMod;
  if (delta < 0) delta += 360;

  // On ajoute plusieurs tours complets pour un effet visuel de rotation rapide
  const extraTurns = 5 * 360;

  return currentRotation + extraTurns + delta;
}