import React, { Component } from 'react';

import Slide_1 from '../img/slide_1.png';
import Slide_2 from '../img/slide_2.png';
import Slide_3 from '../img/slide_3.png';
import Slide_4 from '../img/slide_4.png';

class Slider extends Component {
    constructor (props) {
        super(props);
        this.state = {
            slides: [
                {eachSlide: `url(${Slide_1})`},
                {eachSlide: `url(${Slide_2})`},
                {eachSlide: `url(${Slide_3})`},
                {eachSlide: `url(${Slide_4})`},
            ],
            autoplay: false,
            active: 0,
            total: 0
        }
        this.state.total = this.state.slides.length;
        this.intervalBetweenSlides = this.intervalBetweenSlides.bind(this);
        this.toggleAutoplay = this.toggleAutoplay.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(() => this.intervalBetweenSlides(), 3000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    intervalBetweenSlides() {
        if (this.state.autoplay) {
            this.state.active === this.state.total - 1 ? this.state.active = 0 : this.state.active ++ ;

            this.setState({
                active: this.state.active
            });
        }
    }
    toggleAutoplay() {
        this.setState({
            autoplay: !this.state.autoplay
        });
    }
    nextSlide() {
        (this.state.active < this.state.total - 1) ?
        this.setState({
            active: this.state.active + 1
        }) :
        this.setState({
            active: 0
        });
    }
    prevSlide() {
        (this.state.active > 0) ?
        this.setState({
            active: this.state.active - 1
        }) :
        this.setState({
            active: this.state.total - 1
        });
    }
    dots(index, event) {
        this.setState({
            active: index
        });
    }
    isActive(value) {
        if (this.state.active === value) return 'active';
    }
    setSliderStyles() {
        const transition = this.state.active *  - 100 / this.state.slides.length;
        return {
            width: `${this.state.slides.length * 100}%`,
            transform: `translateX(${transition}%)`
        }
    }
    renderSlides() {
        const transition = `${100 / this.state.slides.length}%`;
        return this.state.slides.map((slide, index) => (
            <div 
                className="each-slide"
                key = {index}
                style = {{backgroundImage: slide.eachSlide, width: transition}} 
            />
        ));
    }
    renderDots() {
        return this.state.slides.map((slide, index) => (
            <li
                className = {this.isActive(index) + ' dots'}
                key = {index}
                ref = 'dots'
                onClick = {this.dots.bind(this, index)}>
                <span>&#9679;</span>
            </li>
        ))
    }
    renderPlayStop() {
        let playStop;

        if (this.state.autoplay) {
            playStop =  <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                            <path d='M0 0h24v24H0z' fill='none'/>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z'/>
                        </svg>;
        }
        else {
            playStop =  <svg fill='#FFFFFF' height='24' viewBox='0 0 24 24' width='24'>
                            <path d='M0 0h24v24H0z' fill='none'/>
                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z'/>
                        </svg>;
        }
        return playStop;
    }
    renderArrows() {
        return (
            <div>
                <button
                    type = 'button'
                    className = 'arrows prev'
                    onClick = {this.prevSlide}>
                    <svg fill='#FFFFFF' width='50' height='50' viewBox='0 0 24 24'>
                        <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
                <button
                    type = 'button'
                    className = 'arrows next'
                    onClick = {this.nextSlide}>
                    <svg fill='#FFFFFF' height='50' viewBox='0 0 24 24' width='50'>
                        <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                        <path d='M0 0h24v24H0z' fill='none'/>
                    </svg>
                </button>
            </div>
        )
    }
    render() {
        return (
            <div className="slider">
                <div 
                    className="wrapper"
                    style = {this.setSliderStyles()}>
                    {this.renderSlides()}
                </div>
                {this.renderArrows()}
                <ul className="dots-container">{this.renderDots()}</ul>
                <span 
                    className="toggle-play"
                    onClick = {this.toggleAutoplay}>
                    {this.renderPlayStop()}
                </span>
            </div>
        )
    }
}

export default Slider;