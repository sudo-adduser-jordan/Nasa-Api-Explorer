'use client';
import { useState } from 'react';
import { Metadata } from 'next';
import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import './navigation.module.css';

function Navigation({ children }: { children: React.ReactNode }) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };
    const hideSidebar = () => {
        setSidebar(false);
    };

    return (
        <>
            <Topbar showSidebar={showSidebar} />
            <main onClick={hideSidebar}>
                <Sidebar sidebar={sidebar} />
                {children}
            </main>
        </>
    );
}

export default Navigation;
