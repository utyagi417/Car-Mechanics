import Hero from "../Components/Sections/Hero"
import Service from "../Components/Sections/Service"
import FunFacts from "../Components/Sections/FunFacts"
import AboutCompany from "../Components/Sections/AboutCompany"
import TextMarquee from "../Components/Sections/TextMarquee"
import WhyChooseUs from "../Components/Sections/WhyChooseUs"
import Packages from "../Components/Sections/Packages"
import Testimonial from "../Components/Sections/Testimonial"
import ContactForm from "../Components/Sections/ContactForm"

import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer/Footer"

const Home = () => {
  return (
    <>
      <Navbar selectedTab ="home" />
      <main className="wrapper">
        <Hero />
        <Service />
        <FunFacts />
        <AboutCompany />
        <TextMarquee />
        <WhyChooseUs />
        <Packages />
        <Testimonial />
        <ContactForm />
      </main>

      <Footer />
    </>
  )
}

export default Home
