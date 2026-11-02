import assert from 'node:assert/strict'
import { test } from 'node:test'
import { scrollProgress } from '../src/lib/scroll-motion.ts'
import { createParticles, projectParticle } from '../src/lib/particles.ts'

test('scroll motion clamps its range, reverses, and completes at a shortened page end', () => {
  assert.equal(scrollProgress(-30, 100, 500), 0)
  assert.equal(scrollProgress(700, 100, 500), 1)
  assert.equal(scrollProgress(300, 100, 500), 0.5)
  assert.equal(scrollProgress(200, 100, 500), 0.25)
  assert.equal(scrollProgress(0, -100, 0), 1)
  assert.equal(scrollProgress(0, 0, 0), 1)
})

test('scroll changes the sculpture without changing its default pose or leaving its bounds', () => {
  const particles = createParticles(600)
  assert.deepEqual(projectParticle(particles[0], 0), projectParticle(particles[0], 0, 0))
  assert.notDeepEqual(projectParticle(particles[0], 0, 0), projectParticle(particles[0], 0, 0.5))
  for (const progress of [0, 0.25, 0.5, 0.75, 1]) {
    for (const particle of particles) {
      for (const value of Object.values(projectParticle(particle, 100, progress))) {
        assert.ok(Number.isFinite(value) && Math.abs(value) < 1.05)
      }
    }
  }
})
