import SocialMedia, { GmailIcon } from "./SocialMedia";

const LeftContent = () => (
  <div className="flex flex-col flex-1 w-1/2 ">
    <div className="mb-2 text-4xl">Got a Project?</div>
    <div className="text-3xl">Let's talk.</div>
    <div className="mt-6 text-sm ">
      <div>We do our work Sincerly We do our work Sincerly</div>
      <div>We do our work Sincerly </div>
    </div>

    <div className="h-20"></div>
    <a href="mailto:subhamojha9@gmail.com">
      <div className="flex gap-2 ">
        <GmailIcon size={10} />
        <div className="text-2xl">subhamojha9@gmail.com</div>
      </div>
    </a>
  </div>
);
const RightContent = () => (
  <div className="flex flex-col max-w-1/2">
    <div className="text-4xl">Let me Know here.</div>
    <form className="flex flex-col gap-10 mt-10 mr-10 w-96 ">
      <InputField name="name" placeholder="What's your name?" />
      <InputField name="email" placeholder="Your fancy email" />
      <InputField name="description" placeholder="Your message" />
    </form>
  </div>
);
const BottomContent = () => (
  <div className="flex flex-col items-center justify-center mt-44 ">
    <div className="text-4xl">Emojii</div>
    <div className="mt-10 font-bold text-md">Thanks for scrolling</div>
    <div className="text-md">thats all folks</div>
    <div className="mt-20 text-md">
      <SocialMedia />
    </div>
  </div>
);

const Footer = () => {
  return (
    <section
      id="footer"
      className="w-full h-screen text-gray-300 bg-gray-900 py-28 "
    >
      <div className="flex w-9/12 m-auto ">
        <LeftContent />
        <RightContent />
      </div>
      <BottomContent />
    </section>
  );
};

export default Footer;

const InputField = ({ name, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        name={name}
        className="w-full pb-6 text-xl bg-transparent border-b border-gray-800 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
