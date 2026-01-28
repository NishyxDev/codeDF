"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorOutlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursorDot = cursorDotRef.current;
        const cursorOutline = cursorOutlineRef.current;

        if (!cursorDot || !cursorOutline || !window.matchMedia("(pointer: fine)").matches) {
            return;
        }

        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Dot follows instantly
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        };

        window.addEventListener("mousemove", onMouseMove);

        // Smooth animation loop for outline
        let animationFrameId: number;
        const animateCursor = () => {
            const speed = 0.1;

            outlineX += (mouseX - outlineX) * speed;
            outlineY += (mouseY - outlineY) * speed;

            cursorOutline.style.left = `${outlineX}px`;
            cursorOutline.style.top = `${outlineY}px`;

            animationFrameId = requestAnimationFrame(animateCursor);
        };
        animateCursor();

        // Hover effects
        const interactiveElements = document.querySelectorAll(
            "a, button, input, textarea, select, .hover-trigger"
        );

        const onMouseEnter = () => {
            cursorOutline.style.width = "60px";
            cursorOutline.style.height = "60px";
            cursorOutline.style.backgroundColor = "rgba(79, 70, 229, 0.1)"; // Indigo with low opacity
            cursorOutline.style.borderColor = "transparent";
        };

        const onMouseLeave = () => {
            cursorOutline.style.width = "30px"; // Reset to default size
            cursorOutline.style.height = "30px";
            cursorOutline.style.backgroundColor = "transparent";
            cursorOutline.style.borderColor = "var(--color-indigo-brand)";
        };

        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);
        });

        // Clean up
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animationFrameId);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnter);
                el.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorDotRef} className="cursor-dot" />
            <div ref={cursorOutlineRef} className="cursor-outline" />
        </>
    );
}
