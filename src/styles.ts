// ============================================================================
// Shared Report Table Styles
// ============================================================================
// Single source of truth for all report table styling.
// Import `T` and use its properties instead of hardcoding class strings.

export const T = {
    // ---------------------------------------------------------------------------
    // Table base
    // ---------------------------------------------------------------------------
    table: 'w-full text-xs',

    // ---------------------------------------------------------------------------
    // Accordion header
    // ---------------------------------------------------------------------------
    /** Title text in the accordion header bar */
    headerTitle: 'font-normal text-xs truncate',
    /** Stats/summary values shown next to the title */
    headerStat: 'font-normal text-xs',
    /** Label before a stat value (e.g. "ENE:", "Total:") */
    headerStatLabel: 'font-normal text-xs uppercase',
    /** Count badge (e.g. "3 deudas", "5 documentos") */
    headerCount: 'font-medium text-xs',

    // ---------------------------------------------------------------------------
    // Column headers (thead)
    // ---------------------------------------------------------------------------
    th: 'text-gray-500 font-medium text-xs uppercase',

    // ---------------------------------------------------------------------------
    // Body cells
    // ---------------------------------------------------------------------------
    /** Label cell wrapper — prevents overflow in fixed-width columns */
    cellLabel: 'overflow-hidden',
    /** Text inputs inside data rows (entity name, label, type) */
    input: 'bg-transparent border-none outline-none text-xs truncate',
    /** Input with font-medium emphasis (row label, entity name) */
    inputLabel: 'bg-transparent border-none outline-none text-xs font-medium truncate',
    /** Placeholder/add-row inputs */
    inputPlaceholder: 'bg-transparent border-none outline-none text-xs text-gray-500 placeholder-gray-400 truncate',
    /** Row label in monthlytable (smaller, muted) */
    rowLabel: 'bg-transparent border-none outline-none text-xs font-medium text-gray-600 truncate',

    // ---------------------------------------------------------------------------
    // Section headers inside body (e.g. "Rentas Líquidas", "Obligaciones")
    // ---------------------------------------------------------------------------
    sectionTitle: 'font-normal text-xs',

    // ---------------------------------------------------------------------------
    // Totals row
    // ---------------------------------------------------------------------------
    totalLabel: 'font-medium text-xs',
    totalValue: 'font-medium text-xs',

    // ---------------------------------------------------------------------------
    // Footer totals (bold)
    // ---------------------------------------------------------------------------
    footerLabel: 'font-bold',
    footerValue: 'font-bold',

    // ---------------------------------------------------------------------------
    // Miscellaneous
    // ---------------------------------------------------------------------------
    /** Small label text (descriptions, muted info) */
    muted: 'text-xs text-gray-600',
    /** Empty state italic */
    empty: 'text-xs text-gray-400 italic',
    /** Value text inside compact cards */
    cardLabel: 'text-xs font-medium',
    cardValue: 'text-xs font-semibold',
} as const
