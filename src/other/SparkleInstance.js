import React from "react";
import styled from 'styled-components';

// const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';

function SparkleInstance({ color, size, style }) {
    return (
        <Wrapper>
            <Svg
                width={size}
                height={size}
                fill="none"
                style={style}
                viewBox="0 0 160 160"
            >
                <path
                    fill={color}
                    d="M80 0s4.285 41.292 21.496 58.504C118.707 75.715 160 80 160 80s-41.293 4.285-58.504 21.496S80 160 80 160s-4.285-41.293-21.496-58.504C41.292 84.285 0 80 0 80s41.292-4.285 58.504-21.496C75.715 41.292 80 0 80 0z"
                ></path>
            </Svg>
        </Wrapper>
    );
}

const growAndShrink = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
    }
`;
const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(180deg);
    }
`;

const Wrapper = styled.div`
    position: absolute;
    pointer-events: none;
    animation: ${growAndShrink} 600ms ease-in-out forwards;
`
const Svg = styled.svg`
    animation: ${spin} 600ms linear forwards;
    position: absolute;
    pointer-events: none;
    z-index: 2;
`;

export default SparkleInstance;
