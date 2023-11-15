import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from "swiper"
import { FaQuoteLeft } from "react-icons/fa"
import Image from "next/image"


// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Mateus Curvelo',
    position: 'Cliente',
    message:
      'Excelente profissional, atencioso aos detalhes, me surpreendeu na parte de design e VFX do meu site, sempre esteve disposto a me ouvir e apresentar suas ideias ao projeto, recomendo bastante!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Ivaldir Junior',
    position: 'P.O',
    message:
      'O Profissional João Lucas é comprometido, atencioso e proativo que busca cumprir o que foi acordado com o cliente de forma efetiva. Técnicamente, Lucas tem se mostrado um grande profissional!! Eu estou muito satisfeito com a forma como ele lida com os desafios e com a forma de resolver esses mesmos desafios. Sem dúvida Ele é um profissional que indicaria com muita alegria para qualquer pessoa ou empresa',
  },
  {
    image: '/t-avt-3.png',
    name: 'Davi Guilherme',
    position: 'Cliente',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];


const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px] "
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, nome, posicao */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center ">
                  {/* avatar */}
                  <div className="mb-2 mx-auto ">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* nome */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>

              {/* msg */}

              <div className="flex-1 flex flex-col
               justify-center before:w-[1px] xl:before:bg-white/20 
               xl:before:absolute xl:before:left-0 xl:before:h-[200px] 
               relative xl:pl-20">
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left text-sm">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        )
      })
      }
    </Swiper >
  )
};

export default TestimonialSlider;

