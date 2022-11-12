import { Base } from "../components/core/base";
import { Introduction } from "../components/Introduction";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () =>{
    return (
        <>
        <Base >
            <Introduction />
            <SkillsSection />
        </Base>
        </>
    )
}