// icons
import {
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Experiência na criação de designs modernos e responsivos que atendem a diversos nichos.',
  },

  {
    icon: <RxDesktop />,
    title: 'Desenvolvimento',
    description: 'Conhecimento do básico HTML, CSS e JS até frameworks poderosos e bancos de dados.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Te ajudo a criar textos chamativos e de boa escrita que vão ajudar o seu negócio a vender mais. ',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Sempre atento as melhores práticas para que o SEO do seu site ou projeto seja impecável.',
  },
];


import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { FreeMode, Pagination } from "swiper"

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] "
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="bg-[rgba(234,176,125,0.05)] 
              h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6
              sm:gap-x-0 group cursor-pointer hover:bg-[rgba(253,164,86,0.05)] transition-all duration-300
              ">
                {/* icone */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* titulo e descrição */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">
                    {item.title}
                  </div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default ServiceSlider;
