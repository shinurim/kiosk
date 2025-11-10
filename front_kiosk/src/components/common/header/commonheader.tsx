import styles from './CommonHeader.module.scss'

function CommonHeader() {
    // 북마크 페이지로 이동
    return (
        <header className={styles.header}>
            <div>가상 키오스크</div>
            <div className={styles.header__setting}><img src='src/assets/images/react.svg' alt=''/></div>
        </header>
    )
}

export default CommonHeader