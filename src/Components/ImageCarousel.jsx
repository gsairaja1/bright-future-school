import React, { useState, useRef } from 'react';
import './ImageCarousel.css';

const images = [
    {
        src: require('../../assets/gallery-1.png'),
        alt: 'Gallery 1',
        caption: 'Beautiful Campus View',
    },
    {
        src: require('../../assets/gallery-2.png'),
        alt: 'Gallery 2',
        caption: 'Modern Classrooms',
    },
    {
        src: require('../../assets/gallery-3.png'),
        alt: 'Gallery 3',
        caption: 'Student Activities',
    },
    {
        src: require('../../assets/gallery-4.png'),
        alt: 'Gallery 4',
        caption: 'Library and Resources',
    },
];

const getSlidesToShow = () => {
    if (window.innerWidth < 600) return 1;
    if (window.innerWidth < 900) return 2;
    if (window.innerWidth < 1200) return 3;
    return 4;
};

const ImageCarousel = () => {
    const [current, setCurrent] = useState(0);
    const [modalImg, setModalImg] = useState(null);
    const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
    const carouselRef = useRef(null);

    React.useEffect(() => {
        const handleResize = () => setSlidesToShow(getSlidesToShow());
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };
    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };
    const goToSlide = (idx) => setCurrent(idx);

    // Touch/Swipe support
    React.useEffect(() => {
        const ref = carouselRef.current;
        if (!ref) return;
        let startX = 0;
        let endX = 0;
        const onTouchStart = (e) => {
            startX = e.touches[0].clientX;
        };
        const onTouchMove = (e) => {
            endX = e.touches[0].clientX;
        };
        const onTouchEnd = () => {
            if (startX - endX > 50) nextSlide();
            if (endX - startX > 50) prevSlide();
        };
        ref.addEventListener('touchstart', onTouchStart);
        ref.addEventListener('touchmove', onTouchMove);
        ref.addEventListener('touchend', onTouchEnd);
        return () => {
            ref.removeEventListener('touchstart', onTouchStart);
            ref.removeEventListener('touchmove', onTouchMove);
            ref.removeEventListener('touchend', onTouchEnd);
        };
    }, [carouselRef]);

    // Lazy load images in view
    const getVisibleImages = () => {
        let visible = [];
        for (let i = 0; i < slidesToShow; i++) {
            visible.push(images[(current + i) % images.length]);
        }
        return visible;
    };

    return (
        <div className="carousel-container">
            <button className="carousel-arrow left" onClick={prevSlide} aria-label="Previous Slide">&#8592;</button>
            <div className="carousel-track" ref={carouselRef}>
                {getVisibleImages().map((img, idx) => (
                    <div className="carousel-slide" key={idx}>
                        <div
                            className="carousel-img-wrapper"
                            tabIndex={0}
                            onClick={() => setModalImg(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="carousel-img"
                            />
                            <div className="carousel-caption">{img.caption}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-arrow right" onClick={nextSlide} aria-label="Next Slide">&#8594;</button>
            <div className="carousel-dots">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`carousel-dot${idx === current ? ' active' : ''}`}
                        onClick={() => goToSlide(idx)}
                    />
                ))}
            </div>
            {modalImg && (
                <div className="carousel-modal" onClick={() => setModalImg(null)}>
                    <div className="carousel-modal-content" onClick={e => e.stopPropagation()}>
                        <img src={modalImg.src} alt={modalImg.alt} className="carousel-modal-img" />
                        <div className="carousel-modal-caption">{modalImg.caption}</div>
                        <button className="carousel-modal-close" onClick={() => setModalImg(null)}>&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCarousel; 