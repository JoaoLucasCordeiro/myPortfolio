// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          href: "https://www.mateuscurvelosound.site/",
        },
        {
          title: "title",
          path: "/thumb3.png",
          href: "https://semabio.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb12.png",
          href: "https://sphereproject.vercel.app/",
        },
       
        {
          title: "title",
          path: "/thumb5.png",
          href: "https://inclusivepet.com.br/",
        },
      
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.png",
          href: "https://viewloom.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb14.png",
          href: "https://keypoint.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb7.png",
          href: "https://linksnip.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb15.png",
          href: "https://unistyle.vercel.app/",
        },
        
     
      
      ],
    },

    {
      images: [
        {
          title: "title",
          path: "/thumb9.png",
          href: "https://thehoobanksite.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb10.png",
          href: "https://x-pense.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb11.png",
          href: "https://gpt3ladingpage.vercel.app/",
        },
        {
          title: "title",
          path: "/thumb8.png",
          href: "https://gymmewebsite.vercel.app/",
        },
      
      ],
    },

    {
      images: [
        {
          title: "title",
          path: "/thumb19.png",
          href: "https://conhecainclusivepet.vercel.app/",
        },

        {
          title: "title",
          path: "/thumb16.png",
          href: "https://kilcardoso.netlify.app/",
        },

        {
          title: "title",
          path: "/thumb17.png",
          href: "https://teamguima.com/",
        },

        {
          title: "title",
          path: "/thumb18.png",
          href: "https://eventease-opal.vercel.app/",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <Link href={image.href} key={imageIndex} target="_blank">
                <div
                  className="relative rounded-lg overflow-hidden 
                    flex items-center justify-center group"
                  // onClick={() => handleImageClick(image.href)}
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image
                      src={image.path}
                      width={500}
                      height={300}
                      className="rounded-lg"
                      alt="Imagem Do Projeto"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-l
                         from-transparent via-[#ca830a] to-[#f5ad5b] opacity-0
                         group-hover:opacity-80 transition-all duration-700"
                    ></div>
                    <div
                      className="absolute bottom-0 translate-y-full 
                        group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2rem]">
                        <div className="delay-100">CONFERIR</div>
                        <div
                          className="translate-y-[500%] 
                            group-hover:translate-y-0 transition-all
                             duration-300 delay-150"
                        ></div>
                        <div
                          className="text-xl 
                            translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"
                        >
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
