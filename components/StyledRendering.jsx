import styled from "styled-components";
const Paragraph = styled.p`
    color: red;
`;
const StyledComponent = () => {
    return <Paragraph>Using Styled Components (no server-side styling)</Paragraph>
}
export default StyledComponent;