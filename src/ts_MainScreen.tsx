import React from "react";

type MainScreenProps = {
    indicatedAct : Function,
}

const MainScreen : React.FC<MainScreenProps> = (props : MainScreenProps) => {

    return (
        <div id="MainScreen"
            style={{
                width : "100%", height : "100%",
                display : "flex", alignItems : "center", justifyContent : "center"
            }}
        >
            <img src={`${process.env.PUBLIC_URL}/mustache.png`}
                style={{width : 100}}
            />
        </div>
    )
}
export default MainScreen;