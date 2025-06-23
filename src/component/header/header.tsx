"use client";
import React, { useState, useEffect } from "react";
import "./style.scss";
import logo1 from "../../assests/logo1.png";
import Image from "next/image";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { setActiveItem } from "@/store/slices/menuSlices";

export const Header = () => {
    const navigate=useRouter()
    const dispatch = useDispatch();
    const activeItem = useSelector((state:RootState) => state.menu.activeItem || "home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    console.log(activeItem)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleActive = (item: string) => {
        dispatch(setActiveItem(item));
    };

    const data = [
        { title: "Home", link: "/" },
        { title: "Services", link: "/services" },
        { title: "About Us", link: "/aboutus" },
        { title: "Portfolio", link: "/portfolio" },
        { title: "Contact Us", link: "/contactus" }
    ];

    return (
        <section className={`header ${isScrolled ? "scrolled" : ""}`}>
            <div className="logo" onClick={()=>navigate.push("/")}>
                <Image src={logo1} alt="img" className="headerlogo" />
            </div>
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <ul>
                    {data.map((item) => (
                        <li
                            key={item.title}
                            className={`${activeItem === item.title ? "active" : ""} ${item.title === "Contact Us" ? "btn" : ""}`}
                            onClick={() =>{ handleActive(item.title); navigate.push(item.link)}}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="menu-icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <Menu size={32} color="white" />
            </div>
        </section>
    );
};
