import { useEffect } from "react";
import { useRecoilState } from "recoil";

import {
  POPUP_INTERVAL_STORAGE_KEY,
  POPUP_POSITION_STORAGE_KEY,
} from "../commons/constants";
import storage from "../commons/scripts/storage";
import { ToastPosition } from "../types/types";

import { popupIntervalAtom, toastPositionAtom } from "./store";

const useStore = () => {
  const [popupInterval, setPopupInterval] = useRecoilState(popupIntervalAtom);
  const [toastPosition, setToastPosition] = useRecoilState(toastPositionAtom);

  useEffect(() => {
    const popupIntervalSetter = async () => {
      const response = (await storage.retrieve(
        POPUP_INTERVAL_STORAGE_KEY
      )) as number;
      setPopupInterval(response || 4);
    };

    const toastPositionSetter = async () => {
      const response = (await storage.retrieve(
        POPUP_POSITION_STORAGE_KEY
      )) as ToastPosition;
      setToastPosition(response || "bottom-left");
    };

    // set the state existing already stored in chrome-storage
    // subscribe to changes to your chrome-storage

    (async () => {
      if (!popupInterval) {
        popupIntervalSetter();
        storage.listenToChange(popupIntervalSetter);
      }

      if (!toastPosition) {
        toastPositionSetter();
        storage.listenToChange(toastPositionSetter);
      }
    })();
  }, []);

  useEffect(() => {
    if (popupInterval)
      storage.update(POPUP_INTERVAL_STORAGE_KEY, popupInterval);
  }, [popupInterval]);

  useEffect(() => {
    if (toastPosition)
      storage.update(POPUP_POSITION_STORAGE_KEY, toastPosition);
  }, [toastPosition]);

  const getStore = () => ({
    popupInterval,
    toastPosition,
  });

  return {
    getStore,
    setPopupInterval,
    setToastPosition,
  };
};

export default useStore;
