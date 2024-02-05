import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          aliquam maxime saepe velit totam adipisci amet eius! Iste voluptas
          explicabo exercitationem.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={google}
            alt="google_play"
            className="w-32 h-[42px] cursor-pointer object-contain mr-5"
          />
          <img
            src={apple}
            alt="apple_store"
            className="w-32 h-[42px] cursor-pointer object-contain mr-5"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
