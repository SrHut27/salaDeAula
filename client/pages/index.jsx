import Head from 'next/head';

import Hero from "../components/Hero";
import Section from "../components/Section";
import NavbarLine from "../components/Navbar";
import Features from "../components/Features";
import PosSection from "../components/PosSection";
import Help from "../components/Help";
import Footer from "../components/Footer";
import FloatingBar from "../components/FloatingBar";
import NovoSection from "../components/NovoSection";

export default function IndexPage() {
  return (
    <>
      <Head>
        {/* Título da aba */}
        <title>A Maior Sala de Aula do Mundo</title>

        {/* SEO básico */}
        <meta
          name="description"
          content="Nossa pedagogia precisa de apenas uma sala de aula! Nos ajude a construí-la!"
        />

        {/* Open Graph */}
        <meta property="og:title" content="A Maior Sala de Aula do Mundo" />
        <meta
          property="og:description"
          content="Nossa pedagogia precisa de apenas uma sala de aula! Nos ajude a construí-la!"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

         {/* 🔥 FAVICON (ESSENCIAL) */}
        <link rel="icon" href="/vertenteimg.png" />
      </Head>

      <NavbarLine />
      <Hero />
      <Features />
      <Section />
      <NovoSection />
      <PosSection />
      <Help />
      <Footer />
      <FloatingBar />
    </>
  );
}
