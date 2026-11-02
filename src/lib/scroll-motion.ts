export function scrollProgress(position: number, start: number, end: number) {
  if (end <= start) return position >= end ? 1 : 0
  return Math.max(0, Math.min(1, (position - start) / (end - start)))
}
