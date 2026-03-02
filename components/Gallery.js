'use client';
import Image from 'next/image';

export default function Gallery({ gallery }) {
    return (
        <section id="gallery" className="gallery-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="section-divider"></div>
                    <h2 className="section-title">Suasana Tempat Kami</h2>
                    <p className="section-subtitle">
                        Nyaman, bersih, dan cocok untuk nongkrong bareng teman kampus
                    </p>
                </div>

                <div className="gallery-equal-grid">
                    {gallery.map((imgUrl, idx) => (
                        <div className="gallery-equal-item" key={idx}>
                            <Image
                                src={imgUrl}
                                alt={`Suasana Tempat Mie Ayam Mas Rio ${idx + 1}`}
                                fill
                                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 25vw"
                                style={{ objectFit: 'cover' }}
                                loading="lazy"
                            />
                            <div className="gallery-overlay">
                                <i className="bi bi-zoom-in"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
