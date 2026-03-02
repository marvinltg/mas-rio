export default function Footer({ site }) {
    const year = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row align-items-center justify-content-between g-2">
                    <div className="col-auto">
                        <span>
                            <strong style={{ color: 'rgba(255,255,255,0.85)' }}>{site.name}</strong> — {site.subtitle}
                        </span>
                    </div>
                    <div className="col-auto">
                        <span>© {year} All rights reserved</span>
                    </div>
                    <div className="col-auto d-flex gap-3">
                        <a href="#home" title="Home">
                            <i className="bi bi-house-fill"></i>
                        </a>
                        <a
                            href={`https://wa.me/${site.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="WhatsApp"
                            style={{ color: '#25D366' }}
                        >
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
