import { ChangeEventHandler, MouseEventHandler, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

interface IProps {
    worldCupAdd: MouseEventHandler<HTMLFormElement>,
    refTitle: any,
    refTopic: any,
    refNopSelect: any
    WcOptionList: number[] | undefined,
    wcOptionListConfirm: MouseEventHandler<HTMLButtonElement>,
    WcNopSetting: ChangeEventHandler<HTMLSelectElement>
}

const WcAddPresenter = ({
    worldCupAdd,
    refTitle,
    refTopic,
    refNopSelect,
    WcOptionList,
    WcNopSetting,
    wcOptionListConfirm
}: IProps) => {

    return (
        <div>
            <h2>나만의 이상형 월드컵 등록하기</h2>
            <form onSubmit={worldCupAdd}>
                <div>
                    <label htmlFor="wc__title">이상형 월드컵의 제목</label>
                    <input ref={refTitle} type="text" placeholder="이상형 월드컵의 제목을 입력하세요." />
                </div>
                <div>
                    <label htmlFor="wc__desc">이상형 월드컵의 주제</label>
                    <input ref={refTopic} type="text" placeholder="이상형 월드컵의 주제를 입력하세요." />
                </div>
                <div>
                    <label htmlFor="wc__tema">어떤 테마의 이상형 월드컵인가요?</label>
                    <select id="wc__tema" ref={refNopSelect} onChange={WcNopSetting}>
                        <option value="일상">일상</option>
                        <option value="생물">생물</option>
                        <option value="스포츠">스포츠</option>
                        <option value="캐릭터">캐릭터</option>
                        <option value="게임">게임</option>
                        <option value="연예">연예</option>
                        <option value="정치">정치</option>
                        <option value="인물">인물</option>
                        <option value="음악">음악</option>
                        <option value="기타">기타</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="wc__nop">목록 개수를 선택하세요.(최소 8강)</label>
                    <select id="wc__nop" ref={refNopSelect} onChange={WcNopSetting}>
                        <option value="8">8강</option>
                        <option value="16">16강</option>
                        <option value="32">32강</option>
                    </select>
                </div>
                <div>
                    {
                        WcOptionList && WcOptionList?.map((_, index) => {
                            return <div key={uuidv4()}>
                                {index + 1} :
                                <input type="text" className="name" placeholder="항목을 입력해주세요." />
                                <div>
                                    <label>항목에 대한 이미지 선택</label>
                                    <input type="file" className="image" />
                                </div>
                                <button onClick={wcOptionListConfirm}>설정 완료</button>
                            </div>
                        })
                    }
                </div>
                <button>월드컵 생성</button>
            </form >
        </div >
    );
};

export default WcAddPresenter;