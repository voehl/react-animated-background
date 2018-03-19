import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const AnimatedBackground = props => (
    <div style={{...style.container, backgroundImage: props.backgroundImage, ...props.style}}>
        <h1 style={{...style.heading, ...props.headingStyle}}>{props.title}</h1>
        {props.paragraphs.map((paragraph, i) => (
            <p key={i} style={{...style.paragraph, ...props.paragraphStyle}}>{paragraph}</p>
        ))}
    </div>
);

export default AnimatedBackground;

AnimatedBackground.propTypes = {
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    paragraphs: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.element, PropTypes.string])),
    backgroundImage: PropTypes.string,
    style: PropTypes.object,
    headingStyle: PropTypes.object,
    paragraphStyle: PropTypes.object,
};