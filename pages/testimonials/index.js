import TestimonialSlider from "../../components/TestimonialSlider"

import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

const Testimonials = () => {
  return (
    <div className="h-full bg-primary/60 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        {/* titulo */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-4xl font-bold mb-8 xl:mb-0">Veja o que <span className="text-accent">clientes</span> e pessoas que <span className="text-accent">trabalharam comigo</span> tem a dizer <span className="text-accent">.</span></motion.h2>
        {/* slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  )
};

export default Testimonials;
