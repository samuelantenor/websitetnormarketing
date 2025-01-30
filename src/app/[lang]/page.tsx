import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import About from '@/app/components/AboutUs';
import Testimonials from '@/app/components/Testimonials';
import ContactForm from '@/app/components/ContactForm';
import BlogCTA from '@/components/BlogCTA';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/config/i18n.config';

export async function generateMetadata() {
  return {
    title: 'TNor Marketing',
    description: 'Digital Marketing Agency',
  };
}

export default async function Home({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="bg-background-dark">
      {/* Hero Section */}
      <section id="home">
        <Hero dict={dict} lang={params.lang} />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services dict={dict} />
      </section>

      {/* Blog CTA */}
      <section id="blog-cta">
        <BlogCTA
          lang={params.lang}
          title={dict.blogCTA.title}
          description={dict.blogCTA.description}
          buttonText={dict.blogCTA.button}
        />
      </section>

      {/* About Section */}
      <section id="about">
        <About dict={dict} />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials dict={dict} />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactForm dict={dict} />
      </section>
    </main>
  );
} 