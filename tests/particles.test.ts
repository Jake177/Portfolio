import assert from 'node:assert/strict'
import { test } from 'node:test'
import { createParticles, particleColor, projectParticle } from '../src/lib/particles.ts'

test('particle layout is reproducible and mobile uses the same starting pattern', () => {
  const desktop = createParticles(6200)
  assert.deepEqual(desktop, createParticles(6200))
  assert.deepEqual(createParticles(2400), desktop.slice(0, 2400))
})

test('the rotating cloud stays finite and within its artwork area', () => {
  const particles = createParticles(600)
  for (const time of [0, 10, 100, 3600, 86400]) {
    for (const particle of particles) {
      const point = projectParticle(particle, time)
      for (const coordinate of Object.values(point)) {
        assert.ok(Number.isFinite(coordinate))
        assert.ok(Math.abs(coordinate) < 1.05)
      }
      assert.match(particleColor(point.z), /^rgb\(\d+, \d+, \d+\)$/)
    }
  }
  assert.notDeepEqual(projectParticle(particles[0], 0), projectParticle(particles[0], 10))
})
