// Fixed, page-wide ambient backdrop: soft drifting gradient orbs + a faint
// perspective grid. Purely decorative (aria-hidden), sits behind all content.
export default function FuturisticBackground() {
  return (
    <div className="fx-backdrop" aria-hidden="true">
      <div className="fx-grid" />
      <div className="fx-orb fx-orb--teal" />
      <div className="fx-orb fx-orb--gold" />
      <div className="fx-orb fx-orb--violet" />
    </div>
  );
}
