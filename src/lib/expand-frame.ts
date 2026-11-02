export function expandFrame(width: number, height: number, progress: number) {
  const compact = width <= 760
  const p = Math.max(0, Math.min(1, progress))
  const eased = p * p * (3 - 2 * p)
  const startWidth = compact ? width - 36 : Math.min(width * 0.7, 1120)
  const startHeight = Math.min(height * 0.58, 520)
  const startLeft = (width - startWidth) / 2
  const startTop = (height - startHeight) / 2

  return {
    left: startLeft * (1 - eased),
    top: startTop * (1 - eased),
    width: startWidth + (width - startWidth) * eased,
    height: startHeight + (height - startHeight) * eased,
  }
}
