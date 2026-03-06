import { describe, it, expect } from 'vitest'
import {
    getReportSchema,
    getRequiredDocuments,
    getSectionFields,
} from '../schemas'

describe('getReportSchema', () => {
    it('returns situation schema', () => {
        const schema = getReportSchema('situation')
        expect(schema).not.toBeNull()
        expect(schema!.id).toBe('situation')
        expect(schema!.label).toBe('Estado de Situación')
    })

    it('returns renta schema', () => {
        const schema = getReportSchema('renta')
        expect(schema).not.toBeNull()
        expect(schema!.id).toBe('renta')
        expect(schema!.label).toBe('Informe de Renta')
    })

    it('returns null for unknown schema', () => {
        expect(getReportSchema('nonexistent')).toBeNull()
    })
})

describe('getRequiredDocuments', () => {
    it('returns required documents for situation schema', () => {
        const schema = getReportSchema('situation')!
        const docs = getRequiredDocuments(schema)

        expect(docs.perPerson).toContain('cedula-identidad')
        expect(docs.perPerson).toContain('liquidaciones-sueldo')
        expect(docs.shared.length).toBeGreaterThan(0)
    })

    it('includes source_doctypes from sections', () => {
        const schema = getReportSchema('situation')!
        const docs = getRequiredDocuments(schema)

        // padron is listed as source_doctype in vehiculos section
        expect(docs.shared).toContain('padron')
    })

    it('includes field source doctypes', () => {
        const schema = getReportSchema('situation')!
        const docs = getRequiredDocuments(schema)

        // certificado-matrimonio is used in field sources
        expect(docs.perPerson).toContain('certificado-matrimonio')
    })
})

describe('getSectionFields', () => {
    it('returns top-level fields', () => {
        const schema = getReportSchema('situation')!
        const section = schema.sections['personales']
        const fields = getSectionFields(section)

        expect(fields).toHaveProperty('nombres_apellidos')
        expect(fields).toHaveProperty('cedula_identidad')
    })

    it('includes subsection fields', () => {
        const schema = getReportSchema('situation')!
        const section = schema.sections['personales']
        const fields = getSectionFields(section)

        // From domicilio subsection
        expect(fields).toHaveProperty('direccion')
        expect(fields).toHaveProperty('comuna')

        // From estado_civil subsection
        expect(fields).toHaveProperty('estado_civil')
    })

    it('includes card_fields and detail_fields', () => {
        const schema = getReportSchema('renta')!
        const section = schema.sections['solicitantes']
        const fields = getSectionFields(section)

        expect(fields).toHaveProperty('name')
        expect(fields).toHaveProperty('rut')
        expect(fields).toHaveProperty('nacionalidad')
    })
})
