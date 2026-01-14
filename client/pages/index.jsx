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
    )
}