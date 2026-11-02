export function expandFrame(width: number, height: number, progress: number) {
  const compact = width <= 760
  const p = Math.max(0, Math.min(1, progress))
  const eased = p * p * (3 - 2 * p)
  const startWidth = compact ? width - 48 : Math.min(width * 0.42, 640)
  const startHeight = Math.min(height * (compact ? 0.46 : 0.56), 480)
  const startLeft = compact ? 24 : width - startWidth - Math.min(width * 0.05, 72)
  const startTop = height * (compact ? 0.43 : 0.14)

  return {
    left: startLeft * (1 - eased),
    top: startTop * (1 - eased),
    width: startWidth + (width - startWidth) * eased,
    height: startHeight + (height - startHeight) * eased,
  }
}
