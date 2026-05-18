import React, { useState } from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import { Icon } from '../general';

export interface ExperiencesWindowProps extends WindowAppProps {}

const ExperiencesWindow: React.FC<ExperiencesWindowProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });
    const [activeTab, setActiveTab] = useState('Professional');

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Experiences"
            windowBarIcon="command-line"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 NGO MINH THIEN'}
        >
            <div style={styles.page}>
                <div style={styles.header}>
                    <Icon icon="command-line" size={48} style={{ marginBottom: 8 }} />
                    <h2 style={{ margin: 0 }}>Experiences</h2>
                    <p style={{ margin: 0, color: '#555', fontSize: 12 }}>My Professional/Organizational Experiences</p>
                </div>
                
                <div style={styles.tabsContainer}>
                    <div 
                        style={activeTab === 'Professional' ? styles.activeTab : styles.inactiveTab}
                        onClick={() => setActiveTab('Professional')}
                    >
                        Professional
                    </div>
                    <div 
                        style={activeTab === 'Organizational' ? styles.activeTab : styles.inactiveTab}
                        onClick={() => setActiveTab('Organizational')}
                    >
                        Organizational
                    </div>
                    <div 
                        style={activeTab === 'Volunteer' ? styles.activeTab : styles.inactiveTab}
                        onClick={() => setActiveTab('Volunteer')}
                    >
                        Volunteer
                    </div>
                </div>

                <div style={styles.contentContainer}>
                    {activeTab === 'Professional' && (
                        <div style={styles.experienceCard}>
                            <div style={styles.jobHeaderRow}>
                                <div style={styles.jobHeaderLeft}>
                                    <h3 style={styles.jobTitle}>Asia Information Technology Center (AITC)</h3>
                                    <i style={styles.jobRole}>Software Engineer</i>
                                </div>
                                <div style={styles.jobHeaderRight}>
                                    <b>Dec 2025 - Present</b>
                                </div>
                            </div>
                            
                            <div style={styles.dividerSmall} />
                            
                            <p style={styles.summaryText}>
                                Asia Information Technology Center (AITC) is a leading tech 
                                provider. As a Software Engineer, I focus on full-stack 
                                development, system optimization, and integrating AI 
                                solutions to improve business efficiency.
                            </p>

                            <ul style={styles.list}>
                                <li>Developed and maintained the official corporate website using WordPress, leveraging AI to optimize JavaScript and enhance UI/UX with modern animations.</li>
                                <li>Engineered the "Tân Hòa Chatbot" dashboard using React, integrating advanced AI capabilities for automated customer interaction and real-time data visualization.</li>
                                <li>Built a QR Code E-card system featuring impressive popups and seamless integration for guest management, optimized through AI-driven logic.</li>
                                <li>Collaborated on internal equipment management tools, implementing configuration comparison features and proactive maintenance alert systems.</li>
                                <li>Focused on building clean, modular architecture and optimizing API performance to ensure system scalability across multiple enterprise applications.</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'Organizational' && (
                        <div style={styles.experienceCard}>
                            <p>No organizational experiences listed.</p>
                        </div>
                    )}
                    {activeTab === 'Volunteer' && (
                        <div style={styles.experienceCard}>
                            <p>No volunteer experiences listed.</p>
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
        borderBottom: '1px solid #c0c0c0', 
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
        padding: 24,
    },
    experienceCard: {
        display: 'flex',
        flexDirection: 'column',
    },
    jobTitle: {
        margin: '0 0 4px 0',
        fontSize: 20,
        fontWeight: 'bold',
    },
    jobRole: {
        fontSize: 16,
        color: '#333',
    },
    jobHeaderRow: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 8,
    },
    jobHeaderLeft: {
        display: 'flex',
        flexDirection: 'column',
    },
    jobHeaderRight: {
        display: 'flex',
        alignItems: 'flex-start',
    },
    dividerSmall: {
        width: '100%',
        height: 1,
        backgroundColor: '#808080',
        borderBottom: '1px solid #fff',
        marginBottom: 16,
    },
    summaryText: {
        fontSize: 14,
        lineHeight: 1.6,
        marginBottom: 16,
        color: '#222',
        fontStyle: 'italic',
    },
    list: {
        margin: 0,
        paddingLeft: 24,
        fontSize: 14,
        lineHeight: 1.6,
    },
};

export default ExperiencesWindow;
