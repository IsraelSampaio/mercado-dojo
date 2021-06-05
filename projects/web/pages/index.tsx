import React from "react";
import { GetStaticProps } from "next";

import Home from "../styles/pages/home.styles";

import { HomeProps } from "../interfaces/home.interface";

//TODO: criar types
// @ts-ignore
import { Header } from "@mercado-dojo/ui-components";

const HomePage: React.FC<HomeProps> = ({departments}) => (
    <Home>
        {console.log(departments)}
        <Header image="/img/logo.png" />
        Home
    </Home>
);

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch("http://localhost:3001/departments");

    const departments = await response.json();

    return {
        props: { departments },
    };
};
