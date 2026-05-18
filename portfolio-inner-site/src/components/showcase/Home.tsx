import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../general';
import { IconName } from '../../assets/icons';

export interface HomeProps {}

interface WindowsButtonProps {
    icon?: IconName;
    customIcon?: string;
    text: string;
    onClick?: () => void;
    route?: string;
}

const WindowsButton: React.FC<WindowsButtonProps> = ({ icon, customIcon, text, onClick, route }) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (route) {
            navigate(`/${route}`);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <button style={styles.winButton} onMouseDown={handleClick}>
            {icon && <Icon icon={icon} size={24} style={{ marginRight: 8 }} />}
            {customIcon && <img src={customIcon} alt="" style={{ width: 24, height: 24, marginRight: 8 }} />}
            <span style={styles.winButtonText}>{text}</span>
        </button>
    );
};

// const Tag: React.FC<{ text: string }> = ({ text }) => {
//     return (
//         <div style={styles.tag}>
//             <span style={styles.tagText}>{text}</span>
//         </div>
//     );
// };

const Divider = () => <div style={styles.divider} />;

const Home: React.FC<HomeProps> = (props) => {
    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <Icon icon="computerBig" size={64} style={{ marginBottom: 8 }} />
                <h1 style={styles.name}>NGO MINH THIEN</h1>
                <h3 style={styles.subtitle}>Software Engineer</h3>
                <h4 style={styles.location}>Vietnam</h4>
            </div>
            
            {/* <div style={styles.tagsContainer}>
                <Tag text="React" />
                <Tag text="Python" />
                <Tag text="TypeScript" />
                <Tag text="Full-stack" />
                <Tag text="AI Integration" />
                <Tag text="WebSockets" />
            </div> */}

            <Divider />

            <div style={styles.buttonsContainer}>
                <div style={styles.buttonsRow}>
                    {/* <WindowsButton icon="about" text="About" route="about" /> */}
                    <WindowsButton icon="project" text="Projects" route="projects" />
                    <WindowsButton icon="doomIcon" text="Skills" route="skills" />
                    <WindowsButton icon="command-line" text="Experiences" route="experience" />
                </div>
                <div style={styles.buttonsRow}>
                    <WindowsButton icon="education" text="Educations" route="educations" />
                    <WindowsButton icon="certificate" text="Certifications" route="certifications" />
                    <WindowsButton icon="credits" text="Resume" route="resume" />
                    <WindowsButton 
                        customIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                        text="LinkedIn" 
                        onClick={() => window.open(process.env.REACT_APP_LINKEDIN_URL, '_blank')} 
                    />
                </div>
                <div style={styles.buttonsRow}>
                    <WindowsButton 
                        customIcon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                        text="GitHub" 
                        onClick={() => window.open(process.env.REACT_APP_GITHUB_URL, '_blank')} 
                    />
                </div>
            </div>
            
            <Divider />

            <div style={styles.bioContainer}>
                <div style={styles.bioColumn}>
                    <p>
                        Hello there! I'm <b>Ngo Minh Thien</b>, Full-Stack developer capable of integrating AI and multi-agent architecture to drive automation. 
                        I deliver production-ready solutions in enterprise environments, prioritizing maintainable code and high-performance architecture. I aim to contribute and promote technical excellence 
                        in large-scale software projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        backgroundColor: '#c0c0c0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        padding: '32px 48px',
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    header: {
        textAlign: 'center',
        marginBottom: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    name: {
        fontSize: 32,
        marginBottom: 4,
        fontFamily: 'Pixel, sans-serif', // assuming pixel font exists, otherwise fallback
    },
    subtitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 2,
    },
    location: {
        fontSize: 14,
        color: '#777',
    },
    tagsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 24,
        maxWidth: 700,
        gap: 8,
    },
    tag: {
        padding: '2px 6px',
        backgroundColor: '#c0c0c0',
        borderTop: '1px solid #fff',
        borderLeft: '1px solid #fff',
        borderRight: '1px solid #808080',
        borderBottom: '1px solid #808080',
    },
    tagText: {
        fontSize: 12,
        color: '#000',
    },
    divider: {
        width: '100%',
        maxWidth: 800,
        height: 2,
        backgroundColor: '#fff',
        borderTop: '1px solid #808080',
        marginBottom: 24,
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12,
        marginBottom: 24,
    },
    buttonsRow: {
        display: 'flex',
        justifyContent: 'center',
        gap: 12,
        flexWrap: 'wrap',
    },
    winButton: {
        display: 'flex',
        alignItems: 'center',
        padding: '4px 12px',
        backgroundColor: '#c0c0c0',
        borderTop: '2px solid #fff',
        borderLeft: '2px solid #fff',
        borderRight: '2px solid #000',
        borderBottom: '2px solid #000',
        boxShadow: 'inset -1px -1px #808080, inset 1px 1px #dfdfdf',
        cursor: 'pointer',
        fontFamily: 'inherit',
    },
    winButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    bioContainer: {
        maxWidth: 800,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: 32,
        marginTop: 8,
    },
    bioColumn: {
        flex: 1,
        fontSize: 14,
        lineHeight: 1.6,
        color: '#000',
        textAlign: 'justify',
    },
    bioDivider: {
        width: 1,
        backgroundColor: '#808080',
        borderRight: '1px solid #fff',
    },
};

export default Home;
