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
                        <span>
                            <a href="https://github.com/marvinltg" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.85)' }}>
                                <strong style={{ color: 'rgba(255,255,255,0.85)' }}>Developed by</strong> Marvinltg_
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
