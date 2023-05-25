import style from "../styles/style";

import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer
      className={` ${style.paddingY} ${style.flexCenter} flex-col text-white font-bold`}
    >
      <p className="text-xl">CyberChest 2023&copy;</p>
      <div className={`${style.flexCenter}`}>
        {socialMedia.map(({ icon, id, link }) => (
          <div key={id} className="p-6 flex items-center justify-center">
            <a href={link} target="_blank" rel="noreferrer">
              <img
                src={icon}
                alt="icons"
                className="hover:scale-110 duration-300"
              />
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
