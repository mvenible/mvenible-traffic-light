// src/js/component/TrafficLight.js
import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("red");
  const [hasPurple, setHasPurple] = useState(false);

  const cycleColor = () => {
    const colors = hasPurple ? ["red", "yellow", "green", "purple"] : ["red", "yellow", "green"];
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  const addPurple = () => {
    setHasPurple(true);
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      padding: '20px'
    }}>
      {/* Traffic Light Container */}
      <div style={{
        backgroundColor: 'black',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
      }}>
        {/* Red Light */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '4px solid #ccc',
            backgroundColor: color === "red" ? '#ef4444' : '#7f1d1d',
            marginBottom: '20px',
            cursor: 'pointer',
            boxShadow: color === "red" ? '0 0 30px #ef4444' : 'none',
            transform: color === "red" ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
          onClick={() => setColor("red")}
        ></div>

        {/* Yellow Light */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '4px solid #ccc',
            backgroundColor: color === "yellow" ? '#fbbf24' : '#92400e',
            marginBottom: '20px',
            cursor: 'pointer',
            boxShadow: color === "yellow" ? '0 0 30px #fbbf24' : 'none',
            transform: color === "yellow" ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
          onClick={() => setColor("yellow")}
        ></div>

        {/* Green Light */}
        <div
          style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            border: '4px solid #ccc',
            backgroundColor: color === "green" ? '#10b981' : '#14532d',
            marginBottom: hasPurple ? '20px' : '0',
            cursor: 'pointer',
            boxShadow: color === "green" ? '0 0 30px #10b981' : 'none',
            transform: color === "green" ? 'scale(1.1)' : 'scale(1)',
            transition: 'all 0.3s ease'
          }}
          onClick={() => setColor("green")}
        ></div>

        {/* Purple Light */}
        {hasPurple && (
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '4px solid #ccc',
              backgroundColor: color === "purple" ? '#a855f7' : '#581c87',
              cursor: 'pointer',
              boxShadow: color === "purple" ? '0 0 30px #a855f7' : 'none',
              transform: color === "purple" ? 'scale(1.1)' : 'scale(1)',
              transition: 'all 0.3s ease'
            }}
            onClick={() => setColor("purple")}
          ></div>
        )}
      </div>

      {/* Control Buttons */}
      <div style={{ marginTop: '30px' }}>
        <button
          onClick={cycleColor}
          style={{
            padding: '12px 24px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            marginRight: '10px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Cycle Colors
        </button>

        {!hasPurple && (
          <button
            onClick={addPurple}
            style={{
              padding: '12px 24px',
              backgroundColor: '#a855f7',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Add Purple Light
          </button>
        )}
      </div>

      {/* Instructions */}
      <div style={{ 
        marginTop: '30px', 
        textAlign: 'center', 
        color: '#6b7280', 
        maxWidth: '384px' 
      }}>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '600', 
          marginBottom: '8px' 
        }}>
          How to use:
        </h3>
        <p style={{ 
          fontSize: '14px',
          marginBottom: '8px' 
        }}>
          Click on any light to make it glow. Use the "Cycle Colors" button to automatically switch between colors, 
          or click "Add Purple Light" to add an extra color to the traffic light.
        </p>
        <p style={{ 
          fontSize: '12px', 
          marginTop: '8px', 
          color: '#9ca3af' 
        }}>
          Current color: <span style={{ fontWeight: '600' }}>{color}</span>
        </p>
      </div>
    </div>
  );
};

export default TrafficLight;