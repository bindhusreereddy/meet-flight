import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import customGraphic from './assets/airplane-wizard.png';

const { ipcRenderer } = window.require('electron');



const App = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
    }}>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: '100vw' }}
            transition={{ duration: 10, ease: 'linear' }}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 0,
            }}
            onAnimationComplete={() => {
              setIsVisible(false);
              ipcRenderer.send('close-overlay');
            }}
          >
            {/* Pink notification banner */}
            <div style={{
              padding: '14px 28px',
              backgroundColor: '#3B82F6',
              color: '#F8FAFC',
              borderRadius: '12px',
              fontSize: '28px',
              fontWeight: 600,
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
              letterSpacing: '0.5px',
            }}>
              Meeting with Bindhu in 5 min
            </div>

            {/* Connecting trail line */}
            <div style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #3B82F6, #3B82F6 70%, transparent)',
            }} />

            {/* Custom Canva graphic */}
            <img 
              src={customGraphic} 
              alt="Flying character" 
              style={{ width: '120px', height: '120px', objectFit: 'contain' }} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
