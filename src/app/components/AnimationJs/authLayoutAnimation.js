'use client'
import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es' // good import

const AnimatedBackground = () => {
    useEffect(() => {
        anime({
            targets: '.square',
            translateX: el => el.getAttribute('data-x'),
            translateY: (_, i) => 50 + (-50 * i),
            scale: (_, i, l) => (l - i) * 0.75,
            rotate: () => anime.random(-360, 360),
            borderRadius: () => `+=${anime.random(0, 8)}`,
            duration: () => anime.random(1200, 1800),
            delay: () => anime.random(0, 400),
            easing: 'easeOutElastic(1, .5)'
        });
    }, []);

    return (
        <div>

            <div className="absolute left-0 z-0 inset-7 w-full h-full pointer-events-none overflow-hidden">
                <div className="medium row">
                    <div className="square bg-red-400 w-12 h-12" data-x="170"></div>
                </div>
                <div className="medium row">
                    <div className="square bg-blue-400 w-12 h-12" data-x="80"></div>
                </div>
                <div className="medium row">
                    <div className="square bg-green-400 w-12 h-12" data-x="260"></div>
                </div>

            </div>
        </div>
    );
};

export default AnimatedBackground;
