import styles from "./EmblemSection.module.css";


export default function EmblemSection() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                {/* LOGO CARD — tall, left column, spans 3 rows */}
                <div className={styles.logoCard}>
                    <div className={styles.logoTopArea}>
                        <div className={styles.logoImageWrapper}>
                            <img src="/images/emblem/logo.png" alt="Emblem Logo" className={styles.logoImage} />
                        </div>
                        <span className={styles.quoteIcon}>”</span>
                    </div>
                    <div className={styles.logoTextWrapper}>
                        <h3 className={styles.logoTitle}>
                            ตราสัญลักษณ์ของ วิทยาลัยเภสัชบำบัด (Thai College of Pharmacy)
                        </h3>
                        <p className={styles.logoDesc}>
                            เป็นการรวมตัวกันขององค์ประกอบทางสัญลักษณ์ที่เป็นสากลและอัตลักษณ์ไทย
                            เพื่อสะท้อนถึงวิสัยทัศน์และการปฏิบัติงานในระดับสากล:
                        </p>
                    </div>
                </div>

                {/* INFO CARD 1 */}
                <div className={styles.infoCard}>
                    <h4 className={styles.infoTitle}>ถ้วยยาไฮเกีย (Bowl of Hygieia)</h4>
                    <p className={styles.infoDesc}>
                        สื่อถึงถ้วยยาของ "ไฮเกีย" เทพีแห่งสุขภาพในตำนานกรีก เป็นสัญลักษณ์สากลของวิชาชีพเภสัชกรรมที่แสดงถึง "การเยียวยาด้วยยา"
                         และการมีส่วนร่วมในการป้องกันและรักษาโรค
                    </p>
                </div>

                {/* INFO CARD 2 */}
                <div className={styles.infoCard}>
                    <h4 className={styles.infoTitle}>งูพันรอบถ้วยยา (Serpent)</h4>
                    <p className={styles.infoDesc}>
                       เป็นตัวแทนของความรอบรู้ ความมีสติปัญญา 
                       และความเฉลียวฉลาดในการประยุกต์ใช้ความรู้ด้านเภสัชศาสตร์ (Pharmacotherapy) เพื่อประโยชน์สุขของผู้ป่วย
                    </p>
                </div>

                {/* INFO CARD 3 */}
                <div className={styles.infoCard}>
                    <h4 className={styles.infoTitle}>สี</h4>
                    <p className={styles.infoDesc}>
                       <strong>สีเขียวมะกอก: </strong> สีประจำวิชาชีพเภสัชกรรม สื่อถึงความสมบูรณ์ ความเจริญงอกงาม และชีวิต<br></br>
                        <strong>สีทอง:</strong> สื่อถึงคุณค่า ความเป็นเลิศทางวิชาการ และมาตรฐานวิทยฐานะชั้นสูง (Board Certified)
                    </p>
                    <p className={styles.infoQuote}>
                      
                    </p>
                </div>

            </div>
        </section>
    );
}
