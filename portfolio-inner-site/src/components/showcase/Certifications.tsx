import React from 'react';
import { Icon } from '../general';

// const CertificateItem: React.FC<{ title: string; issuer: string; date: string }> = ({ title, issuer, date }) => (
//     <div style={styles.certItem}>
//         <Icon icon="certificate" size={32} style={{ marginRight: 16 }} />
//         <div>
//             <h4 style={{ margin: 0 }}>{title}</h4>
//             <p style={{ margin: 0, fontSize: 12, color: '#555' }}>{issuer} | {date}</p>
//         </div>
//     </div>
// );

const Certifications: React.FC = () => {
    return (
        <div className="site-page-content" style={styles.page}>
            <div style={styles.header}>
                <Icon icon="certificate" size={48} style={{ marginBottom: 8 }} />
                <h2 style={{ margin: 0 }}>Certifications</h2>
                <p style={{ margin: 0, color: '#555', fontSize: 12 }}>Professional Certifications and Achievements</p>
            </div>
            
            <div style={styles.contentContainer}>
                <div style={styles.emptyState}>
                    <p>Coming soon...</p>
                    <p style={{ fontSize: 12, color: '#666', marginTop: 8 }}>I am currently working on obtaining professional certifications. Stay tuned!</p>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        width: '100%',
        backgroundColor: '#c0c0c0',
        padding: 48,
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 24,
    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 700,
        margin: '0 auto',
    },
    certItem: {
        display: 'flex',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#d4d0c8',
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #808080',
        borderBottom: '2px solid #808080',
        boxShadow: 'inset -1px -1px #404040',
    },
    emptyState: {
        textAlign: 'center',
        padding: 48,
        backgroundColor: '#d4d0c8',
        border: '1px solid #808080',
        borderTopColor: '#fff',
        borderLeftColor: '#fff',
    },
};

export default Certifications;
