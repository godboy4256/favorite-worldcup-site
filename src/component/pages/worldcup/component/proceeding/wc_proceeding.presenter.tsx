import { MouseEventHandler } from "react";
import {
    WcProceedingWrapper,
    WcProceedingTitle,
    WcProceedingMain,
    WcParticipantiv,
    WcParticipantivBoard,
    WcTitle
} from "./wc_proceeding.styles";


interface IProps {
    clickHandler: (el: object) => MouseEventHandler<HTMLElement> | undefined,
    worldCupstate: number,
    displays: any[]
}

const WcProceedingPresenter = ({
    clickHandler,
    worldCupstate,
    displays
}: IProps) => {
    return (
        <>
            <WcTitle>
                {
                    worldCupstate === 2 ? "결승" :
                        worldCupstate > 2 && worldCupstate + "강"
                }
            </WcTitle>
            <WcProceedingWrapper>
                <WcProceedingTitle>이상형 월드컵 ( 동물 )</WcProceedingTitle>
                <WcProceedingMain>

                    {
                        displays.length === 1 && <div>우승을 축하합니다!</div>
                    }
                    <WcParticipantivBoard>
                        {displays && displays.map((el: any, index: number) => {
                            return (
                                <WcParticipantiv className="aaa" key={index + el.name} onClick={clickHandler(el)}>
                                    <h3 className="name">{el?.name}</h3>
                                    <img className="animal-img" src={el?.src} />
                                </WcParticipantiv>
                            );
                        })}
                    </WcParticipantivBoard>
                </WcProceedingMain>
            </WcProceedingWrapper>
        </>
    );
};

export default WcProceedingPresenter;