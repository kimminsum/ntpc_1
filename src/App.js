//목표: 패널의 확인 버튼을 누르면 패널이 사라지고 카운터가 나타나야 합니다,
// 카운터의 증가 버튼을 누르면 카운터가 증가하고, 카운터의 감소버튼을 누르면 카운터가 감소해야 합니다.ㄴ

import "./App.css";
import React, { useState } from "react";
import Panel from "./Components/Panel/Panel";
import Counter from "./Components/Counter/Counter";



function App() {
  // useState를 사용하여 컨디셔널 랜더링에 사용할 isCounter 변수와
  // isCounter를 업데이트할 setisCounter를 정의합니다.
  const [isCounter, setIsCounter] = useState(false);

  return (
    <div className="App">
      {isCounter ? (
        // isCounter가 true인 경우 카운터를 표시합니다.
        <Counter />
      ) : (
        // isCounter가 false인 경우 패널을 표시합니다.
        <Panel setisCounter={setIsCounter} />
      )}
    </div>
  );
}

export default App;
