export default function Features({ site }) {
    const features = [
        {
            icon: 'bi-wallet2',
            color: '#E8941A',
            title: 'Harga Ramah Mahasiswa',
            desc: 'Mulai dari Rp 3.000! Kenyang dan puas tanpa khawatir kantong jebol di akhir bulan.',
        },
        {
            icon: 'bi-award-fill',
            color: '#7B4F1E',
            title: 'Porsi Besar & Kenyang',
            desc: 'Porsi jumbo khas wong Sragen — dijamin kenyang sampai malam setelah kuliah seharian.',
        },
        {
            icon: 'bi-geo-alt-fill',
            color: '#E8941A',
            title: 'Lokasi Super Strategis',
            desc: 'Tepat dekat area kampus, mudah dijangkau jalan kaki atau naik motor dari kos.',
        },
        {
            icon: 'bi-qr-code-scan',
            color: '#7B4F1E',
            title: 'Pembayaran QRIS Tersedia',
            desc: 'Bayar praktis via QRIS, transfer bank, atau tunai — semua diterima dengan senang hati.',
        },
    ];

    return (
        <section id="tentang" className="features-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="section-divider"></div>
                    <h2 className="section-title">Kenapa Pilih Kami?</h2>
                    <p className="section-subtitle">
                        Lebih dari sekedar mie ayam biasa — ini adalah pengalaman makan yang berkesan
                    </p>
                </div>

                <div className="row g-4">
                    {features.map((f, i) => (
                        <div className="col-sm-6 col-lg-3" key={i}>
                            <div className="feature-card">
                                <div className="feature-icon" style={{ background: `linear-gradient(135deg, ${f.color}22, ${f.color}44)` }}>
                                    <i
                                        className={`bi ${f.icon}`}
                                        style={{ fontSize: '1.8rem', color: f.color }}
                                    ></i>
                                </div>
                                <h3 className="feature-title">{f.title}</h3>
                                <p className="feature-desc">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tagline strip */}
                <div
                    className="mt-5 p-4 rounded-4 text-center"
                    style={{
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
                        color: 'white',
                    }}
                >
                    <div className="row align-items-center justify-content-center g-3">
                        <div className="col-auto">
                            <span style={{ fontSize: '2rem' }}></span>
                        </div>
                        <div className="col-auto">
                            <strong style={{ fontSize: '1.1rem', display: 'block' }}>
                                {site.name} — Buka Setiap Hari
                            </strong>
                            <span style={{ opacity: 0.85, fontSize: '0.95rem' }}>
                                <i className="bi bi-clock me-1"></i>{site.open_hours} •{' '}
                                <i className="bi bi-geo-alt me-1"></i>{site.address}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
