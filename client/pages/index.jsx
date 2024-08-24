import Hero from "../components/Hero";
import Section from "../components/Section";
import NavbarLine from "../components/Navbar";
import Features from "../components/Features";
import PosSection from "../components/PosSection";
import Help from "../components/Help";
import Footer from "../components/Footer";
import FloatingBar from "../components/FloatingBar";


export default function IndexPage() {
    return (
        <>
        <NavbarLine />
        <Hero />
        <Features />
        <Section />
        <PosSection />
        <Help />
        <Footer />
        <FloatingBar />
        </>
    )
}