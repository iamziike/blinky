import { useEffect, useState } from "react";

import Toast from "../commons/components/Toast/Toast";
import { selectRandom } from "../commons/scripts/helpers";
import useStore from "../store/useStore";

const App = () => {
  const [isToastOpen, setIsToastOpen] = useState(false);
  const { popupInterval, toastPosition, toastScreenTime } =
    useStore().getStore();

  const handleToastVisibility = () => {
    setIsToastOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isToastOpen === false)
      setTimeout(handleToastVisibility, popupInterval * 1000);
  }, [isToastOpen]);

  // Intensionally did create a state
  const toastTitle = selectRandom([
    "Have you blinked",
    "Remember To Blink",
    "Try to close your eyes",
    "Blink Blink Blink",
    "Don't forget to Blink",
    "Try to Blink",
  ]);

  return (
    <Toast
      isOpen={isToastOpen}
      onClose={handleToastVisibility}
      title={toastTitle}
      pauseTime={toastScreenTime}
      position={toastPosition}
    />
  );
};

export default App;
