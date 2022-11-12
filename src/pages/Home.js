import { Base } from "../components/core/base";
import { Introduction } from "../components/Introduction";
import { Skills } from "../components/Skills";

export const Home = () =>{
    return (
        <>
        <Base >
            <Introduction />
            <Skills />
        </Base>
        </>
    )
}