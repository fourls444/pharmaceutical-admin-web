import Image from "next/image";
import styles from "./ExpertiseSection.module.css";

const EXPERTISE_DATA = [
    { id: 1, title: "อายุรศาสตร์", subtitle: "การดูแลผู้ป่วยโรคภายในและโรคเรื้อรัง", image: "/images/expertise/cards1.jpg" },
    { id: 2, title: "โรคติดเชื้อ", subtitle: "การใช้ยาต้านจุลชีพและควบคุมการติดเชื้อ", image: "/images/expertise/cards2.jpg" },
    { id: 3, title: "กุมารเวชศาสตร์", subtitle: "การดูแลผู้ป่วยเด็กและทารก", image: "/images/expertise/cards3.jpg" },
    { id: 4, title: "มะเร็งวิทยา", subtitle: "การดูแลผู้ป่วยมะเร็งด้วยเคมีบำบัด", image: "/images/expertise/cards4.jpg" },
    { id: 5, title: "โรคไต", subtitle: "การดูแลผู้ป่วยไตวายและฟอกเลือด", image: "/images/expertise/cards5.jpg" },
    { id: 6, title: "โรคหัวใจและหลอดเลือด", subtitle: "การดูแลผู้ป่วยโรคหัวใจและความดันโลหิตสูง", image: "/images/expertise/cards6.jpg" },
];

export default function ExpertiseSection() {
    return (
        <div className={styles.expertiseContainer}>
            <h2 className={styles.mainHeading}>สาขาความเชี่ยวชาญ</h2>
            <div className={styles.cardGrid}>
                {EXPERTISE_DATA.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.cardImageWrapper}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={296}
                                height={192}
                                className={styles.cardImage}
                            />
                        </div>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardSubtitle}>{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
