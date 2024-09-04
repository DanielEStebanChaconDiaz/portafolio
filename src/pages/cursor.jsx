import './cursor.css';
import { useState, useEffect, useRef } from 'react';

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);
    const targetPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            targetPosition.current = { x: e.pageX, y: e.pageY };
        };

        window.addEventListener('mousemove', handleMouseMove);

        const updateCursorPosition = () => {
            if (cursorRef.current) {
                const { x, y } = position;
                const target = targetPosition.current;

                // Smoothly interpolate the cursor position
                const speed = 0.1; // Adjust this value for faster/slower movement
                const newX = x + (target.x - x) * speed;
                const newY = y + (target.y - y) * speed;

                setPosition({ x: newX, y: newY });
            }

            requestAnimationFrame(updateCursorPosition);
        };

        requestAnimationFrame(updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [position]);

    const cursorSize = 30; // Width and height of the cursor
    const offsetX = position.x - cursorSize / 2;
    const offsetY = position.y - cursorSize / 2;

    return (
        <div
            ref={cursorRef}
            className="cursor"
            style={{ left: offsetX, top: offsetY }}
        />
    );
}
