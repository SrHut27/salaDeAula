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
          content="Projeto da Maior Sala de Aula do Mundo. Faça parte desse progresso."
        />

        {/* Open Graph */}
        <meta property="og:title" content="Maior Sala de Aula do Mundo" />
        <meta
          property="og:description"
          content="Ajude na construção da Maior Sala de Aula do Mundo."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />

        {/* 🔥 FAVICON (ESSENCIAL) */}
        <link rel="icon" href="/favicon.ico" />
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
