const paths = {
  asterisk: 'M12 2v20M2 12h20M5 5l14 14M5 19 19 5',
  arrow: 'M5 19 19 5M5 5h14v14',
  'arrow-down': 'M19 5 5 19M5 5v14h14',
  play: 'm7 4 13 8-13 8Z',
  pause: 'M8 4v16M16 4v16',
  plus: 'M12 4v16M4 12h16',
}

// SVG paths avoid platform-dependent emoji/font substitution.
export default function Icon({ name }: { name: keyof typeof paths }) {
  return (
    <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  )
}
