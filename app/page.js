import fs from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MenuSection from '@/components/MenuSection';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

async function getConfig() {
  const filePath = path.join(process.cwd(), 'public', 'config-web.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export default async function Home() {
  const config = await getConfig();

  return (
    <>
      <Navbar site={config.site} />
      <main>
        <Hero site={config.site} hero={config.hero} />
        <Features site={config.site} />
        <MenuSection menu={config.menu} />
        <Gallery gallery={config.gallery} />
        <Contact site={config.site} mapsUrl={config.maps_embed_url} />
      </main>
      <Footer site={config.site} />

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${config.site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa"
        aria-label="Chat WhatsApp"
      >
        <i className="bi bi-whatsapp"></i>
        <span className="floating-wa-tooltip">Chat Sekarang!</span>
      </a>
    </>
  );
}
