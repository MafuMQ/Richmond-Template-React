const externalLinks = [
  { href: 'https://www.gov.za/', label: 'Government' },
  { href: 'http://www.kznonline.gov.za/', label: 'KZN Province' },
  { href: 'https://www.kzncogta.gov.za/', label: 'KZN COGTA' },
  { href: 'https://www.seda.org.za/', label: 'SEDA' },
  { href: 'https://www.salga.org.za/', label: 'SALGA' },
  { href: 'https://umkhanyakude.gov.za/', label: 'uMkhanyakude District' },
]

const internalLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us/', label: 'About Umhlabuyalingana' },
  { href: '/departments/', label: 'Departments' },
  { href: '/scm/', label: 'SCM' },
  { href: '#documents', label: 'Documents' },
  { href: '/vacancies/', label: 'Vacancies' },
]

const contactItems = [
  { icon: 'fas fa-phone', text: '(035) 592 0680' },
  { icon: 'fas fa-phone', text: '(035) 592 9628' },
  { icon: 'fas fa-fax', text: '(035) 592 0672' },
  { icon: 'fas fa-envelope', text: 'info@mhlabuyalingana.gov.za', href: 'mailto:info@mhlabuyalingana.gov.za' },
  { icon: 'fas fa-envelope-open-text', text: 'Private Bag X901, KwaNgwanase, 3973' },
  { icon: 'fas fa-location-dot', text: 'Main Road R22, KwaNgwanase, 3973' },
]

const socialLinks = [
  { href: '#', icon: 'fab fa-facebook-f' },
  { href: '#', icon: 'fab fa-x-twitter' },
  { href: '#', icon: 'fab fa-instagram' },
  { href: '#', icon: 'fab fa-youtube' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-col">
            <h3>External Links</h3>
            <ul>
              {externalLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Internal Links</h3>
            <ul>
              {internalLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Us</h3>
            <ul>
              {contactItems.map((c) => (
                <li key={c.text}>
                  <i className={c.icon}></i>{' '}
                  {c.href ? <a href={c.href}>{c.text}</a> : c.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-social">
              {socialLinks.map((s) => (
                <a key={s.icon} href={s.href} target="_blank" rel="noreferrer">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <p>
            All rights reserved 2025. uMhlabuyalingana Municipality. Website powered by{' '}
            <a href="https://www.novadataco.co.za/" target="_blank" rel="noreferrer">
              NovaData Co
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
