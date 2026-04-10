import Image from "next/image";
import styles from "./VisionMissionSection.module.css";

/* SVG Icons for mission cards (moved from HistorySection) */
const ChartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const SearchIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
);

const ChatIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

export default function VisionMissionSection() {
    return (
        <div className={styles.visionMissionContainer}>
            <h2 className={styles.mainHeading}>
                "วิทยาลัยเภสัชบำบัด:<br></br>ผู้นำการศึกษาและพัฒนาวิชาชีพเภสัชกรรมแห่งอนาคต"
            </h2>
            <p className={styles.subText}>
                วิทยาลัยเภสัชบำบัด (Thai College of Pharmacy) มุ่งมั่นพัฒนาเภสัชกรให้มีความเชี่ยวชาญในการบริบาลผู้ป่วยแบบองค์รวม
                 ทำงานร่วมกับทีมสุขภาพสหสาขาวิชาชีพ เพื่อยกระดับคุณภาพการใช้ยาและส่งเสริมสุขภาพของประชาชน
            </p>

            {/* Vision Card */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>การควบคุมมาตรฐาน</h3>
                    <div className={styles.cardImageWrapper}>
                        <div className={styles.imageFade}></div>
                        <Image
                            src="/images/vision/Container1.png"
                            alt="Vision"
                            width={987}
                            height={156}
                            className={styles.cardImage}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.cardBody}>
                    
                    <p className={styles.cardDesc}>
                       กำกับดูแลคุณภาพของสถาบันฝึกอบรมและโรงพยาบาลแหล่งฝึกให้เป็นไปตามเกณฑ์สากล
                    </p>
                </div>
            </div>

            {/* Mission Card */}
            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>การผลิตผู้เชี่ยวชาญ</h3>
                    <div className={styles.cardImageWrapper}>
                        <div className={styles.imageFade}></div>
                        <Image
                            src="/images/vision/Container2.png"
                            alt="Mission"
                            width={987}
                            height={156}
                            className={`${styles.cardImage} ${styles.missionImage}`}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.cardBody}>
                     <p className={styles.cardDesc}>
                       จัดการฝึกอบรมและสอบเพื่อวุฒิบัตรและอนุมัติบัตรในสาขาเภสัชบำบัด
                    </p>
                </div>
            </div>

            <div className={styles.card}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>การพัฒนาวิชาการ</h3>
                    <div className={styles.cardImageWrapper}>
                        <div className={styles.imageFade}></div>
                        <Image
                            src="/images/vision/Container3.png"
                            alt="Vision"
                            width={987}
                            height={156}
                            className={styles.cardImage}
                            priority
                        />
                    </div>
                </div>
                <div className={styles.cardBody}>
                    <p className={styles.cardDesc}>
                        ส่งเสริมการวิจัยและเผยแพร่องค์ความรู้ด้านเภสัชบำบัด (Pharmacotherapy)
                        เพื่อความปลอดภัยของผู้ป่วย
                    </p>
                </div>
            </div>
            
        </div>
    );
}
