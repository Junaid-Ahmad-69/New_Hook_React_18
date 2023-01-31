import React, {useEffect, useId, useState, useTransition} from 'react';
import style from './transition.module.css'

export default () => {
    const vali1=useId();
    useEffect(()=>{
        console.log('vali1',vali1);
        console.log('vali1',vali1);
        console.log('vali1',vali1);
        console.log('vali1',vali1);
        console.log('vali1',vali1);
        console.log('vali1',vali1);
        console.log('vali1',vali1);
        console.log('vali1',vali1);
    })


    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    // const [isPending, startTransition] = useTransition();

    const list_Size = 20000;
    const inputHandler = (event) => {
        setInputValue(event.target.value);
        const listData = []
        // startTransition(() => {
            for (let i = 0; i < list_Size; i++) {
                listData.push(event.target.value)
            }
            setData(listData);
        // });
    }

    return (
        <div>
            <form className={style.formControl}>
                <h1 className={style.title}>Transition Hook</h1>
                <div className={style.textContainer}>
                    <label htmlFor="search"> Enter to Print</label>
                    <input id="search" type="text" value={inputValue} onChange={inputHandler}/>
                </div>
                { data.map((item, index) => <p key={index}>{item}</p>)}


            </form>
        </div>
    )
}