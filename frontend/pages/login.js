import { useState, useEffect } from "react";
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import authAPI from "./api/auth/auth.api";

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);


	const Login = (e) => {
		
		e.preventDefault();
		const userObj ={
			username:username,
			password:password
		}
		authAPI.authLogin(userObj).then((res)=>{
			localStorage.setItem('token',res)
			window.location.href = '/';
		}).catch((e)=>{
			setError(true)
			console.log(e)
		})


	};
	const handleChange = ({ currentTarget: input }) => {
		setError(false)
		if (input.name == "username") {
			setUsername(input.value);

		} else {
			setPassword(input.value);
		}
		
	};
	return (
		<div >
			<Head>
				<title>Todoey</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
			<h1 className={styles.heading}>TodoeY - todo list application</h1>
				<div className={styles.container_login}>
				<form onSubmit={Login} className={styles.form_container_login}>
						<input
							className={styles.input_login}
							type="text"
							name="username"
							placeholder="Enter Username..."
							onChange={handleChange}
							value={username}
						/>
						<br/>
						<input
							className={styles.input_login}
							type="password"
							name="password"
							placeholder="Enter Password..."
							onChange={handleChange}
							value={password}
						/>
						<button type="submit" className={styles.submit_btn_login}>
							Login
						</button>
						<Link href="../register">
						<button className={styles.submit_btn_login}>
							Register
						</button>
						</Link>
						
					</form>
					{/* {todos.length === 0 && <h2 className={styles.no_tasks}>No tasks</h2>} */}
					{error?<h2 className={styles.login_error}>Incorrect Password. Please enter the correct password</h2>:""}


				</div>
			</main>
		</div>
	)
}