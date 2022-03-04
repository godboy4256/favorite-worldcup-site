import { MouseEvent, useRef, useState } from "react";
import WcAddPresenter from "./wc_add.presenter";

const WcAddContainer = () => {
    const refTitle = useRef<any>()
    const refTopic = useRef<any>()
    const refNopSelect = useRef<any>()
    const [matchList, setMatchList] = useState<{}[]>([])
    const [oneWorldCup, setOneWorldCup] = useState<{}>([])
    const [WcOptionList, setWcOptionList] = useState<number[]>(new Array(8).fill(1))

    const wcOptionListConfirm = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const name: HTMLInputElement | null | undefined = event.currentTarget.parentNode?.querySelector(".name")
        const file: HTMLInputElement | null | undefined = event.currentTarget.parentNode?.querySelector(".image")
        const matchListAdd = {
            name: name && name.value,
            file: file?.files?.[0]
        }
        setMatchList([...matchList, matchListAdd])
    }


    const worldCupAdd = (event: MouseEvent<HTMLFormElement>) => {
        event.preventDefault()
        const title = refTitle.current.value
        const topic = refTopic.current.value
        const nopSelect = refNopSelect.current.value
        setOneWorldCup({
            title,
            topic,
            nopSelect,
            matchList
        })
    }

    const WcNopSetting = () => {
        const nopSelect = refNopSelect.current.value
        const nopSelectCount = new Array(Number(nopSelect)).fill(1)
        setWcOptionList(nopSelectCount)
    }

    console.log(matchList)
    console.log(oneWorldCup)

    return <WcAddPresenter
        worldCupAdd={worldCupAdd}
        refTitle={refTitle}
        refTopic={refTopic}
        refNopSelect={refNopSelect}
        WcOptionList={WcOptionList}
        WcNopSetting={WcNopSetting}
        wcOptionListConfirm={wcOptionListConfirm}
    />
};

export default WcAddContainer;