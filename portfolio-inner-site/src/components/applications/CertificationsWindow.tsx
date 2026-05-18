import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import { Icon } from '../general';

export interface CertificationsWindowProps extends WindowAppProps {}

// const CertCard: React.FC<{ title: string; issuer: string; date: string }> = ({ title, issuer, date }) => (
//     <div style={styles.certCard}>
//         <div style={styles.certHeader}>
//             <strong>{issuer}</strong>
//             <span style={{ fontSize: 8, color: '#777' }}>CERTIFICATE OF COMPLETION</span>
//         </div>
//         <h4 style={styles.certTitle}>{title}</h4>
//         <div style={styles.certFooter}>
//             <span>NGO MINH THIEN</span>
//             <span style={{ fontSize: 10, color: '#555' }}>Date: {date}</span>
//         </div>
//     </div>
// );

const CertificationsWindow: React.FC<CertificationsWindowProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Certifications"
            windowBarIcon="certificate"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 NGO MINH THIEN'}
        >
            <div style={styles.page}>
                <div style={styles.header}>
                    <Icon icon="certificate" size={48} style={{ marginBottom: 8 }} />
                    <h2 style={{ margin: 0 }}>Certifications</h2>
                    <p style={{ margin: 0, color: '#555', fontSize: 12 }}>A complete lists of my certifications and achievements</p>
                </div>
                
                <div style={styles.divider} />

                <div style={styles.contentContainer}>
                    <div style={styles.emptyState}>
                        <p>Coming soon...</p>
                        <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>I am currently working on obtaining professional certifications. Stay tuned!</p>
                    </div>
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
        padding: '24px 48px',
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 24,
    },
    divider: {
        width: '100%',
        height: 2,
        backgroundColor: '#fff',
        borderTop: '1px solid #808080',
        marginBottom: 24,
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    emptyState: {
        textAlign: 'center',
        padding: 48,
        backgroundColor: '#d4d0c8',
        border: '1px solid #808080',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
        width: '100%',
        maxWidth: 400,
    },
};

export default CertificationsWindow;
