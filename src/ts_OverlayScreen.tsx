import ReactDOM from "react-dom";
import {useState, useEffect, createContext} from 'react';

import { wordAssets } from "./_ts_wordAssets";

type OverlayScreenProps = {
    overlaySetter : Function;
    setIndicatedAct : Function;
}

export interface IOverlay {
}
export const defaultOverlayValue : IOverlay = {
}
export const useOverlay = createContext(defaultOverlayValue);
 
const OverlayScreen : React.FC<OverlayScreenProps> = (props : OverlayScreenProps) => {
   
    const o : IOverlay = {

    }

    const [input, setInput] = useState<string>("");
    const resetInput = () => {
        props.setIndicatedAct(wordAssets[input])
        setInput("");
    }

    useEffect(() => {
        const handleKeyDown = (e : KeyboardEvent) => {

            if (e.key === "Enter") {
                resetInput();
            } else if (e.key.length === 1) {
                setInput((prev) => prev + e.key);
            } else if (e.key === "Backspace") {
                setInput((prev) => prev.slice(0, -1));
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
 


    useEffect(() => {
        props.overlaySetter(o);
    }, [props.overlaySetter]);

    const overlayRoot = document.getElementById('overlay');
    if (!overlayRoot) {
        return null;
    }
 
 
    return ReactDOM.createPortal(
        <div id="OverlayScreen"
            style={{zIndex : 20, inset : 0, width : "100%", height : "100%", position : "fixed", overflow : "hidden", pointerEvents : "none"}}
        >
            <div style={{paddingTop : "1vh", paddingLeft : "1vw"}}>
                <div style={{display : "grid", gridTemplateRows : "1vh 1fr", gridTemplateColumns : "20px 100px 1fr"}}>
                    <div style={{gridRow : "1/2", fontSize : 19}}>{">"}</div>
                    <div>{input}</div>
                </div>
            </div>
        </div>,
        overlayRoot
    );
};
 
export default OverlayScreen;