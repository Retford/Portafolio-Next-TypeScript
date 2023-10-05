import { SiCss3, SiFigma, SiHeadlessui, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiPostman, SiReact, SiSpringboot, SiStyledcomponents, SiTailwindcss, SiWordpress } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const IconMaterialUI = (
    <svg height="36" preserveAspectRatio="xMidYMid" viewBox="0 0 256 204" width="36" xmlns="http://www.w3.org/2000/svg"><path d="m0 110.848v-110.848l96 55.424v36.9493333l-64-36.9493333v73.898667z" fill="currentColor" /><path d="m96 55.424 96-55.424v110.848l-64 36.949333-32-18.474666 64-36.9493337v-36.9493333l-64 36.9493333z" fill="currentColor" /><path d="m96 129.322667v36.949333l64 36.949333v-36.949333z" fill="currentColor" /><path d="m160 203.221333 96-55.424v-73.8986663l-32 18.4746666v36.9493337l-64 36.949333zm64-147.797333v-36.9493333l32-18.4746667v36.9493333z" fill="currentColor" /></svg>
);

export const technologiesData = [
    {
        icon: <SiHtml5 />,
        title: "HTML",
        description: "Avanzado",
    },
    {
        icon: <SiCss3 />,
        title: "CSS",
        description: "Avanzado",
    },
    {
        icon: <SiJavascript />,
        title: "JavaScript",
        description: "Avanzado",
    },
    {
        icon: <SiReact />,
        title: "React",
        description: "Intermedio",
    },
    {
        icon: <SiNextdotjs />,
        title: "NextJS",
        description: "Intermedio",
    },
    {
        icon: <FaJava />,
        title: "Java",
        description: "Intermedio",
    },
    {
        icon: <SiSpringboot />,
        title: "Spring Boot",
        description: "Básico",
    },
    {
        icon: <SiWordpress />,
        title: "WordPress",
        description: "Intermedio",
    },
    {
        icon: <SiMysql />,
        title: "MySQL",
        description: "Intermedio",
    },
    {
        icon: <SiPostman />,
        title: "Postman",
        description: "Básico",
    },
    {
        icon: <SiTailwindcss />,
        title: "TailwindCSS",
        description: "Intermedio",
    },
    {
        icon: <SiHeadlessui />,
        title: "Headless UI",
        description: "Básico",
    },
    {
        icon: IconMaterialUI,
        title: "Material UI",
        description: "Básico",
    },
    {
        icon: <SiFigma />,
        title: "Figma",
        description: "Básico",
    },
];