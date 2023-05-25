import styles from "../styles/style";

import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center justify-center gap-2 py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount icon"
            className="w-[32px] h-[32px]"
          />
          <span className="font-bold text-white">
            20% de Desconto para a Assinatura de 1 mês
          </span>
        </div>

        <div className="flex flex-row justify-between items-center w-full text-white capitalize">
          <h1 className="flex-1 font-extrabold font-poppins ss:text-[72px] text-[40px] ss:leading-[100px] leading-[75px]">
            A próxima <br className="sm:block" />{" "}
            <span className="text-logoname">geração</span>
          </h1>
          <div className="ss:flex justify-start hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="text-white font-extrabold font-poppins ss:text-[68px] text-[40px] ss:leading-[100px] leading-[75px] w-full">
          de Pagamentos.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nosso time de especialistas usa uma metodologia para identificar qual
          cartão de crédito <br /> mais se encaixa na sua necessidade. <br />{" "}
          Nós examinamos as{" "}
          <span className="font-bold">médias de percentuais anuais</span>, e as
          <span className="font-bold"> taxas anuais.</span>
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} mt-10`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
