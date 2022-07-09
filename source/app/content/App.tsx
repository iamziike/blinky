import { useEffect, useState } from "react";

import Toast from "../commons/components/Toast/Toast";
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

  return (
    <Toast
      isOpen={isToastOpen}
      onClose={handleToastVisibility}
      title="Have you blinked"
      pauseTime={toastScreenTime}
      position={toastPosition}
    />
  );
};

export default App;
