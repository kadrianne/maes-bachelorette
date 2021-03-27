import styled from 'styled-components';
import SparkleInstance from './SparkleInstance'
import useRandomInterval from './useRandomInterval'
import generateSparkle from './generateSparkle'

function Sparkles({ children }) {
    const [sparkles, setSparkles] = React.useState([]);

    useRandomInterval(() => {
        const now = Date.now();
        // Create a new sparkle
        const sparkle = generateSparkle();
        // Clean up any "expired" sparkles
        const nextSparkles = sparkles.filter(sparkle => {
        const delta = now - sparkle.createdAt;
        return delta < 1000;
        });
        // Include our new sparkle
        nextSparkles.push(sparkle);
        // Make it so!
        setSparkles(nextSparkles);
    }, 50, 500);

    return (
        <Wrapper>
            <SparkleInstance
                color={sparkle.color}
                size={sparkle.size}
                style={sparkle.style}
            />
            <ChildWrapper>
                {children}
            </ChildWrapper>
        </Wrapper>
    );
}
const Wrapper = styled.span`
    position: relative;
    display: inline-block;
`;
const ChildWrapper = styled.strong`
    position: relative;
    z-index: 1;
    font-weight: bold;
`;  