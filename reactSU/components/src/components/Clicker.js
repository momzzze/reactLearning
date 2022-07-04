import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";

export const Clicker = (props) => {
    const [clicks, setClicks] = useState(0);

    const clickHandler = (event) => {
        console.log(event);
        setClicks(oldClicks => oldClicks + 1);
    }
    const dangerCliccks = clicks > 20;
    if (clicks > 30) {
        return <h1>Finished Clicks</h1>
    }
    return (
        <div>
            {dangerCliccks && <h1>Danger Clicks</h1>}
            <h3>{clicks > 10 ? 'Medium Clicks' : 'Normal Clicks'}</h3>
            <button onClick={clickHandler}>{clicks}</button>
        </div>
    );
}