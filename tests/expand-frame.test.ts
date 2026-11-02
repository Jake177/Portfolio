import assert from 'node:assert/strict'
import { test } from 'node:test'
import { expandFrame } from '../src/lib/expand-frame.ts'

test('the television starts within the stage and expands to full bleed on desktop and mobile', () => {
  for (const [width, height] of [[1440, 812], [375, 768], [320, 664]]) {
    let previousArea = 0
    for (const progress of [0, 0.25, 0.5, 0.75, 1]) {
      const box = expandFrame(width, height, progress)
      assert.ok(box.left >= 0 && box.top >= 0)
      assert.ok(box.left + box.width <= width + 0.001)
      assert.ok(box.top + box.height <= height + 0.001)
      assert.ok(box.width * box.height >= previousArea)
      previousArea = box.width * box.height
    }
    assert.deepEqual(expandFrame(width, height, 1), { left: 0, top: 0, width, height })
    assert.deepEqual(expandFrame(width, height, -1), expandFrame(width, height, 0))
    assert.deepEqual(expandFrame(width, height, 2), expandFrame(width, height, 1))
  }
})
