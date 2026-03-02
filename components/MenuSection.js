'use client';
import { useState } from 'react';
import Image from 'next/image';

const CATEGORY_LABELS = {
    mie: 'Mie & Bakso',
    nasi: 'Nasi',
    minuman: 'Minuman',
};

function formatPrice(price) {
    return price.toLocaleString('id-ID');
}

function MenuCard({ item, category }) {
    return (
        <div className="menu-card h-100">
            <div className="menu-card-img-wrapper">
                <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                />
                <span className="category-badge">{CATEGORY_LABELS[category]?.split(' ')[0]}</span>
            </div>
            <div className="menu-card-body">
                <h3 className="menu-card-name">{item.name}</h3>
                <p className="menu-card-desc">{item.description}</p>
                <div className="menu-card-price">{formatPrice(item.price)}</div>
            </div>
        </div>
    );
}

export default function MenuSection({ menu }) {
    const [activeTab, setActiveTab] = useState('mie');
    const [showAll, setShowAll] = useState(false);

    const PREVIEW_COUNT = 6;
    const allItems = menu[activeTab] || [];
    const visibleItems = showAll ? allItems : allItems.slice(0, PREVIEW_COUNT);
    const hasMore = allItems.length > PREVIEW_COUNT;

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowAll(false);
    };

    return (
        <section id="menu" className="menu-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="section-divider"></div>
                    <h2 className="section-title">Menu Pilihan Kami</h2>
                    <p className="section-subtitle">
                        Dari mie ayam khas Sragen hingga nasi dan minuman segar — semua ada!
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="menu-category-tabs">
                    {Object.keys(menu).map((cat) => (
                        <button
                            key={cat}
                            className={`menu-tab ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => handleTabChange(cat)}
                            aria-pressed={activeTab === cat}
                        >
                            {CATEGORY_LABELS[cat] || cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <div className="row g-4">
                    {visibleItems.map((item, idx) => (
                        <div
                            key={`${activeTab}-${idx}`}
                            className="col-sm-6 col-lg-4"
                            style={{
                                animation: `fadeInUp 0.4s ease ${idx * 0.05}s both`,
                            }}
                        >
                            <MenuCard item={item} category={activeTab} />
                        </div>
                    ))}
                </div>

                {/* Show More / Show Less */}
                {hasMore && (
                    <div className="text-center mt-4">
                        <button
                            className={`btn-outline-custom ${showAll ? '' : 'btn-primary-custom'}`}
                            onClick={() => setShowAll(!showAll)}
                            style={showAll ? {} : { background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: 'white', border: 'none' }}
                        >
                            {showAll ? (
                                <>
                                    <i className="bi bi-chevron-up"></i> Tampilkan Lebih Sedikit
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-grid-3x3-gap-fill"></i> Lihat Semua Menu ({allItems.length} Item)
                                </>
                            )}
                        </button>
                    </div>
                )}


            </div>
        </section>
    );
}
