import React from 'react';
import Window from '../os/Window';
import useInitialWindowSize from '../../hooks/useInitialWindowSize';
import Resume from '../../assets/resume/CV.pdf';

export interface ResumeWindowProps extends WindowAppProps {}

const ResumeWindow: React.FC<ResumeWindowProps> = (props) => {
    const { initWidth, initHeight } = useInitialWindowSize({ margin: 100 });

    return (
        <Window
            top={24}
            left={56}
            width={initWidth}
            height={initHeight}
            windowTitle="Resume"
            windowBarIcon="credits"
            closeWindow={props.onClose}
            onInteract={props.onInteract}
            minimizeWindow={props.onMinimize}
            bottomLeftText={'© Copyright 2026 NGO MINH THIEN'}
        >
            <div style={{ width: '100%', height: '100%', backgroundColor: '#fff', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: 8, backgroundColor: '#d4d0c8', borderBottom: '1px solid #808080', display: 'flex', gap: 8 }}>
                    <a href={Resume} download="NGO_MINH_THIEN_CV.pdf" style={{ textDecoration: 'none' }}>
                        <button style={{ padding: '2px 8px', cursor: 'pointer' }}>Download</button>
                    </a>
                </div>
                <iframe src={Resume} style={{ flex: 1, border: 'none', width: '100%', height: '100%' }} title="Resume PDF" />
            </div>
        </Window>
    );
};

export default ResumeWindow;
