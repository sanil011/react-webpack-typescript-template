import './style.css';
import Image from "./laptop.jpg";
import ClickCounter from './ClickCounter';
export const App = () => {
    return <>
        <h1>Hii Sanil</h1>
        <h1>React Webpack Typescript Template - {process.env.NODE_ENV} {process.env.name}</h1>
        <img src={Image} alt="image" width='300' height='400' />
        <ClickCounter/>
    </>
}