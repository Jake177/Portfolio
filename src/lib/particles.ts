export type Particle = { u: number; v: number; depth: number; size: number }

// A fixed seed gives the poster and the first animated frame the same shape.
export function createParticles(count: number): Particle[] {
  let seed = 177
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    return seed / 4294967296
  }

  return Array.from({ length: count }, () => ({
    u: random() * Math.PI * 2,
    v: random() * Math.PI * 2,
    depth: 0.65 + random() * 0.35,
    size: 0.55 + random() * 1.15,
  }))
}

export function projectParticle(particle: Particle, time: number) {
  const { u, v, depth } = particle
  const ring = 0.61 + Math.sin(u * 3 + time * 0.24) * 0.09
  const tube = (0.31 + Math.cos(u * 4 - time * 0.18) * 0.045) * depth
  const x = (ring + tube * Math.cos(v)) * Math.cos(u)
  const y = (ring + tube * Math.cos(v)) * Math.sin(u)
  const z = tube * Math.sin(v) + Math.sin(u * 2 + time * 0.2) * 0.13
  const tiltedY = y * Math.cos(0.72) - z * Math.sin(0.72)
  const tiltedZ = y * Math.sin(0.72) + z * Math.cos(0.72)
  const rotation = 0.35 + time * 0.09
  const turnedX = x * Math.cos(rotation) + tiltedZ * Math.sin(rotation)
  const turnedZ = -x * Math.sin(rotation) + tiltedZ * Math.cos(rotation)

  return {
    x: turnedX * Math.cos(-0.45) - tiltedY * Math.sin(-0.45),
    y: turnedX * Math.sin(-0.45) + tiltedY * Math.cos(-0.45),
    z: turnedZ,
  }
}

export function particleColor(z: number) {
  const light = Math.max(0, Math.min(1, (z + 0.85) / 1.7))
  return `rgb(${Math.round(83 + light * 150)}, ${Math.round(24 + light * 81)}, ${Math.round(58 + light * 103)})`
}
