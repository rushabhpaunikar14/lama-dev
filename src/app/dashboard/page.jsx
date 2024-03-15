"use client"
import styles from "./page.module.css"
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
        cache: "no-store",
      });
    
      if (!res.ok) {
        return notFound()
      }
    
      return res.json();
    }
  }, []);
  return (
    <div className={styles.container}>
      Dashboard
    </div>
  )
}

export default Dashboard
