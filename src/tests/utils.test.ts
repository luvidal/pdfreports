import { describe, it, expect } from 'vitest'
import {
    displayValue,
    displayCurrency,
    displayCurrencyCompact,
    toTitleCase,
    displayUF,
    displayDate,
    calculateAge,
} from '../utils'

describe('displayValue', () => {
    it('returns empty string for null/undefined/empty', () => {
        expect(displayValue(null)).toBe('')
        expect(displayValue(undefined)).toBe('')
        expect(displayValue('')).toBe('')
    })

    it('converts values to string', () => {
        expect(displayValue(42)).toBe('42')
        expect(displayValue('hello')).toBe('hello')
        expect(displayValue(true)).toBe('true')
    })
})

describe('displayCurrency', () => {
    it('returns empty string for null/undefined', () => {
        expect(displayCurrency(null)).toBe('')
        expect(displayCurrency(undefined)).toBe('')
    })

    it('formats currency with Chilean locale', () => {
        const result = displayCurrency(1000000)
        expect(result).toMatch(/^\$ /)
        expect(result).toContain('1')
    })
})

describe('displayCurrencyCompact', () => {
    it('returns dash for null/undefined', () => {
        expect(displayCurrencyCompact(null)).toBe('—')
        expect(displayCurrencyCompact(undefined)).toBe('—')
    })

    it('rounds to nearest thousand', () => {
        expect(displayCurrencyCompact(1_393_231)).toMatch(/\$1/)
        expect(displayCurrencyCompact(150)).toBe('$0')
    })

    it('shows negative sign for deductions', () => {
        const result = displayCurrencyCompact(500_000, true)
        expect(result).toMatch(/^-\$/)
    })
})

describe('toTitleCase', () => {
    it('converts uppercase to title case', () => {
        expect(toTitleCase('HELLO WORLD')).toBe('Hello World')
    })

    it('converts snake_case to title case', () => {
        expect(toTitleCase('hello_world')).toBe('Hello World')
    })

    it('handles Spanish accented characters correctly', () => {
        expect(toTitleCase('RETENCIÓN')).toBe('Retención')
        expect(toTitleCase('ASIGNACIÓN LEY 19464')).toBe('Asignación Ley 19464')
    })
})

describe('displayUF', () => {
    it('returns empty string for null/undefined', () => {
        expect(displayUF(null)).toBe('')
        expect(displayUF(undefined)).toBe('')
    })

    it('formats with UF suffix and 2 decimals', () => {
        const result = displayUF(1500.5)
        expect(result).toContain('UF')
    })
})

describe('displayDate', () => {
    it('returns empty string for falsy input', () => {
        expect(displayDate(null)).toBe('')
        expect(displayDate(undefined)).toBe('')
        expect(displayDate('')).toBe('')
    })

    it('formats valid date string', () => {
        const result = displayDate('2024-01-15')
        // Result is locale-dependent (dd-mm-yyyy in es-CL)
        expect(result).toMatch(/2024/)
        expect(result).toMatch(/01/)
    })

    it('returns original string for invalid date', () => {
        expect(displayDate('not-a-date')).toBe('not-a-date')
    })
})

describe('calculateAge', () => {
    it('returns dash for empty input', () => {
        expect(calculateAge('')).toBe('—')
    })

    it('returns dash for invalid date', () => {
        expect(calculateAge('not-a-date')).toBe('—')
    })

    it('calculates age correctly', () => {
        const thirtyYearsAgo = new Date()
        thirtyYearsAgo.setFullYear(thirtyYearsAgo.getFullYear() - 30)
        thirtyYearsAgo.setMonth(0, 1) // Jan 1
        const result = calculateAge(thirtyYearsAgo.toISOString())
        expect(result).toMatch(/\d+ años/)
    })
})
