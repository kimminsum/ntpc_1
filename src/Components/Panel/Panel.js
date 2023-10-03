import "./Panel.css";

const Panel = ({ isCounter, setisCounter }) => {
  const handleClick = () => {
    // 확인 버튼을 클릭하면 isCounter 값을 true로 설정합니다.
    setisCounter(isCounter => true);
  };

  return (
    <div className="panel_numberframe">
      <img className="panel_testimageIcon" alt="" src="/images/TestIcon.png" />
      <h1 className="panel_title">.NTPC 타이머</h1>
      <h2 className="panel_message">
        {"2주차까지 수고 많으셨습니다!\n배운 지식을 활용해서 타이머 페이지를 완성해 볼까요?"}
      </h2>
      <div className="panel_button" onClick={() => handleClick()}>
        <span className="panel_buttontext">확인</span>
      </div>
    </div>
  );
};

export default Panel;