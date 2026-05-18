import React, { useState } from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import { Icon } from '../general';

export interface SkillsWindowProps extends WindowAppProps {}

const SkillItem: React.FC<{ name: string; iconSrc?: string }> = ({ name, iconSrc }) => (
    <div style={styles.skillItem}>
        {iconSrc ? (
            <img src={iconSrc} alt={name} style={{ width: 24, height: 24, marginRight: 8 }} />
        ) : (
            <div style={{ width: 24, height: 24, marginRight: 8, backgroundColor: '#808080' }} />
        )}
        <span style={{ fontSize: 12 }}>{name}</span>
    </div>
);

const SkillsWindow: React.FC<SkillsWindowProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });
    const [activeTab, setActiveTab] = useState('Technical Skills');

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Skills"
            windowBarIcon="doomIcon"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 NGO MINH THIEN'}
        >
            <div style={styles.page}>
                <div style={styles.header}>
                    <Icon icon="doomIcon" size={48} style={{ marginBottom: 8 }} />
                    <h2 style={{ margin: 0 }}>Skills</h2>
                    <p style={{ margin: 0, color: '#555', fontSize: 12 }}>My Skills and Proficiency</p>
                </div>
                
                <div style={styles.tabsContainer}>
                    <div 
                        style={activeTab === 'Technical Skills' ? styles.activeTab : styles.inactiveTab}
                        onClick={() => setActiveTab('Technical Skills')}
                    >
                        Technical Skills
                    </div>
                    <div 
                        style={activeTab === 'Soft Skills' ? styles.activeTab : styles.inactiveTab}
                        onClick={() => setActiveTab('Soft Skills')}
                    >
                        Soft Skills
                    </div>
                </div>

                <div style={styles.contentContainer}>
                    {activeTab === 'Technical Skills' && (
                        <div style={styles.skillsGrid}>
                            <div style={styles.skillCategory}>
                                <h4 style={styles.categoryTitle}>Languages</h4>
                                <SkillItem name="C#" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                                <SkillItem name="Java" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                                <SkillItem name="PHP" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                                <SkillItem name="Python" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                                <SkillItem name="JavaScript" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                            <div style={styles.skillCategory}>
                                <h4 style={styles.categoryTitle}>Back-end</h4>
                                <SkillItem name="Node.js" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                                <SkillItem name="ASP.NET Core" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
                                <SkillItem name="Spring Boot" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" />
                            </div>
                            <div style={styles.skillCategory}>
                                <h4 style={styles.categoryTitle}>Front-end</h4>
                                <SkillItem name="React" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                <SkillItem name="Bootstrap" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                                <SkillItem name="Tailwind CSS" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
                            </div>
                            <div style={styles.skillCategory}>
                                <h4 style={styles.categoryTitle}>Database</h4>
                                <SkillItem name="MongoDB" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                                <SkillItem name="MySQL" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                            </div>
                            <div style={styles.skillCategory}>
                                <h4 style={styles.categoryTitle}>Tools</h4>
                                <SkillItem name="Figma" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                                <SkillItem name="Postman" iconSrc="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
                                <SkillItem name="Docker" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                            </div>
                            <div style={styles.skillCategory}>
                                <h4 style={styles.categoryTitle}>CMS & Platforms</h4>
                                <SkillItem name="WordPress" iconSrc="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" />
                            </div>
                        </div>
                    )}
                    {activeTab === 'Soft Skills' && (
                        <div style={styles.skillsGrid}>
                            <div style={styles.skillCategory}>
                                <h4 style={styles.categoryTitle}>Communication</h4>
                                <SkillItem name="Teamwork" />
                                <SkillItem name="Presentation" />
                                <SkillItem name="Problem Solving" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Window>
    );
};

const styles: StyleSheetCSS = {
    page: {
        width: '100%',
        height: '100%',
        backgroundColor: '#c0c0c0',
        display: 'flex',
        flexDirection: 'column',
        padding: 24,
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 24,
    },
    tabsContainer: {
        display: 'flex',
        borderBottom: '1px solid #808080',
    },
    activeTab: {
        padding: '4px 16px',
        backgroundColor: '#c0c0c0',
        borderTop: '1px solid #fff',
        borderLeft: '1px solid #fff',
        borderRight: '1px solid #000',
        borderBottom: '1px solid #c0c0c0', // Matches background to hide border
        marginBottom: -1,
        cursor: 'default',
        fontSize: 14,
        zIndex: 1,
    },
    inactiveTab: {
        padding: '4px 16px',
        backgroundColor: '#d4d0c8',
        borderTop: '1px solid #fff',
        borderLeft: '1px solid #fff',
        borderRight: '1px solid #808080',
        borderBottom: '1px solid #808080',
        cursor: 'pointer',
        fontSize: 14,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#c0c0c0',
        border: '1px solid #808080',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        padding: 16,
    },
    skillsGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 24,
    },
    skillCategory: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        minWidth: 150,
    },
    categoryTitle: {
        margin: '0 0 8px 0',
        fontSize: 14,
        fontWeight: 'bold',
    },
    skillItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '4px 8px',
        backgroundColor: '#d4d0c8',
        borderTop: '1px solid #fff',
        borderLeft: '1px solid #fff',
        borderRight: '1px solid #808080',
        borderBottom: '1px solid #808080',
    },
};

export default SkillsWindow;
