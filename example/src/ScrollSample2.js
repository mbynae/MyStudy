import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import './ScrollSample2.css';

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper';

export default function ScrollSample2() {
    return (
        <>
            <Swiper direction={'vertical'} slidesPerView={4} grabCursor={true} freeMode={true} scrollbar={true} mousewheel={true} modules={[FreeMode, Scrollbar, Mousewheel]} className="mySwiper">
                <h4>Scroll Container</h4>
                <SwiperSlide>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus, ex eu sagittis faucibus, ligula ipsum sagittis magna, et imperdiet dolor lectus eu libero. Vestibulum
                        venenatis eget turpis sed faucibus. Maecenas in ullamcorper orci, eu ullamcorper sem. Etiam elit ante, luctus non ante sit amet, sodales vulputate odio. Aenean tristique nisl
                        tellus, sit amet fringilla nisl volutpat cursus. Quisque dignissim lectus ac nunc consectetur mattis. Proin vel hendrerit ipsum, et lobortis dolor. Vestibulum convallis, nibh
                        et tincidunt tristique, nisl risus facilisis lectus, ut interdum orci nisl ac nunc. Cras et aliquam felis. Quisque vel ipsum at elit sodales posuere eget non est. Fusce
                        convallis vestibulum dolor non volutpat. Vivamus vestibulum quam ut ultricies pretium.
                    </p>
                    <p>
                        Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus
                        faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris.
                        Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan
                        nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                    </p>
                    <p>
                        Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus
                        faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris.
                        Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan
                        nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                    </p>
                    <p>
                        Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus
                        faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris.
                        Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan
                        nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                    </p>
                    <p>
                        Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus
                        faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris.
                        Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan
                        nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                    </p>
                    <p>
                        Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus
                        faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris.
                        Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan
                        nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                    </p>
                    <p>
                        Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus
                        faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris.
                        Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan
                        nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                    </p>
                    <p>
                        Suspendisse rhoncus fringilla nisl. Mauris eget lorem ac urna consectetur convallis non vel mi. Donec libero dolor, volutpat ut urna sit amet, aliquet molestie purus. Phasellus
                        faucibus, leo vel scelerisque lobortis, ipsum leo sollicitudin metus, eget sagittis ante orci eu ipsum. Nulla ac mauris eu risus sagittis scelerisque iaculis bibendum mauris.
                        Cras ut egestas orci. Cras odio risus, sagittis ut nunc vitae, aliquam consectetur purus. Vivamus ornare nunc vel tellus facilisis, quis dictum elit tincidunt. Donec accumsan
                        nisi at laoreet sodales. Cras at ullamcorper massa. Maecenas at facilisis ex. Nam mollis dignissim purus id efficitur.
                    </p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
