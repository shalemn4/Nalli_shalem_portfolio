export default function Nav() {
  const links = [
    { href: '#about',      label: 'Origin'  },
    { href: '#skills',     label: 'Arsenal' },
    { href: '#projects',   label: 'Works'   },
    { href: '#experience', label: 'Journey' },
    { href: '#contact',    label: 'Connect' },
  ]
  return (
    <nav>
      <div className="nav-logo">N<span>.</span>S</div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </nav>
  )
}
