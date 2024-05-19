import React, { useState, useEffect } from 'react';

const Table = () => {
  const [columnWidth, setColumnWidth] = useState('50%'); // Initial width of the first column
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const handleMouseUp = () => {
      setDragging(false);
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      const tableRect = event.target.parentNode.getBoundingClientRect();
      const newWidth = ((event.clientX - tableRect.left) / tableRect.width) * 100;
      if (newWidth >= 20) {
        setColumnWidth(`${newWidth}%`);
      }
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <table
        style={{ width: '100%' }}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        <thead>
          <tr>
            <th style={{ width: columnWidth }}>First Column</th>
            <th style={{ width: '50%'}}>Second Column</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Column 1</td>
            <div style={{ width: '100%', overflow: 'auto', whiteSpace: 'nowrap' }}>Row 1, Column 2</div>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <div style={{ width: '100%', overflow: 'auto', whiteSpace: 'nowrap' }}>Row 2, Column 2</div>
          </tr>
          <tr>
            <td>Row 3, Column 1</td>
            <div style={{ width: '100%', overflow: 'auto', whiteSpace: 'nowrap' }}>Row 3, Column 2</div>
          </tr>
          <tr>
            <td>Row 4, Column 1</td>
            <div style={{ width: '100%', overflow: 'auto', whiteSpace: 'nowrap' }}>Row 4, Column 2</div>
          </tr>
          {/* Add more rows if needed */}
        </tbody>
      </table>
      <div
        style={{
          width: '5px',
          height: '100%',
          backgroundColor: 'gray',
          cursor: 'col-resize',
          position: 'absolute',
          top: '0',
          left: columnWidth,
        }}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default Table;
