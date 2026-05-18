import React from 'react';
import { Icon } from '../general';

const Educations: React.FC = () => {
    return (
        <div className="site-page-content" style={styles.page}>
            <div style={styles.header}>
                <Icon icon="education" size={48} style={{ marginBottom: 8 }} />
                <h2 style={{ margin: 0 }}>Educations</h2>
                <p style={{ margin: 0, color: '#555', fontSize: 12 }}>Academic Background</p>
            </div>

            <div style={styles.divider} />
            
            <div style={styles.contentContainer}>
                <div style={styles.logoPlaceholder}>
                    <Icon icon="hutech" size={128} />
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: 32 }}>Ho Chi Minh City University of Technology</h3>
                
                <div style={styles.row}>
                    <b>Software Engineering</b>
                    <span>2021 - 2025</span>
                </div>

                <p style={{ marginTop: 32, fontSize: 14, lineHeight: 1.6, textAlign: 'justify' }}>
                    My academic foundation at Ho Chi Minh City University of Technology is backed by solid, production-ready experience, where I have engineered real-time AI chatbot management systems, integrated image-based search models, and architected data-driven full-stack applications. I focus on leveraging modern frameworks like FastAPI and robust UI tools to build clean, maintainable, and intelligent web solutions that solve complex enterprise problems.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        width: '100%',
        backgroundColor: '#c0c0c0',
        padding: '24px 48px',
        boxSizing: 'border-box',
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
        backgroundColor: '#fff',
        borderTop: '2px solid #808080',
        borderLeft: '2px solid #808080',
        borderRight: '2px solid #fff',
        borderBottom: '2px solid #fff',
        padding: 32,
        maxWidth: 700,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'inset -1px -1px #404040, 4px 4px 10px rgba(0,0,0,0.1)',
    },
    logoPlaceholder: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 24,
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #eee',
        paddingBottom: 8,
        marginBottom: 8,
    },
};

export default Educations;
