import React from 'react';
import { Icon } from '../general';
import { IconName } from '../../assets/icons';

export interface ProjectsProps {}

interface ProjectDetailProps {
    title: string;
    description: string | React.ReactNode;
    icon: IconName;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ title, description, icon }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div 
            style={Object.assign(
                {}, 
                styles.projectContainer, 
                isHovered && styles.projectContainerHover
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.projectHeader}>
                <div className="big-button-container" style={styles.iconContainer}>
                    <Icon icon={icon} size={32} />
                </div>
                <h2 style={styles.projectTitle}>{title}</h2>
            </div>
            <div className="text-block" style={styles.projectDescription}>
                <p>{description}</p>
            </div>
        </div>
    );
};

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content" style={styles.page}>
            <div style={styles.header}>
                <Icon icon="project" size={48} style={{ marginBottom: 8 }} />
                <h2 style={{ margin: 0 }}>Projects</h2>
                <p style={{ margin: 0, color: '#555', fontSize: 12 }}>My Professional and Personal Projects</p>
            </div>
            
            <div style={styles.divider} />

            <div style={styles.projectsList}>
                <ProjectDetail 
                    title="Tân Hoa Chatbot Project"
                    icon="windowGameIcon"
                    description="As a new member, I quickly integrated into the team by leveraging AI to master new languages and accelerate development, successfully engineering a high-performance dashboard to visualize real-time chatbot logs."
                />
                
                <ProjectDetail 
                    title="Official Website AITC"
                    icon="showcaseIcon"
                    description={
                        <>
                            Deployed the company's official website (<a href="https://aitc-jsc.com/" target="_blank" rel="noreferrer">aitc-jsc.com</a>) using WordPress, utilizing AI to implement sophisticated JavaScript effects that enhanced visual appeal while ensuring SEO optimization and full responsiveness.
                        </>
                    }
                />

                <ProjectDetail 
                    title="QR CODE - ECARD"
                    icon="computerSmall"
                    description="Developed an event management platform featuring QR-integrated guest tracking and personalized E-card generation, while utilizing AI to design high-end interactive popups for seamless guest check-ins."
                />

                <ProjectDetail 
                    title="Equipment Management System"
                    icon="windowExplorerIcon"
                    description="Deployed a production-ready device management system featuring hardware comparison tools and automated maintenance monitoring. Leveraged AI to optimize hardware specification analysis and intelligent field filtering during Excel imports, transforming raw data into a highly searchable and professional user interface."
                />
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
    projectsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        marginTop: 8,
        width: '100%',
    },
    projectContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#d4d0c8',
        borderTop: '2px solid #808080',
        borderLeft: '2px solid #808080',
        borderRight: '2px solid #fff',
        borderBottom: '2px solid #fff',
        padding: 24,
        boxSizing: 'border-box',
        transition: 'all 0.1s ease-in-out',
        cursor: 'default',
    },
    projectContainerHover: {
        backgroundColor: '#e4e0d8',
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #808080',
        borderBottom: '2px solid #808080',
        boxShadow: '4px 4px 10px rgba(0,0,0,0.2)',
        transform: 'translate(-2px, -2px)',
    },
    projectHeader: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 16,
    },
    iconContainer: {
        width: 48,
        height: 48,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        backgroundColor: '#c0c0c0',
    },
    projectTitle: {
        fontSize: 28,
        margin: 0,
        fontWeight: 'bold',
        color: '#000',
    },
    projectDescription: {
        marginTop: 0,
        fontSize: 16,
        lineHeight: 1.5,
        color: '#000',
    },
};

export default Projects;
