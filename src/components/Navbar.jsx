import { navLinks } from '../data/navLinks'
import { useState, useRef, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)
  const [mobileSubDropdown, setMobileSubDropdown] = useState(null)
  const hideTimeout = useRef(null)

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])

  // Desktop hover handlers
  const handleDropdownEnter = (label) => {
    clearTimeout(hideTimeout.current)
    setOpenDropdown(label)
  }
  const handleDropdownLeave = () => {
    hideTimeout.current = setTimeout(() => setOpenDropdown(null), 220)
  }

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileDropdown(null)
    setMobileSubDropdown(null)
  }

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(prev => prev === label ? null : label)
    setMobileSubDropdown(null)
  }

  const toggleMobileSubDropdown = (label) => {
    setMobileSubDropdown(prev => prev === label ? null : label)
  }

  /* ── Desktop nav (hidden on mobile via CSS) ── */
  const desktopNav = (
    <div className="nav-bar">
      <nav aria-label="Main navigation">
        <ul className="primary-nav">
          {navLinks.map((item) =>
            item.children ? (
              <li
                key={item.label}
                className="has-dropdown"
                onMouseEnter={() => handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.href !== '#' ? (
                  <a href={item.href}>
                    {item.label} <i className="fas fa-chevron-down"></i>
                  </a>
                ) : (
                  <span>
                    {item.label} <i className="fas fa-chevron-down"></i>
                  </span>
                )}
                <ul
                  className={`dropdown${item.twoCol ? ' two-col' : ''}`}
                  style={{ display: openDropdown === item.label ? (item.twoCol ? 'flex' : 'block') : 'none' }}
                >
                  {item.children.map((child) =>
                    child.subdropdown ? (
                      <li key={child.label} className="has-subdropdown" onMouseEnter={e => e.stopPropagation()}>
                        <a href={child.href}><i className={child.icon}></i> {child.label}</a>
                        <ul className="subdropdown">
                          {child.subdropdown.map((sub) => (
                            <li key={sub.label}><a href={sub.href}>{sub.label}</a></li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={child.label}>
                        <a href={child.href}><i className={child.icon}></i> {child.label}</a>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ) : (
              <li key={item.label}><a href={item.href}>{item.label}</a></li>
            )
          )}
        </ul>
      </nav>
    </div>
  )

  /* ── Mobile drawer (hidden on desktop via CSS) ── */
  const mobileDrawer = (
    <>
      <a href="https://richmond.gov.za/report-an-issue/" className="mobile-cta-btn btn">Report An Issue</a>

      <button
        className={`mobile-hamburger${mobileOpen ? ' is-open' : ''}`}
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <span /><span /><span />
      </button>

      {/* Backdrop */}
      <div className={`mobile-backdrop${mobileOpen ? ' visible' : ''}`} onClick={closeMobile} />

      {/* Drawer panel */}
      <nav className={`mobile-drawer${mobileOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">Menu</span>
          <button className="mobile-drawer-close" onClick={closeMobile} aria-label="Close menu">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <ul className="mobile-nav-list">
          {navLinks.map((item) =>
            item.children ? (
              <li key={item.label} className="mobile-nav-item">
                <button
                  className={`mobile-nav-link mobile-nav-parent${mobileDropdown === item.label ? ' open' : ''}`}
                  onClick={() => toggleMobileDropdown(item.label)}
                >
                  {item.label}
                  <i className={`fas fa-chevron-down mobile-chevron${mobileDropdown === item.label ? ' rotated' : ''}`}></i>
                </button>

                <ul className={`mobile-sub-list${mobileDropdown === item.label ? ' expanded' : ''}`}>
                  {item.children.map((child) =>
                    child.subdropdown ? (
                      <li key={child.label} className="mobile-nav-item">
                        <button
                          className={`mobile-nav-sublink mobile-nav-parent${mobileSubDropdown === child.label ? ' open' : ''}`}
                          onClick={() => toggleMobileSubDropdown(child.label)}
                        >
                          <i className={child.icon}></i> {child.label}
                          <i className={`fas fa-chevron-down mobile-chevron${mobileSubDropdown === child.label ? ' rotated' : ''}`}></i>
                        </button>
                        <ul className={`mobile-sub-list nested${mobileSubDropdown === child.label ? ' expanded' : ''}`}>
                          {child.subdropdown.map((sub) => (
                            <li key={sub.label}>
                              <a href={sub.href} className="mobile-nav-sublink" onClick={closeMobile}>{sub.label}</a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ) : (
                      <li key={child.label}>
                        <a href={child.href} className="mobile-nav-sublink" onClick={closeMobile}>
                          <i className={child.icon}></i> {child.label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </li>
            ) : (
              <li key={item.label} className="mobile-nav-item">
                <a href={item.href} className="mobile-nav-link" onClick={closeMobile}>{item.label}</a>
              </li>
            )
          )}
        </ul>

        <div className="mobile-drawer-footer">
          <a href="https://richmond.gov.za/report-an-issue/" className="btn mobile-cta">Report An Issue</a>
          <p><i className="fas fa-phone"></i> (033) 212 2155</p>
        </div>
      </nav>
    </>
  )

  return (
    <div className="header-inner">
      <a href="#" className="logo">
        <img
          src={logo}
          alt="uMhlabuyalingana Municipality Logo"
        />
      </a>
      {desktopNav}
      {mobileDrawer}
    </div>
  )
}
