import React from 'react';
import ResumePDF from '../../assets/resume/CV.pdf';
import { Icon } from '../general';

const Resume: React.FC = () => {
    return (
        <div className="site-page-content" style={styles.page}>
            <div style={styles.header}>
                <Icon icon="credits" size={48} style={{ marginBottom: 8 }} />
                <h2 style={{ margin: 0 }}>Resume</h2>
                <p style={{ margin: 0, color: '#555', fontSize: 12 }}>Curriculum Vitae</p>
            </div>
            
            <div style={styles.contentContainer}>
                <div style={styles.toolbar}>
                    <a href={ResumePDF} download="NGO_MINH_THIEN_CV.pdf" style={{ textDecoration: 'none' }}>
                        <button style={styles.downloadButton}>Download CV</button>
                    </a>
                </div>
                <div style={styles.pdfContainer}>
                    <iframe src={ResumePDF} style={styles.iframe} title="Resume PDF" />
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        width: '100%',
        height: '100%',
        backgroundColor: '#c0c0c0',
        padding: 48,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 24,
    },
    contentContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        border: '1px solid #808080',
        borderTopColor: '#000',
        borderLeftColor: '#000',
    },
    toolbar: {
        padding: 8,
        backgroundColor: '#d4d0c8',
        borderBottom: '1px solid #808080',
    },
    downloadButton: {
        padding: '4px 16px',
        backgroundColor: '#c0c0c0',
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #000',
        borderBottom: '2px solid #000',
        cursor: 'pointer',
        fontSize: 14,
        fontWeight: 'bold',
    },
    pdfContainer: {
        flex: 1,
    },
    iframe: {
        width: '100%',
        height: '100%',
        border: 'none',
    },
};

export default Resume;
