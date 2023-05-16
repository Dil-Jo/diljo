"use client";
import Logo from "./Logo";
import { useEffect, useState, useRef, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Signin from "./Signin";
import Signup from "./Signup";
import GlobalContext from "../Contexts/GlobalContext";
import TermsAndConditions from "../global-components/TermsAndConditions";
import { setTimeout } from "timers";


export default function Navbar(props) {
	const globalProps = useContext(GlobalContext);
	// console.log(globalProps.login)
	const { pb, globalLogin, setGlobalLogin } = globalProps;
	const [isOpen, setIsOpen] = useState(false);
	const navbarRef = useRef(null);
	const router = usePathname();

	function NavbarOpen() {
		setIsOpen(!isOpen);
	}

	function NavDataComponent() {

		// const [loginStatus, setLoginStatus] = useState(false)

		// let Login = false;
		useEffect(() => {
			if (globalLogin) {

				pb.collection('users').authRefresh().then((res) => {
					setGlobalLogin(pb.authStore.baseToken !== '');
				})
			}
		}, []);
		return (
			<>
				<Signup pb={pb} />
				<Signin pb={pb} />
				<TermsAndConditions />
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between py-4 ">
						<Link href="/">
							<Logo height="50px" color={"black"} />
						</Link>
						<div className="hidden md:flex md:items-center">
							<Links />
						</div>
						{globalLogin ? (
							<div className={"hidden md:flex md:items-center"}>
								<AfterLogin pb={pb} setGlobalLogin={setGlobalLogin} />
							</div>
						) : (
							<div className="hidden md:flex md:items-center">
								<Buttons />
							</div>
						)}
						<div className="cursor-pointer md:hidden " onClick={NavbarOpen}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-black"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M12.9499909,17 C12.7183558,18.1411202 11.709479,19 10.5,19 C9.29052104,19 8.28164422,18.1411202 8.05000906,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.2238576 3.22385763,16 3.5,16 L8.05000906,16 C8.28164422,14.8588798 9.29052104,14 10.5,14 C11.709479,14 12.7183558,14.8588798 12.9499909,16 L20.5,16 C20.7761424,16 21,16.2238576 21,16.5 C21,16.7761424 20.7761424,17 20.5,17 L12.9499909,17 Z M18.9499909,12 C18.7183558,13.1411202 17.709479,14 16.5,14 C15.290521,14 14.2816442,13.1411202 14.0500091,12 L3.5,12 C3.22385763,12 3,11.7761424 3,11.5 C3,11.2238576 3.22385763,11 3.5,11 L14.0500091,11 C14.2816442,9.85887984 15.290521,9 16.5,9 C17.709479,9 18.7183558,9.85887984 18.9499909,11 L20.5,11 C20.7761424,11 21,11.2238576 21,11.5 C21,11.7761424 20.7761424,12 20.5,12 L18.9499909,12 Z M9.94999094,7 C9.71835578,8.14112016 8.70947896,9 7.5,9 C6.29052104,9 5.28164422,8.14112016 5.05000906,7 L3.5,7 C3.22385763,7 3,6.77614237 3,6.5 C3,6.22385763 3.22385763,6 3.5,6 L5.05000906,6 C5.28164422,4.85887984 6.29052104,4 7.5,4 C8.70947896,4 9.71835578,4.85887984 9.94999094,6 L20.5,6 C20.7761424,6 21,6.22385763 21,6.5 C21,6.77614237 20.7761424,7 20.5,7 L9.94999094,7 Z M7.5,8 C8.32842712,8 9,7.32842712 9,6.5 C9,5.67157288 8.32842712,5 7.5,5 C6.67157288,5 6,5.67157288 6,6.5 C6,7.32842712 6.67157288,8 7.5,8 Z M16.5,13 C17.3284271,13 18,12.3284271 18,11.5 C18,10.6715729 17.3284271,10 16.5,10 C15.6715729,10 15,10.6715729 15,11.5 C15,12.3284271 15.6715729,13 16.5,13 Z M10.5,18 C11.3284271,18 12,17.3284271 12,16.5 C12,15.6715729 11.3284271,15 10.5,15 C9.67157288,15 9,15.6715729 9,16.5 C9,17.3284271 9.67157288,18 10.5,18 Z"
								/>
							</svg>
						</div>
					</div>

					<div
						className={`${isOpen ? "block" : "hidden"
							} border-t-2 bg-ten py-2 md:hidden`}
					>
						<div className="flex flex-col">
							<Links />
							{globalLogin ? (
								<div className="flex w-full border-t-2 pt-2">
									<AfterLogin pb={pb} setGlobalLogin={setGlobalLogin} />
								</div>
							) : (
								<div className="flex items-center justify-between border-t-2 pt-2">
									<Buttons />
								</div>
							)}
						</div>
					</div>
				</div>
			</>
		);
	}

	useEffect(() => {
		if (router === "/") {
			function scrollFunction() {
				if (
					document.body.scrollTop > 80 ||
					document.documentElement.scrollTop > 80
				) {
					navbarRef.current.style.marginTop = "-4.49rem";
					navbarRef.current.style.transition = "0.3s";
					navbarRef.current.style.borderRadius = "0";
					navbarRef.current.style.width = "100%";
					navbarRef.current.style.marginLeft = "0";
				} else if (
					document.body.scrollTop <= 80 ||
					document.documentElement.scrollTop <= 80
				) {
					navbarRef.current.style.marginTop = "-2.5rem";
					navbarRef.current.style.transition = "0.3s";
					navbarRef.current.style.borderRadius = "0.75rem";
					navbarRef.current.style.width = "calc(100% - 2.5rem)";
					navbarRef.current.style.marginLeft = "1rem";
				}
			}

			window.onscroll = scrollFunction;

			return () => {
				window.onscroll = null;
			};
		}
	}, [router]);

	return (
		<>

			{router === "/" ? (
				<div
					className="fixed z-40 -m-[2.5rem] mx-4 rounded-xl shadow-md bg-ten"
					ref={navbarRef}
					style={{ width: "calc(100% - 2.5rem)" }}
				>
					<NavDataComponent />
				</div>
			) : router === "/raisefunds" ? (
				<div
					className="z-40 shadow-md bg-ten"
					ref={navbarRef}
					style={{ width: "100%" }}
				>
					<NavDataComponent />
				</div>)
				//  : router === "/nearbyDonations"?
				//   <div
				//     className="z-50 shadow-md bg-ten"
				//     ref={navbarRef}
				//     style={{ width: "100%" }}
				//   >
				//     <NavDataComponent />
				//   </div>
				:

				(
					<div
						className="fixed z-40 shadow-md bg-ten"
						ref={navbarRef}
						style={{ width: "100%" }}
					>
						<NavDataComponent />
					</div>
				)}
		</>
	);
}

//Component to display the nav data and adding links
function Links() {
	const [hoveredIndex, setHoveredIndex] = useState(null);
	const [flag, setFlag] = useState(false);
	const globalProps = useContext(GlobalContext);
	const { pb } = globalProps;

	//navebar items and their linsk
	const menuItems = [
		{ id: 1, name: "EXPLORE", link: "/explore", flag: false },
		{ id: 2, name: "NEARBY DONATIONS", link: "/nearbyDonations", flag: flag },
		{ id: 3, name: "CHARITIES", link: "/charities", flag: false },
		{ id: 4, name: "START A FUNDRAISER", link: "/raisefunds", flag: flag },
	];

	useEffect(() => {
		if (!pb.authStore?.model?.id) {
			setFlag(true);
		}
	}, []);

	return (
		<>
			{menuItems.map((item) => (
				<div
					key={item.id}
					className="mx-2"
					onMouseEnter={() => setHoveredIndex(item.id)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					{item.flag ? (
						<label
							htmlFor={"sign-in"}
							className={`lg:text-md mx-1 text-sm font-semibold tracking-tighter text-gray-800 hover:text-[#476dae]`}
						>
							{item.name}
						</label>
					) : (
						<Link
							href={`${item.link}`}
							className={`lg:text-md mx-1 text-sm font-semibold tracking-tighter text-gray-800 hover:text-[#476dae]`}
						>
							{item.name}
						</Link>
					)}
					<div
						className={`h-1 bg-six transition-all duration-500 ease-in-out ${hoveredIndex === item.id ? "w-full" : "w-0"
							}`}
					></div>
				</div>
			))}
		</>
	);
}

// Making the sign in signup buttons
function Buttons() {
	return (
		<>
			<label
				className="rounded-lg mr-2 border-2 border-gray-600 px-4 py-1 text-sm font-semibold text-gray-800 hover:border-[#476dae] hover:text-[#476dae] duration-200"
				htmlFor="sign-in"
			>
				Sign in
			</label>
			<label
				className="rounded-lg mr-2 border-2 border-gray-600 px-4 py-1 text-sm font-semibold text-gray-800 hover:border-[#476dae] hover:text-[#476dae] duration-200"
				htmlFor="sign-up"
			>
				Sign up
			</label>
		</>
	);
}

function AfterLogin(props) {
	const logoutRef = useRef(null);
	const { pb, setGlobalLogin } = props;
	//Async function to remove users data from auth store on login
	const logoutUser = async () => {
		await pb.authStore.clear();
		setTimeout(() => {
			setGlobalLogin(false)
			window.location.reload();
		}, 800)
		return true
	};

	return (
		<div className={"flex w-full justify-between"}>
			<button
				className="rounded-lg mr-2 border-2 border-gray-600 px-4 py-1 text-sm font-semibold text-gray-800 hover:border-[#476dae] hover:text-[#476dae] duration-200 "
				ref={logoutRef}
				onClick={() => {
					// localStorage.removeItem("Login");
					logoutUser();
				}}
			>
				Logout
			</button>
			<button className="rounded-lg mr-2 border-2 border-gray-600 px-4 py-1 text-sm font-semibold text-gray-800 hover:border-[#476dae] hover:text-[#476dae] duration-200 "
			>
				<Link href={`/profile/${pb?.authStore?.model?.id}/about`}>
					Profile
				</Link>

			</button>
		</div>
	);
}