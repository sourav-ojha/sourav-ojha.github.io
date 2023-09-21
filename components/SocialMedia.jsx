import Link from "next/link";

export const GmailIcon = ({ size = 32 }) => (
  <img
    src="data:image/png;base64,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"
    alt="Gmail"
    width={32}
    height={size}
  />
);

const IconMenu = ({ link, name, width = 32 }) => (
  <Link
    href={link}
    target="_blank"
    className="transition-all duration-200 hover:transform hover:scale-125"
  >
    <img
      src={`/social_icons/${name}.png`}
      alt={name}
      width={width}
      // height={32}
      className="bg-white rounded-full"
    />
  </Link>
);

const SOCIAL_MEDIA = [
  {
    name: "whatsapp",
    link: "https://api.whatsapp.com/send?phone=919348410682",
  },
  { name: "linkedin", link: "https://www.linkedin.com/in/sourav-ojha/" },
  { name: "github", link: "https://github.com/Sourav-ojha" },
  { name: "twitter", link: "https://twitter.com/SouravOjha25" },
  { name: "facebook", link: "https://www.facebook.com/Ojha.sourAv.26/" },
];

const SocialMedia = ({ className, size = 36 }) => {
  return (
    <div className={`flex gap-5 ${className}`}>
      {SOCIAL_MEDIA.map((item) => (
        <IconMenu
          key={item.link}
          link={item.link}
          width={size}
          name={item.name}
        />
      ))}
    </div>
  );
};

export default SocialMedia;
