'use client';
import { useEffect } from 'react';

export default function Hero({ site, hero }) {
    useEffect(() => {
        // Bootstrap JS for collapse/modal
        if (typeof window !== 'undefined') {
            import('bootstrap/dist/js/bootstrap.bundle.min.js');
        }
    }, []);

    const waMessage = encodeURIComponent(`Halo Mas Rio, `);
    const waUrl = `https://wa.me/${site.whatsapp}?text=${waMessage}`;

    return (
        <section id="home" className="hero-section" style={{ paddingTop: '70px' }}>
            {/* Background */}
            <div
                className="hero-bg"
                style={{ backgroundImage: `url('${hero.background_image}')` }}
            />
            <div className="hero-overlay" />

            <div className="container hero-content py-5">
                <div className="row align-items-center min-vh-100 py-5">
                    <div className="col-lg-7">
                        {/* Tag */}
                        <div className="hero-tag">
                            <i className="bi bi-star-fill"></i>
                            <span>Warung Makan Terfavorit Mahasiswa</span>
                        </div>

                        {/* Title */}
                        <h1 className="hero-title">
                            {site.name.split(' ').slice(0, 2).join(' ')}{' '}
                            <span>{site.name.split(' ').slice(2).join(' ')}</span>
                        </h1>

                        {/* Tagline */}
                        <p className="hero-tagline">
                            <i className="bi bi-quote" style={{ opacity: 0.6 }}></i>{' '}
                            {site.tagline}
                        </p>

                        {/* Description */}
                        <p className="hero-desc">{hero.description}</p>

                        {/* Payment badges */}
                        <div className="hero-badges">
                            {site.supports_qris && (
                                <span className="hero-badge">
                                    <i className="bi bi-qr-code"></i> Bisa Bayar QRIS
                                </span>
                            )}
                            <span className="hero-badge">
                                <i className="bi bi-cash-coin"></i> Tunai &amp; Transfer
                            </span>
                            <span className="hero-badge">
                                <i className="bi bi-clock-fill"></i> {site.open_hours}
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hero-cta">
                            <a href="#menu" className="btn-primary-custom">
                                <i className="bi bi-bowl-hot-fill"></i> Lihat Menu
                            </a>
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp-custom"
                            >
                                <i className="bi bi-whatsapp"></i> Pesan Sekarang
                            </a>
                        </div>
                    </div>

                    {/* Side stats */}
                    <div className="col-lg-5 d-none d-lg-flex justify-content-end">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', animation: 'fadeInUp 0.8s ease 0.6s forwards', opacity: 0 }}>
                            {[
                                { icon: 'bi-people-fill', value: '500+', label: 'Pelanggan Setia' },
                                { icon: 'bi-trophy-fill', value: '5★', label: 'Rating Pelanggan' },
                                { icon: 'bi-bag-heart-fill', value: '10+', label: 'Varian Menu' },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    style={{
                                        background: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(255,255,255,0.2)',
                                        borderRadius: 'var(--radius-md)',
                                        padding: '1.2rem 1.8rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        minWidth: '220px',
                                    }}
                                >
                                    <i className={`bi ${stat.icon}`} style={{ fontSize: '2rem', color: 'var(--accent)' }}></i>
                                    <div>
                                        <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'white', lineHeight: 1 }}>{stat.value}</div>
                                        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', marginTop: '0.2rem' }}>{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hero-scroll-indicator">
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.05em' }}>SCROLL</span>
                <i className="bi bi-chevron-double-down" style={{ fontSize: '1rem' }}></i>
            </div>
        </section>
    );
}
