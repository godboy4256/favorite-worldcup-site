import { useState } from "react";
import WcAddContainer from "../../src/component/pages/worldcup/component/add/wc_add.container";
import WcComplateContainer from "../../src/component/pages/worldcup/component/complate/wc_complate.container";
import WcProceedingContainer from "../../src/component/pages/worldcup/component/proceeding/wc_proceeding.container";
import WcStartContainer from "../../src/component/pages/worldcup/component/start/wc_start.container";

const WorldCup = () => {
    const [wcComponentState, setWcComponentState] = useState("start")
    return <div>
        {wcComponentState === "start" && <WcStartContainer setWcComponentState={setWcComponentState} />}
        {wcComponentState === "proceeding" && <WcProceedingContainer setWcComponentState={setWcComponentState} />}
        {wcComponentState === "complate" && <WcComplateContainer />}
    </div>
};

export default WorldCup;