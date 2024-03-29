"use client"
import { useSession } from "next-auth/react";
import styles from "./page.module.css"
import React, { useEffect, useState } from 'react'
import useSWR from "swr"

/* const Dashboard = () => {
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
 */
const Dashboard = () => {
const session = useSession()
console.log(session)
const fetcher = (...args) => fetch(...args).then(res => res.json())
const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts${id}")
console.log(data)
return <div className= {styles.container}>Dashboard</div>
};
export default Dashboard
