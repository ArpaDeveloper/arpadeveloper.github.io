import { useState } from "react";
import Sidebar from '../Sidebar';
import PS3Background from '../PS3Background';
import Clock from '../clock/clock.js';
import PageButtons from '../page_buttons';
import Timeline from '../timeline/timeline.js';
import HomePage from '../home_page/home_page.js'; 
import Projects from "../project_page/project_page.js";
import './index.scss';

const Layout = () => {
    const [page, setPage] = useState("home");
    const openLinkedIn = () => {
        window.open("https://linkedin.com/in/aarni-viljanen", "_blank");
    };

    return (
        <div className="App">
        <PS3Background />
        <PageButtons setPage={setPage} openLinkedIn={openLinkedIn} />

        <div className="page">
            <span className="tags top-tags">
            &lt;<Clock />&gt;
            </span>

            {/* PAGE SWITCHING */}
            {page === "home" && <HomePage />}
            {page === "timeline" && <Timeline />}
            {page === "projects" && <Projects />}

            <span className="tags bottom-tags">
            &lt;body&gt;
            <br />
            <span className="bottom-tag-html">&lt;activate&gt;</span>
            </span>
        </div>
        </div>
    );
};

export default Layout;