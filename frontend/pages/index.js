import { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import todoAPI from "./api/todo/todo.api";

import Login from "./login";
import Todo from "./todo";

export default function Home() {
	const [isAuthenticated, setIsAuthenticated] = useState (false);

	useEffect(()=>{
		if(localStorage.getItem("token") != null){
			setIsAuthenticated(true)
		}else{
			setIsAuthenticated(false)

		}
	})
	return (
		<div >
			{isAuthenticated ? <Todo />: <Login/> }
		</div>
	)
}
