import {useInsertionEffect, useLayoutEffect,useEffect} from "react";


const InsertionEffect = () => {

    const style = document.createElement("style");
    useInsertionEffect(() => {
        console.log("hallo")
        style.innerHTML = `p{color: red;}
        .blue {color: green}
        h1{color: #690fad; text-align: center; display:inline-block; background-color: #f3f3f3}`
        document.head.appendChild(style);
    }, [])
    useEffect(() => {

        console.log("hkjsdhkjhdskvjhdk")
    }, []);

    return (
        <>
            <h1>Insertion Effect Hook</h1>
            <p>This text will be red.</p>
            <p className="blue">This text will be red.</p>
        </>
    )
}
export default InsertionEffect;