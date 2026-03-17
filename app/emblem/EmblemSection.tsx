import styles from "./Emblem.module.css";

export default function EmblemSection() {
    const emblemParts = [
        {
            title: "งูพันด้วยถ้วยยาไฮเกีย",
            description: "การศึกษาความรู้ด้านเภสัชศาสตร์"
        },
        {
            title: "รวภท.",
            description: "\"ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย\""
        },
        {
            title: "พ.ศ. ๒๕๖๗",
            description: "ปี พ.ศ. ที่ก่อตั้ง"
        },
        {
            title: "RX",
            description: "สัญลักษณ์ของอักษรกรีกที่มีความหมายว่า \"RECIPE\"\n(แปลว่า \"จงนำ\" โดย RX เป็นตัวย่อที่ใช้ในใบสั่งยา)"
        },
        {
            title: "เส้นรัศมีจำนวน ๒๙ เส้น",
            description: "สัญลักษณ์ที่เปรียบเสมือนดวงประทีปที่ให้แสงสว่าง แสดงถึงสติปัญญาโดยจำนวนเส้นคือจำนวนของมหาวิทยาลัย ๒๒ แห่ง และวิทยาลัยจำนวน ๗ แห่ง ในช่วงเวลาที่ก่อตั้งราชวิทยาลัย"
        },
        {
            title: "เฉลว",
            description: "ภูมิปัญญา ความรู้ ตำรายา"
        },
        {
            title: "สีเขียวมะกอก",
            description: "สีประจำวิชาชีพเภสัชกรรม"
        }
    ];

    return (
        <section className={styles.section}>
            
            {/* TOP AREA */}
            <div className={styles.topContainer}>
                {/* EMBLEMS */}
                <div className={styles.emblemsWrapper}>
                    <img src="/images/emblem/emblem.png" alt="Emblem Thai" className={styles.emblemImage} />
                    <img src="/images/emblem/Container.png" alt="Emblem English" className={styles.emblemImage} />
                </div>

                {/* DESCRIPTION CARD */}
                <div className={styles.descriptionCard}>
                    <div className={styles.cardHeader}>
                        <img src="/images/emblem/emblem.png" alt="Small Emblem" className={styles.smallEmblem} />
                        <div className={styles.cardTitle}>
                            <h3>ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย</h3>
                            <p>THE ROYAL COLLEGE OF PHARMACY OF THAILAND</p>
                        </div>
                        <div className={styles.quoteIcon}>"</div>
                    </div>
                    <div className={styles.cardBody}>
                        <p><strong>ตราสัญลักษณ์ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย</strong></p>
                        <p>
                            รูปงูพันด้วยถ้วยยาไฮเกียซ้อนบนเฉลวด้านหลัง เบื้องล่างมีอักษรย่อ "รวภท." มีข้อความ "ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย" และมีตัวอักษรและตัวเลข "พ.ศ. ๒๕๖๗" เบื้องบนมีสัญลักษณ์ "RX" ที่มีเส้นรัศมีจำนวน ๒๙ เส้น ล้อมรอบ
                        </p>
                    </div>
                </div>
            </div>

            {/* GRID AREA */}
            <div className={styles.gridContainer}>
                {emblemParts.map((part, index) => (
                    <div key={index} className={`${styles.gridCard} ${index === 4 ? styles.wideCard : ''}`}>
                        <h4>{part.title}</h4>
                        <p>{part.description}</p>
                    </div>
                ))}
            </div>

        </section>
    );
}
