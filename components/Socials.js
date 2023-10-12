
import Link from "next/link";
import { RiWhatsappLine, RiInstagramLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri"

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link target="_blank" rel="noopener noreferrer" href={"https://wa.me/5587981132735?text=Ol%C3%A1,%20vi%20o%20seu%20portf%C3%B3lio%20e%20fiquei%20interessado%20no%20seu%20trabalho.%20Poder%C3%ADamos%20conversar?"} className="hover:text-accent transition-all duration-300">
        <RiWhatsappLine  />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/joaolucascordeiro/"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine  />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/JoaoLucasCordeiro"} className="hover:text-accent transition-all duration-300">
        <RiGithubLine  />
      </Link>
      <Link target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/joaolucascorrdeiro/"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine  />
      </Link>
    </div>
  )
}

export default Socials;
