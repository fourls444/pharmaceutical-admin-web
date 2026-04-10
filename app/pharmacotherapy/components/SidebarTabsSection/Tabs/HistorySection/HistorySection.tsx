"use client";
import styles from "./HistorySection.module.css";

const TIMELINE_DATA = [
    {
        year: "พ.ศ. 2540 - 2545",
        title: "จุดเริ่มต้นแห่งมาตรฐาน",
        description:
            "ผู้ช่วยศาสตราจารย์ เภสัชกรหญิง สำลี ใจดี\nเล็งเห็นถึงความสำคัญของการพัฒนาบุคลากรทางเภสัชกรรมให้มีความเชี่ยวชาญเฉพาะทางด้านสมุนไพร เพื่อสนับสนุนการพัฒนาระบบสาธารณสุขและอุตสาหกรรมสมุนไพรของประเทศไทย",
    },
    {
        year: "พ.ศ. 2546",
        title: "การวางรากฐานและปณิธาน",
        description:
            "มีการประกาศข้อบังคับสภาเภสัชกรรมว่าด้วยวิทยาลัยเภสัชบำบัดอย่างเป็นทางการ เพื่อทำหน้าที่เป็นองค์กรหลักในการจัดการฝึกอบรมและสอบเพื่อรับวุฒิบัตร (Board Certified) ในสาขาเภสัชบำบัด",
    },
   
    {
        year: "",
        title: "การขยายสาขาและความร่วมมือ",
        description:
            "วิทยาลัยฯ ได้สร้างเครือข่ายร่วมกับสถาบันการศึกษา (คณะเภสัชศาสตร์) และโรงพยาบาลชั้นนำทั่วประเทศ เพื่อกำหนดหลักสูตรการฝึกอบรมเภสัชกรประจำบ้าน (Residency Training) ที่เข้มข้นทั้งภาคทฤษฎีและปฏิบัติ",
    },
     {
        year: "พ.ศ. 2567",
        title: "ก้าวสู่ราชวิทยาลัย",
        description:
            "วิทยาลัยเภสัชบำบัดได้รับการบูรณาการเข้าเป็น 1 ใน 7 วิทยาลัยภายใต้ ราชวิทยาลัยเภสัชกรรมแห่งประเทศไทย เพื่อความเป็นเอกภาพและความแข็งแกร่งทางวิชาการในระดับชาติ",
    },
];

export default function HistorySection() {
    return (
        <>
            {/* HEADING */}
                        <h2 className={styles.mainHeading}>
                            "จากการพัฒนาทักษะวิชาชีพ สู่มาตรฐานการรับรองความเชี่ยวชาญระดับวุฒิบัตร"
                        </h2>

                        <p className={styles.subText}>
                           วิทยาลัยเภสัชบำบัด (Thai College of Pharmacy) 
                           ก่อตั้งขึ้นโดยมีวัตถุประสงค์หลักเพื่อพัฒนาศักยภาพของเภสัชกรในการบริบาลทางเภสัชกรรม 
                           (Pharmaceutical Care) ให้ทัดเทียมกับระดับสากล 
                           โดยเน้นการใช้ความรู้เชิงลึกด้านยาเพื่อดูแลผู้ป่วยโดยตรง ร่วมกับทีมสหวิชาชีพในสถานพยาบาล                   
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <p className={styles.timelineDesc} >{item.description}</p>
                                </div>
                            ))}
                        </div>
        </>
    );
}
