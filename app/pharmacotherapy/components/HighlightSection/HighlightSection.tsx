"use client";
import styles from "./HighlightSection.module.css";

export default function HighlightSection() {
    return (
        <section className={styles.fullSection}>
            <div className={styles.container}>
                {/* HEADER AREA */}
                <div className={styles.headerArea}>
                    <p className={styles.smallTitle}>Highlight วิทยาลัยเภสัชบำบัด</p>
                    <h3 className={styles.midTitle}>เรื่องราวจากวิทยาลัยเภสัชบำบัด</h3>
                    <h2 className={styles.bigTitle}>ความก้าวหน้า นวัตกรรม และการดูแลสุขภาพ</h2>
                    <p className={styles.subTitle}>
                        วิทยาลัยเภสัชบำบัด มุ่งมั่นพัฒนาการบริบาล: สร้างสรรคอนาคตแห่งการดูแลสุขภาพที่ยั่งยืน
                    </p>
                </div>

                {/* GRID */}
                <div className={styles.grid}>

                    {/* LEFT */}
                    <div className={styles.col}>
                        <div className={styles.mainImgWrapper}>
                            <img
                                src="/images/highlight/highlight1.png"
                                alt=""
                                className={styles.highlightImg}
                            />
                        </div>

                        <div className={styles.subGrid}>
                            <img src="/images/highlight/highlight2.png" alt="" className={styles.highlightImg} />
                            <img src="/images/highlight/highlight3.png" alt="" className={styles.highlightImg} />
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className={styles.col}>
                        <div className={styles.tallImgWrapper}>
                            <img
                                src="/images/highlight/highlight4.png"
                                alt=""
                                className={styles.highlightImg}
                            />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className={styles.col}>
                        <div className={styles.subGrid}>
                            <img src="/images/highlight/highlight5.png" alt="" className={styles.highlightImg} />
                            <img src="/images/highlight/highlight6.png" alt="" className={styles.highlightImg} />
                        </div>

                        <div className={styles.mainImgWrapper}>
                            <img
                                src="/images/highlight/highlight7.png"
                                alt=""
                                className={styles.highlightImg}
                            />
                        </div>
                    </div>

                </div>

                {/* 🔥 DOTS 6 จุด */}
                <div className={styles.dots}>
                    <span className={styles.active}></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </section>
    );
}