import React from 'react'
import styles from './commonfooter.module.scss'

function commonfooter() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__output}>
            <table>
            <tbody>
            <tr>
                <td>수량</td>
                <td><input type='text'></input></td>
            </tr>
            <tr>
                <td>합계</td>
                <td><input type='text'></input></td>
            </tr>
            </tbody>
            </table>
        </div>
        <div className={styles.footer__btn}>
            <button type="button">주문 취소</button>
            <button type="button">다음</button>
        </div>
    </div>
  )
}

export default commonfooter