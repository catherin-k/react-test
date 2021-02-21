import React from "react";
import Logo from "./Logo";
import Painting from "./Painting";
import PaintingList from "./PaintingList";
import paintings from "../paintings.json";
import Panel from "./Panel";
// console.log(paintingData);

const App = () => {
  return (
    <div>
      <Panel title="Fresh Juice">
        <p>Hello!!!!!</p>
        <a href="">Read the article</a>
      </Panel>
      <Panel>
        <p>
          Lorem dcasjkdadjkl dadjalkd asdasjdlkasjd lakdjadklk jakdjad
          kdjakjdakdja kljjdasdjl akdjadkj looopoq ;l;lk
        </p>
      </Panel>
      <Panel>
        <p>Cool</p>
      </Panel>
      <Logo text="Main component-container app" />
      <PaintingList paintings={paintings} />
    </div>
  );
};
export default App;
