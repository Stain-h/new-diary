import { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { app, db } from './fbase';

export default function App() {
  // FireStore Set
  const getData = async () => {
    const q = query(collection(db, 'diary'), where('id', '<=', 20));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        console.log(`App firestore => ${doc.id}`, doc.data());
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <MainPage />
    </div>
  );
}
