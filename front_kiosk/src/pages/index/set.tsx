import styles from "./styles/index.module.scss";
import CommonHeader from "../../components/common/header/commonheader";
import CommonNav    from "../../components/common/navigation/CommonNav";
import CommonFooter from "../../components/common/footer/commonfooter";
import Card from "./component/card";
import { useState, useEffect } from 'react';

interface MenuItem {
  index: number;
  label: string;
  path: string;
  src: string;
}

function set() {
  const [burgerSetList, setburgerSetList] = useState<MenuItem[]>([]);

  useEffect(() => {
    // 3. Django에서 만든 '사이드 API' 호출
    fetch('http://127.0.0.1:8000/api/burgerSet/') 
      .then(response => response.json())
      .then((data: MenuItem[]) => {
        setburgerSetList(data);
      })
      .catch(error => console.error('Error fetching side data:', error));
  }, []);
  
  return (
    <div className={styles.page}>
        {/*공통 헤더 UI부분*/}
        <CommonHeader />
        {/*공통 네비게이션 UI부분*/}
        <CommonNav/>
        {/* ImgCard UI부분*/}
        <div className={styles.page__imageBox}>
        <Card items={burgerSetList} />
        </div>
        {/*공통 푸터 UI부분 */}
        <CommonFooter/>
    </div>
  )
}

export default set