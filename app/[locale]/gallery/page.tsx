import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { GalleryGrid } from '@/components/gallery/GalleryGrid';
import { FadeInView } from '@/components/ui/FadeInView';

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <GalleryContent />;
}

function GalleryContent() {
  const t = useTranslations('gallery');

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-4">
              {t('eyebrow')}
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="font-clash font-bold text-4xl sm:text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
              {t('title')}
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-white">
        <div className="max-w-[1600px] mx-auto">
          <GalleryGrid />
        </div>
      </section>
    </div>
  );
}
