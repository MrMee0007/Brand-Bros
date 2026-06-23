
import Work2 from '../components/Work2'
import PortfolioCarousel from '../components/Carousal'
import  Hero  from '../components/Hero'
import AboutSection from '../components/Projeects'
import ClientsSection from '../components/client'
import TestimonialsSection from '../components/TestimonalsSection'


const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero/>
      <AboutSection />
      <PortfolioCarousel />
      <ClientsSection/>
      <Work2 />
      <TestimonialsSection />
    </div>
  )
}

export default Home
