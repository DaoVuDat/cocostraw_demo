import React, {useState} from 'react';
import {SliderData} from "../../resources/SlideData";
import './MultipleSlider.scss'

const MultipleSlider = (props) => {

    return (
        <div className="slider">
            {SliderData.map((slide, index) => {
                return (
                    <div key={index} className="slider-container" >
                        <img src={slide.image}
                             className="multiple-slider-image"
                             alt={index}
                             onClick={
                                 () => props.history.push(slide.path)
                             }/>
                         <div className="multiple-slider-name">{slide.name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default MultipleSlider;
