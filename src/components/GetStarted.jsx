import styles from "../styles/style";

import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-110 duration-300 `}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
            <span className="group]: text-logoname">Comece</span>
          </p>
          <img src={arrowUp} alt="arrow of button" />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-logoname">por aqui</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
