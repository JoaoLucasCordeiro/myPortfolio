
// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.png',
        },
        {
          title: 'title',
          path: '/thumb2.png',
        },
        {
          title: 'title',
          path: '/thumb3.png',
        },
        {
          title: 'title',
          path: '/thumb4.png',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.png',
        },
        {
          title: 'title',
          path: '/thumb1.png',
        },
        {
          title: 'title',
          path: '/thumb2.png',
        },
        {
          title: 'title',
          path: '/thumb3.png',
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

import { Pagination } from "swiper"

import { BsArrowRight } from "react-icons/bs"

import Image from "next/image"

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px] "
    >
      {
        workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, index) => {
                  return (
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className="relative items-center justify-center overflow-hidden ">
                        {/* imagem do card*/}
                        <Image src={image.path} width={500} height={300} alt="" />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent 
                        via-[#9d6c03] to-[#a46806] opacity-0 group-hover:opacity-80 transition-all duration-300"></div>
                        {/* titulo do card */}
                        <div className="absolute 
                        bottom-0 translate-y-full
                         group-hover:-translate-y-20
                         group-hover:xl:-translate-y-20
                         transition-all duration-300
                         ">
                          <div>
                            <div>Titulo 1</div>
                            <div>Titulo 2</div>
                            <div>icon</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
};

export default WorkSlider;
