/**
 * Company branding data for white-label reports
 */
export interface CompanyBranding {
    id: string
    name: string
    logo_url: string | null
    primary_color: string | null
    secondary_color: string | null
    accent_color: string | null
}

/**
 * Report section for combined PDF
 */
export interface ReportSection {
    title: string
    element: HTMLElement
    orientation?: 'landscape' | 'portrait'
}
