import styled, { DefaultTheme, StyledComponentBase } from "styled-components";

interface IHome extends StyledComponentBase<any, DefaultTheme> {
    Header?: any;
}

const Home: IHome = styled.main``;

Home.Header = styled.header``;

export default Home;
