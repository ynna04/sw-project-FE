import { useState } from 'react';
import Calendar from '../components/Calendar';
import styles from './Home.module.css';
import WriteModal from '../components/WriteModal';

const mockData = {
  '2025.04.05': [
    {
      id: 1,
      title: '죽숲과 쌀나무 탈출',
      author: '죽숲',
    },
  ],
  '2025.04.07': [
    {
      id: 2,
      title: '하늘이 맑았던 날',
      author: '은하',
    },
    {
      id: 4,
      title: '레전드 시간낭비 간담회 참석',
      author: '나연, 윤나, 예은, 혜원, 태영',
    },
  ],
  '2025.04.04': [
    {
      id: 3,
      title: '우리 과가 통폐합된다고?',
      author: '죽솦',
    },
  ],
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showWritePopup, setShowWritePopup] = useState(false);

  const posts = selectedDate ? mockData[selectedDate] || [] : [];

  return (
    <div className={styles.container}>
      <div className={`${styles.calendarWrap} ${selectedDate ? styles.selected : ''}`}>
      <Calendar
        onSelect={(date) => {
        setSelectedDate((prev) => (prev === date ? null : date));
        }}
        selectedDate={selectedDate}
      />
      </div>

      {selectedDate && (
        <div className={styles.sidePanel}>
          <h3>{selectedDate}</h3>
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post.id} className={styles.card}>
                <div className={styles.title}>• {post.title}</div>
                <div className={styles.author}>@{post.author}</div>
              </div>
            ))
          ) : (
            <p className={styles.empty}>작성된 글이 없습니다.</p>
          )}
          <button className={styles.writeButton} onClick={() => setShowWritePopup(true)}>
            글작성
          </button>
        </div>
      )}
      {showWritePopup && (
        <WriteModal
          onClose={() => setShowWritePopup(false)}
          date={selectedDate}
        />
      )}
    </div>
  );
}