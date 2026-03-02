export default function Contact({ site, mapsUrl }) {
    const waMessage = encodeURIComponent('Halo Mas Rio! Saya mau tanya-tanya 😊');
    const waUrl = `https://wa.me/${site.whatsapp}?text=${waMessage}`;

    const contactItems = [
        {
            icon: 'bi-geo-alt-fill',
            label: 'Alamat',
            value: site.address,
        },
        {
            icon: 'bi-clock-fill',
            label: 'Jam Buka',
            value: `Setiap Hari ${site.open_hours}`,
        },
        {
            icon: 'bi-whatsapp',
            label: 'WhatsApp',
            value: `+${site.whatsapp}`,
            href: waUrl,
        },
        {
            icon: 'bi-cash-coin',
            label: 'Pembayaran',
            value: `Tunai${site.supports_qris ? ' & QRIS' : ''} & Transfer`,
        },
    ];

    return (
        <section id="kontak" className="contact-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="section-divider"></div>
                    <h2 className="section-title">Hubungi &amp; Temukan Kami</h2>
                    <p className="section-subtitle">
                        Kami siap melayani kamu setiap hari — mampir atau pesan sekarang!
                    </p>
                </div>

                <div className="row g-4 align-items-start">
                    {/* Contact Info */}
                    <div className="col-lg-5">
                        <div className="d-flex flex-column gap-3">
                            {contactItems.map((item, i) => (
                                <div className="contact-card" key={i}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="contact-icon">
                                            <i className={`bi ${item.icon}`}></i>
                                        </div>
                                        <div>
                                            <div className="contact-info-label">{item.label}</div>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="contact-info-value"
                                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <div className="contact-info-value">{item.value}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Payment info */}
                            <div className="contact-card">
                                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', marginBottom: '0.75rem' }}>
                                    Pembayaran tersedia:
                                </p>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="payment-badge">
                                        <i className="bi bi-cash-coin"></i> Tunai
                                    </span>
                                    {site.supports_qris && (
                                        <span className="payment-badge">
                                            <i className="bi bi-qr-code-scan"></i> QRIS
                                        </span>
                                    )}
                                    <span className="payment-badge">
                                        <i className="bi bi-bank2"></i> Transfer
                                    </span>
                                </div>
                            </div>

                            {/* WA CTA */}
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-whatsapp-custom justify-content-center mt-2"
                                style={{ width: '100%' }}
                            >
                                <i className="bi bi-whatsapp"></i>
                                Chat Kami di WhatsApp
                            </a>
                        </div>
                    </div>

                    {/* Maps */}
                    <div className="col-lg-7">
                        <div className="maps-wrapper" style={{ height: '450px' }}>
                            <iframe
                                src={mapsUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Mie Ayam Mas Rio"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
