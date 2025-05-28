import styles from "./whyUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileVideo } from "@fortawesome/free-regular-svg-icons";
import { faCommentsDollar, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";

export default function WhyUs() {
  return (
    <div className={`my-20 py-30 bg-gray-100 text-gray-700 ${styles.h3}`}>
      <div className="w-2/3 mx-auto text-center ">
        <div className="text-4xl mb-6 font-calc">O que você encontra aqui?</div>
        <div className="grid grid-cols-3 gap-20">
          <div>
            <div className="text-7xl"><FontAwesomeIcon icon={faFileVideo} /></div>
            <h3 className="my-3">Os melhores guias</h3>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid eveniet tempore illum deleniti doloremque, mollitia officiis esse perferendis reprehenderit modi distinctio, obcaecati ullam officia?</div>
          </div>
          <div>
            <div className="text-7xl"><FontAwesomeIcon icon={faWandMagicSparkles} /></div>
            <h3 className="my-3">Templates exclusivos</h3>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid eveniet tempore illum deleniti doloremque, mollitia officiis esse perferendis reprehenderit modi distinctio, obcaecati ullam officia?</div>
          </div>
          <div>
            <div className="text-7xl"><FontAwesomeIcon icon={faCommentsDollar} /></div>
            <h3 className="my-3">Conteúdos gratuitos</h3>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid eveniet tempore illum deleniti doloremque, mollitia officiis esse perferendis reprehenderit modi distinctio, obcaecati ullam officia?</div>
          </div>
        </div>
      </div>
    </div>
  )
}