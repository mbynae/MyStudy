import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper';
import './style.css';

const ScrollSample = () => {
    const wheel = useRef(null);

    // const horizontalScroll = (e, wheel) => {
    //     e.preventDefault();
    // };

    // useEffect(() => {
    //     wheel.current.addEventListener('wheel', e => {
    //         e.preventDefault();
    //     });
    // }, [wheel]);

    const ddd = [
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D8D240', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#67D840', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#40B3D8', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#9E40D8', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D8D240', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#67D840', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#40B3D8', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
        <div style={{ width: '10vw', height: '10vh', backgroundColor: '#9E40D8', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
    ];

    return (
        <div className="ddd">
            <Swiper
                direction={'horizontal'}
                slidesPerView={'auto'}
                grabCursor={true}
                spaceBetween={20}
                freeMode={true}
                scrollbar={{
                    draggable: true,
                }}
                mousewheel={{
                    sensitivity: 0.5,
                }}
                modules={[FreeMode, Scrollbar, Mousewheel]}
                className="mySwiper"
                // ref={wheel}
            >
                {/* <SwiperSlide className="asd">{ddd.map((e, i) => e)}</SwiperSlide> */}
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
                <SwiperSlide className="asd">
                    <div style={{ width: '10vw', height: '10vh', backgroundColor: '#D84040', color: '#fff', fontSize: '20px', textAlign: 'center' }}>#D84040</div>,
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ScrollSample;
