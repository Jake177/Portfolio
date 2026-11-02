export function expandFrame(width: number, height: number, progress: number) {
  const p = Math.max(0, Math.min(1, progress))
  const eased = p * p * (3 - 2 * p)
  const startWidth = Math.min(width - 36, height * 0.72, 640)
  const startHeight = startWidth
  const startLeft = (width - startWidth) / 2
  const startTop = (height - startHeight) / 2

  return {
    left: startLeft * (1 - eased),
    top: startTop * (1 - eased),
    width: startWidth + (width - startWidth) * eased,
    height: startHeight + (height - startHeight) * eased,
  }
}
