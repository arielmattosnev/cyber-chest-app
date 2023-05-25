import { card } from "../assets";

import styles, { layout } from "../styles/style";

import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Encontre a melhor negociação <br className="sm:block hidden" /> em
          alguns simples passos.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <span className="text-white font-bold">Cyber</span>
          <span className="text-logoname font-bold">Chest</span> , a plataforma
          que irá ajudá-lo a encontrar a melhor negociação de cartão de crédito
          de forma rápida e fácil. Sabemos que encontrar o cartão certo pode ser
          uma tarefa desafiadora, com tantas opções disponíveis no mercado. No
          entanto, não se preocupe! Estamos aqui para simplificar esse processo
          para você.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
