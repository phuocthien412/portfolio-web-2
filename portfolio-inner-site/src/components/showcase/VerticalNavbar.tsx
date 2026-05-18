import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '../general';
import { IconName } from '../../assets/icons';
import thienAvatar from '../../assets/icons/Thien2.jpg';

export interface VerticalNavbarProps {}

interface NavButtonProps {
    icon: IconName;
    text: string;
    to: string;
    isCollapsed: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, text, to, isCollapsed }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = location.pathname === `/${to}`;

    const handleClick = () => {
        navigate(`/${to}`);
    };

    return (
        <button 
            style={Object.assign({}, styles.navButton, isActive && styles.navButtonActive)} 
            onClick={handleClick}
            title={text}
        >
            <Icon icon={icon} size={32} />
            {!isCollapsed && <span style={styles.navButtonText}>{text}</span>}
        </button>
    );
};

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [location.pathname]);

    if (isHome) return null;

    return (
        <div style={Object.assign({}, styles.navbar, isCollapsed && styles.collapsedNavbar)}>
            <div style={styles.toggleContainer}>
                <button 
                    onClick={() => setIsCollapsed(!isCollapsed)} 
                    style={styles.toggleBtn}
                >
                    {isCollapsed ? '☰' : '×'}
                </button>
            </div>
            
            {!isCollapsed && (
                <div style={styles.header}>
                    <img 
                        src={thienAvatar} 
                        alt="Ngo Minh Thien" 
                        style={{
                            width: 120, 
                            height: 120, 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            marginBottom: 16,
                            border: '3px solid #808080',
                            boxShadow: 'inset -2px -2px #dfdfdf, inset 2px 2px #000'
                        }} 
                    />
                    <h2 style={{margin: 0, fontSize: 24}}>NGO MINH THIEN</h2>
                </div>
            )}

            <div style={styles.links}>
                <NavButton icon="myComputer" text="Home" to="" isCollapsed={isCollapsed} />
                {/* <NavButton icon="about" text="About" to="about" isCollapsed={isCollapsed} /> */}
                <NavButton icon="project" text="Projects" to="projects" isCollapsed={isCollapsed} />
                <NavButton icon="doomIcon" text="Skills" to="skills" isCollapsed={isCollapsed} />
                <NavButton icon="command-line" text="Experience" to="experience" isCollapsed={isCollapsed} />
                <NavButton icon="education" text="Educations" to="educations" isCollapsed={isCollapsed} />
                <NavButton icon="certificate" text="Certifications" to="certifications" isCollapsed={isCollapsed} />
                <NavButton icon="credits" text="Resume" to="resume" isCollapsed={isCollapsed} />
                <NavButton icon="contact-us" text="Contact" to="contact" isCollapsed={isCollapsed} />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 250,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        boxSizing: 'border-box',
        backgroundColor: '#c0c0c0',
        borderRight: '2px solid #808080',
        flexShrink: 0,
        transition: 'width 0.2s',
        overflowY: 'auto',
    },
    collapsedNavbar: {
        width: 70,
        padding: '16px 8px',
        alignItems: 'center',
    },
    toggleContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: 24,
    },
    toggleBtn: {
        background: '#c0c0c0',
        borderTop: '1px solid #fff',
        borderLeft: '1px solid #fff',
        borderRight: '1px solid #808080',
        borderBottom: '1px solid #808080',
        fontSize: 16,
        fontWeight: 'bold',
        cursor: 'pointer',
        padding: '4px 8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 32,
        textAlign: 'center',
        borderBottom: '2px solid #808080',
        paddingBottom: 16,
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        flex: 1,
    },
    navButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
        backgroundColor: '#c0c0c0',
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #000',
        borderBottom: '2px solid #000',
        boxShadow: 'inset -1px -1px #808080, inset 1px 1px #dfdfdf',
        cursor: 'pointer',
        fontFamily: 'inherit',
        width: '100%',
        boxSizing: 'border-box',
    },
    navButtonActive: {
        borderTop: '2px solid #000',
        borderLeft: '2px solid #000',
        borderRight: '2px solid #fff',
        borderBottom: '2px solid #fff',
        boxShadow: 'inset 1px 1px #808080, inset -1px -1px #dfdfdf',
        backgroundColor: '#d4d0c8',
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 12,
        fontFamily: 'Pixel, sans-serif',
    },
};

export default VerticalNavbar;
