import Hero from "../components/Hero";
import Section from "../components/Section";
import NavbarLine from "../components/Navbar";
import Features from "../components/Features";
import PosSection from "../components/PosSection";
import Help from "../components/Help";
import Footer from "../components/Footer";


export default function IndexPage() {
    return (
        <>
        <NavbarLine />
        <Hero />
        <Section />
        <PosSection />
        <Features />
        <Help />
        <Footer />
        </>
    )
}