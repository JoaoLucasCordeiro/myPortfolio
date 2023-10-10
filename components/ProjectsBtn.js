import Image from "next/image"

import Link from "next/link"

import { HiArrowRight } from "react-icons/hi2"

import roundedText from "../public/rounded-text.png"

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-1000 cursor-pointer">
      <Link href={`/work`}
        className="curosr-pointer relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group">

        {/* conteúdo do botão */}
        <Image
          src={roundedText}
          width={141}
          height={148}
          alt=""
          className="cursor-pointer animate-spin-slow w-full h-full max-w-[141px] max-h-[140px]"
        />
        <HiArrowRight className="cursor-pointer absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
        {/* conteúdo do botão */}

      </Link>
    </div>
  )
};

export default ProjectsBtn;
