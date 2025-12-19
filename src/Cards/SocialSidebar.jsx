import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";

const SocialSidebar = () => {
  const socials = [
    { icon: <FiGithub />, link: "https://github.com/droidDev-Ak" },
    { icon: <FiLinkedin />, link: "https://www.linkedin.com/in/akumar765" },
    { icon: <FiTwitter />, link: "https://x.com/KumarAkash77258" },
    { icon: <FiInstagram />, link: "https://www.instagram.com/akash_kumar0365/" },
  ];

  return (
    <div className="fixed bottom-0 left-8 md:left-12 z-50 hidden md:flex flex-col items-center gap-8">
      <div className="flex flex-col gap-7 mb-2">
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            className="text-slate-500 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300 text-xl"
          >
            {item.icon}
          </a>
        ))}
      </div>
      {/* Increased height and dimmed color for a cleaner "anchor" */}
      <div className="w-[1px] h-32 bg-slate-800/60"></div>
    </div>
  );
};

export default SocialSidebar;