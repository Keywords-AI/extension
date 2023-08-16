import React from "react";
import './popup.css'

const Popup = () => {
    const popTab = {
        width: '360px',
        height: '190px',
        display: 'flex',
        padding: 'var(--space-l, 32px) var(--space-m, 16px)',
        alignItems: 'flex-start',
        gap: 'var(--space-m, 16px)',
        alignSelf: 'stretch',
        flexDirection: 'column' as 'column',
    };

    const tab2 = {
        display: 'flex',
        width: '338px',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const tab3 = {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 'var(--space-s, 8px)',
    };
    const tab4 = {
        display: 'flex',
        width: '338px',
        alignItems: 'flex-start',
        gap: 'var(--space-m, 16px)',
        flexDirection: 'column' as 'column',
    };

    const tab5 = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
    };
    const btn1 = {
        width: '56px',
        height: '24px',
        display: 'inline-flex',
        padding: 'var(--space-s, 8px) var(--space-m, 16px)',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--space-s, 8px)',
        borderRadius: 'var(--space-xs, 4px)',
        background: 'var(--color-blue-blue-500, #0697E0)',
    };
    const title = {
        color: 'var(--color-neutral-grey-900, #151719)',
        fontFamily: 'Inter',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 'normal'
    };
    const para = {
        width: '338px',
        alignSelf: 'stretch',
        color: 'var(--color-neutral-grey-900, #151719)',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '16px',
        letterSpacing: '0.5px',
    };

    const startBtn = {
        color: 'var(--color-neutral-white, #FFF)',
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '18px',
        letterSpacing: '0.5px',
    };
    return (
        <div style={popTab}>
            <div style={tab2}>
                <div style={tab3}>
                    <h1 style={title}>Apply with CareersGPT</h1>
                </div>
            </div>
            <div style ={tab4}>
                <p style={para}>Jobyte boost your job appication through AI generated answers and one-click auto-fill.</p>
                <div style={tab5}>
                    <div style={btn1}>
                        <p style={startBtn}>Start</p>
                    </div>
                </div>
            </div>
            
        </div>
    )


};

export default Popup;