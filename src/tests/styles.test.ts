import { describe, it, expect } from 'vitest'
import { T } from '../styles'

describe('T (table styles)', () => {
    it('exports all required style keys', () => {
        expect(T.table).toBeDefined()
        expect(T.th).toBeDefined()
        expect(T.input).toBeDefined()
        expect(T.totalLabel).toBeDefined()
        expect(T.footerLabel).toBeDefined()
        expect(T.muted).toBeDefined()
        expect(T.empty).toBeDefined()
    })

    it('uses text-xs as base size', () => {
        expect(T.table).toContain('text-xs')
        expect(T.th).toContain('text-xs')
        expect(T.input).toContain('text-xs')
    })

    it('uses bg-transparent for inputs', () => {
        expect(T.input).toContain('bg-transparent')
        expect(T.inputLabel).toContain('bg-transparent')
        expect(T.rowLabel).toContain('bg-transparent')
    })
})
