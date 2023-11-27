import { useState, useCallback } from "react";
import Drawer from "react-bottom-drawer";
import Content from "./Controls";

const BottomDrawer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <>
      <button
        type="button"
        className="bottomDrawerButton"
        onClick={() => {
          setIsVisible(true);
        }}
      >
        <div className="handle" />
      </button>
      <Drawer isVisible={isVisible} onClose={onClose} className="bottomDrawer">
        <Content />
      </Drawer>
    </>
  );
};

export default BottomDrawer;
