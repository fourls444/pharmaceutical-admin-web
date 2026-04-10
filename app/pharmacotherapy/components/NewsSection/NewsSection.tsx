import styles from "./NewsSection.module.css";

const NEWS_ITEMS = [
    {
        image: "/images/news/Container1.png",
        title: "วิทยาลัยเภสัชบำบัด\nจัดโครงการอบรมพัฒนาศักยภาพเภสัชกร ปี 2567",
        description:
            "หลักสูตรนี้เป็นส่วนหนึ่งของโครงการพัฒนาศักยภาพเภสัชกร จัดโดยวิทยาลัยเภสัชบำบัด มุ่งเน้นการเพิ่มพูนทักษะและความรู้ที่จำเป็นในการปฏิบัติงานจริง",
    },
    {
        image: "/images/news/Container2.png",
        title: "วิทยาลัยเภสัชบำบัด ประกาศรับสมัครเภสัชกรเข้าร่วมโครงการพัฒนาศักยภาพ ประจำปี 2569",
        description:
            "เปิดรับสมัครเภสัชกร เข้าร่วมอบรมหลักสูตรระยะสั้น เข้มข้นกว่า 20 สัปดาห์ ออกแบบมาเพื่อเพิ่มพูนทักษะและความรู้",
    },
    {
        image: "/images/news/Container3.png",
        title: "วิทยาลัยเภสัชบำบัด จัดประชุมวิชาการ เรื่อง แนวทางการจัดการโรค NCDs ในร้านยา",
        description:
            "หลักสูตรการฝึกอบรมระยะสั้น ที่มีระยะเวลาการฝึกอบรม 16 สัปดาห์ขึ้นไป เป็นหลักสูตรที่ปรับปรุงจากหลักสูตรฝึกอบรมสาขา...",
    },
];

export default function NewsSection() {
    return (
        <section className={styles.newsSection}>
            <div className={styles.newsContainer}>
                {/* HIGHLIGHTS */}
                <div className={styles.newsHeader}>
                    <h2>เรื่องเด่นวิทยาลัยเภสัชบำบัด</h2>
                    <div className={styles.newsNav}>
                        <button className={styles.navBtn}>&lt;</button>
                        <button className={styles.navBtn}>&gt;</button>
                    </div>
                </div>

                <div className={styles.featuredCard}>
                    <div className={styles.featuredImage}>
                        <img src="/images/news/img.png" alt="featured" />
                    </div>
                    <div className={styles.featuredContent}>
                        <div className={styles.tagOlive}>ข่าวประชาสัมพันธ์</div>
                        <h3>วิทยาลัยเภสัชบำบัด จัดอบรมเชิงปฏิบัติการ เรื่อง Advance Pharmacy</h3>
                        <p>
                            หลักสูตรนี้เป็นส่วนหนึ่งของการอบรมเชิงปฏิบัติการ Advance Pharmacy โดยมุ่งเน้นการพัฒนาความรู้และทักษะเฉพาะทาง 
                            เพื่อให้เภสัชกรสามารถดูแลผู้ป่วยได้อย่างมีประสิทธิภาพ
                        </p>
                        <button className={styles.readMoreBtn}>อ่านเพิ่มเติม</button>
                    </div>
                </div>

                <div className={styles.paginationDots}>
                    <div className={styles.dotActive}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>

                {/* NEWS */}
                <div className={styles.newsRowHeader}>
                    <h2>ข่าวสารวิทยาลัยเภสัชบำบัด</h2>
                    <span className={styles.viewAll}>ดูทั้งหมด &gt;</span>
                </div>

                <div className={styles.newsGrid}>
                    {NEWS_ITEMS.map((item, index) => (
                        <div key={index} className={styles.newsCard}>
                            <div className={styles.newsCardImage}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={styles.newsCardContent}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
