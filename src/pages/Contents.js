import { Link, useParams } from "react-router-dom";
import Products from "../components/Products";
import { getDatas } from "../datas/product";
import NotFound from "./NotFound";

export default function Contents() {
    let prams = useParams(),
        phase = prams.phase,
        datas = getDatas(),
        phase_num = phase === undefined ? 0 : Number(phase),
        item = datas[phase_num];

        console.log(item)

    if(item){
        return (
            <div className={"test"}>
                <Products>{item}</Products>
                <Link to="/" >← Back to home</Link>
            </div>
        );
    }else{
        return (
            <>
                <NotFound />
            </>
        );
    }

}