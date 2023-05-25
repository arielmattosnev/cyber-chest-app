import { apple, bill, google } from "../assets";

import styles, { layout } from "../styles/style";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="iamges for billing component"
          className="w-[100%] h-[100%] relative z-[5] "
        />

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Controle facilmente suas <br className="sm:block hidden" /> contas e
          faturamentos.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Bem-vindo à seção de Controle de Finanças e Faturamento do {""}
          <span className="text-white font-bold">Cyber</span>
          <span className="text-logoname font-bold">Chest</span>! Estamos aqui
          para ajudá-lo a gerenciar suas transações financeiras de forma
          eficiente e simplificada. Com a nossa plataforma intuitiva e recursos
          abrangentes, você terá total controle sobre suas finanças, permitindo
          que você tome decisões informadas e mantenha suas metas financeiras no
          caminho certo.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple store image"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer hover:scale-110 duration-300"
          />
          <img
            src={google}
            alt="play store image"
            className="w-[128px] h-[42px] object-contain cursor-pointer hover:scale-110 duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
