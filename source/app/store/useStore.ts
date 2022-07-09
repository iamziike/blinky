import { useEffect } from "react";
import { useRecoilState } from "recoil";

import {
  POPUP_INTERVAL_STORAGE_KEY,
  POPUP_POSITION_STORAGE_KEY,
  POPUP_SCREEN_TIME_STORAGE_KEY,
} from "../commons/constants";
import storage from "../commons/scripts/storage";
import { ToastPosition } from "../types/types";

import {
  popupIntervalAtom,
  toastPositionAtom,
  toastScreenTimeAtom,
} from "./store";

const useStore = () => {
  const [popupInterval, setPopupInterval] = useRecoilState(popupIntervalAtom);
  const [toastPosition, setToastPosition] = useRecoilState(toastPositionAtom);
  const [toastScreenTime, setToastScreenTime] =
    useRecoilState(toastScreenTimeAtom);

  useEffect(() => {
    const popupIntervalSetter = async () => {
      const response = (await storage.retrieve(
        POPUP_INTERVAL_STORAGE_KEY
      )) as number;
      setPopupInterval(response || 15);
    };

    const toastPositionSetter = async () => {
      const response = (await storage.retrieve(
        POPUP_POSITION_STORAGE_KEY
      )) as ToastPosition;
      setToastPosition(response || "bottom-left");
    };

    const toastScreenTimeSetter = async () => {
      const response = (await storage.retrieve(
        POPUP_SCREEN_TIME_STORAGE_KEY
      )) as number;
      setToastScreenTime(response || 2);
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

      if (!toastScreenTime) {
        toastScreenTimeSetter();
        storage.listenToChange(toastScreenTimeSetter);
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

  useEffect(() => {
    if (toastScreenTime)
      storage.update(POPUP_SCREEN_TIME_STORAGE_KEY, toastScreenTime);
  }, [toastScreenTime]);

  const getStore = () => ({
    popupInterval,
    toastPosition,
    toastScreenTime,
  });

  return {
    getStore,
    setPopupInterval,
    setToastPosition,
    setToastScreenTime,
  };
};

export default useStore;
