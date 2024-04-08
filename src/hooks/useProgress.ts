import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
// utils
import { calculateProgress } from "../utils/calculateProgress";

export const useProgress = (globalProgress: number) => {
  const progressArray = useMemo(() => calculateProgress(globalProgress), [globalProgress]);

  const progressArrayWithUUID = useMemo(() => {
    return progressArray.map(progress => ({ id: uuidv4(), progress }));
  }, [progressArray]);

  return progressArrayWithUUID;
};
