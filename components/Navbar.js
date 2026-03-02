'use client';
import { useState, useEffect } from 'react';

export default function Navbar({ site }) {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['home', 'menu', 'gallery', 'tentang', 'kontak'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 80 && rect.bottom >= 80) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when offcanvas open
    useEffect(() => {
        if (offcanvasOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [offcanvasOpen]);

    const navLinks = [
        { href: '#home', label: 'Home', id: 'home', icon: 'bi-house-fill' },
        { href: '#menu', label: 'Menu', id: 'menu', icon: 'bi-bowl-hot-fill' },
        { href: '#gallery', label: 'Gallery', id: 'gallery', icon: 'bi-images' },
        { href: '#tentang', label: 'Tentang', id: 'tentang', icon: 'bi-info-circle-fill' },
        { href: '#kontak', label: 'Kontak', id: 'kontak', icon: 'bi-telephone-fill' },
    ];

    const handleNavClick = () => setOffcanvasOpen(false);

    return (
        <>
            <nav
                className={`navbar navbar-custom fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}
                id="mainNavbar"
            >
                <div className="container">
                    {/* Brand */}
                    <a className="navbar-brand-custom" href="#home">
                        <span style={{ fontSize: '1.6rem' }}></span>
                        <div>
                            <span>{site.name}</span>
                            <div style={{ fontSize: '0.65rem', fontFamily: 'var(--font-main)', fontWeight: 500, color: 'var(--text-muted)', lineHeight: 1 }}>
                                {site.subtitle}
                            </div>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <ul className="navbar-nav d-none d-lg-flex flex-row align-items-center gap-1 ms-auto">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.id}>
                                <a
                                    href={link.href}
                                    className={`nav-link-custom ${activeSection === link.id ? 'active' : ''}`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="nav-item ms-2">
                            <a
                                href={`https://wa.me/${site.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp-custom"
                                style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}
                            >
                                <i className="bi bi-whatsapp"></i> Pesan
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Hamburger */}
                    <button
                        className="d-lg-none border-0 bg-transparent p-1"
                        onClick={() => setOffcanvasOpen(true)}
                        aria-label="Buka menu"
                        style={{ boxShadow: 'none' }}
                    >
                        <i className="bi bi-list" style={{ fontSize: '1.9rem', color: 'var(--secondary)' }}></i>
                    </button>
                </div>
            </nav>

            {/* === OFFCANVAS BACKDROP === */}
            <div
                onClick={() => setOffcanvasOpen(false)}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(26,18,8,0.55)',
                    zIndex: 1040,
                    opacity: offcanvasOpen ? 1 : 0,
                    pointerEvents: offcanvasOpen ? 'auto' : 'none',
                    transition: 'opacity 0.3s ease',
                    backdropFilter: 'blur(4px)',
                }}
            />

            {/* === OFFCANVAS PANEL (kanan) === */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '290px',
                    background: 'var(--off-white)',
                    zIndex: 1050,
                    transform: offcanvasOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/* Header offcanvas */}
                <div style={{
                    padding: '1.25rem 1.5rem',
                    borderBottom: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: 'white',
                }}>
                    <div className="navbar-brand-custom" style={{ fontSize: '1.1rem', gap: '0.4rem' }}>
                        <span></span>
                        <div>
                            <span style={{ fontSize: '1rem' }}>{site.name}</span>
                            <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', lineHeight: 1 }}>{site.subtitle}</div>
                        </div>
                    </div>
                    <button
                        onClick={() => setOffcanvasOpen(false)}
                        style={{
                            background: 'var(--primary-light)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '36px',
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--secondary)',
                            fontSize: '1.1rem',
                        }}
                        aria-label="Tutup menu"
                    >
                        <i className="bi bi-x-lg"></i>
                    </button>
                </div>

                {/* Nav links */}
                <nav style={{ flex: 1, padding: '1rem 0.75rem', overflowY: 'auto' }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={handleNavClick}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.85rem',
                                padding: '0.85rem 1rem',
                                borderRadius: 'var(--radius-sm)',
                                marginBottom: '0.25rem',
                                textDecoration: 'none',
                                fontWeight: activeSection === link.id ? 700 : 500,
                                color: activeSection === link.id ? 'var(--primary)' : 'var(--text-dark)',
                                background: activeSection === link.id ? 'var(--primary-light)' : 'transparent',
                                transition: 'var(--transition)',
                                fontSize: '0.95rem',
                                fontFamily: 'var(--font-main)',
                            }}
                        >
                            <i className={`bi ${link.icon}`} style={{ fontSize: '1rem', width: '20px', textAlign: 'center', color: activeSection === link.id ? 'var(--primary)' : 'var(--text-muted)' }}></i>
                            {link.label}
                            {activeSection === link.id && (
                                <i className="bi bi-chevron-right ms-auto" style={{ fontSize: '0.75rem', color: 'var(--primary)' }}></i>
                            )}
                        </a>
                    ))}
                </nav>

                {/* Footer offcanvas */}
                <div style={{
                    padding: '1.25rem',
                    borderTop: '1px solid var(--border-color)',
                    background: 'white',
                }}>
                    <a
                        href={`https://wa.me/${site.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp-custom"
                        style={{ width: '100%', justifyContent: 'center' }}
                        onClick={handleNavClick}
                    >
                        <i className="bi bi-whatsapp"></i> Pesan via WhatsApp
                    </a>
                    <p style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        <i className="bi bi-clock me-1"></i>{site.open_hours} setiap hari
                    </p>
                </div>
            </div>
        </>
    );
}
