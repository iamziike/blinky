import { useEffect, useRef, useState } from "react";

import Toast from "../commons/components/Toast/Toast";
import { selectRandom } from "../commons/scripts/helpers";
import useStore from "../store/useStore";

const getRandomBlinkText = () =>
  selectRandom([
    "Have you blinked",
    "Remember To Blink",
    "Try to close your eyes",
    "Blink Blink Blink",
    "Don't forget to Blink",
    "Try to Blink",
  ]);

const App = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const { popupInterval, toastPosition, toastScreenTime } =
    useStore().getStore();
  const timeoutID = useRef<number>();
  const toastTitle = useRef(getRandomBlinkText());

  const handleToastVisibility = () => {
    setIsToastOpen((prev) => !prev);
  };

  useEffect(() => {
    clearTimeout(timeoutID.current);
    if (!(isToastOpen === false && popupInterval)) return;
    toastTitle.current = getRandomBlinkText();
    timeoutID.current = setTimeout(handleToastVisibility, popupInterval * 1000);
  }, [isToastOpen, popupInterval]);

  return (
    <Toast
      isOpen={isToastOpen}
      onClose={handleToastVisibility}
      title={toastTitle.current}
      pauseTime={toastScreenTime}
      position={toastPosition}
    />
  );
};

export default App;
