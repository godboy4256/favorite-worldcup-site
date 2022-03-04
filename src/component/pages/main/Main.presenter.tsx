import { MouseEventHandler } from "react";
import { MainWrapper } from "./Main.styles";

interface IProps {
    goWcAdd: MouseEventHandler<HTMLButtonElement>
}

const MainPresenter = ({ goWcAdd }: IProps) => {
    return (
        <MainWrapper>
            <button onClick={goWcAdd}>이상형 월드컵 만들기</button>
            <div>{"시작 가능한 이상형 월드컵이 없습니다."}</div>
        </MainWrapper>
    );
};

export default MainPresenter;