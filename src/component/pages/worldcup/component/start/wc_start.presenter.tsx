const WcStartPresenter = ({ onProceeding }: any) => {
    return (
        <div>
            <h2>이상형 월드컵을 시작하시겠습니까?</h2>
            <button onClick={onProceeding}>시작하기</button>
        </div>
    );
};

export default WcStartPresenter;