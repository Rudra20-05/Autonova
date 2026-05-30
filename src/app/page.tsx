/**
 * page.tsx (Home — placeholder)
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Home Page
 * Placeholder until Phase 2 page construction begins.
 * This verifies the foundation wires up correctly.
 * ─────────────────────────────────────────────────────────
 */

export default function HomePage() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100svh',
        fontFamily: 'var(--font-sans)',
        color: 'var(--color-fg-primary)',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 'var(--weight-semibold)',
            letterSpacing: 'var(--tracking-widest)',
            textTransform: 'uppercase',
            color: 'var(--color-brand-400)',
            marginBottom: 'var(--space-4)',
          }}
        >
          Phase 1 Foundation — Active
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-5xl)',
            fontWeight: 'var(--weight-black)',
            lineHeight: 'var(--leading-tight)',
            letterSpacing: 'var(--tracking-tighter)',
          }}
        >
          Autonova AI
        </h1>
        <p
          style={{
            marginTop: 'var(--space-4)',
            color: 'var(--color-fg-secondary)',
            fontSize: 'var(--text-lg)',
          }}
        >
          Design system loaded. Ready for Phase 2.
        </p>
      </div>
    </div>
  );
}
