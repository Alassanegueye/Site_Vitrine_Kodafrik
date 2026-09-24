import './Wave.css'

// Deux tracés pour éviter que les reliefs se répètent à l'identique.
const PATHS = {
  1: 'M0,52 C220,104 430,8 700,34 C940,57 1180,110 1440,44 L1440,120 L0,120 Z',
  2: 'M0,38 C260,96 520,102 760,62 C1010,20 1230,18 1440,58 L1440,120 L0,120 Z',
}

// Posée en absolu au bas d'une section : le fond de la section reste
// continu derrière le tracé, qui porte lui la couleur de la section suivante.
export default function Wave({ fill = 'var(--surface)', variant = 1 }) {
  return (
    <div className="wave" aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" role="presentation">
        <path d={PATHS[variant] ?? PATHS[1]} fill={fill} />
      </svg>
    </div>
  )
}
