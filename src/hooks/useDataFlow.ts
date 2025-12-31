import { useState } from "react";
import type { Activity, AttireType } from "../types"
import { CATEGORIES } from "../constants/data";
import { ACTIVITIES } from "../constants/data";


export const useDateFlow = () => {
    const [step, setStep] = useState<number>(0);
    const [attire, setAttire] = useState<AttireType | null>(null);
    const [finalDate, setFinalDate] = useState<Activity[]>([]); // Array of final selection of activities chosen by user

    // Start
    const chooseAttire = (type: AttireType) => {
        setAttire(type);
        setStep(1);
    }

    const recordWinner = (winner: Activity) => {
        setFinalDate([...finalDate, winner]);
        setStep((prev) => prev + 1);
    };

    return {
        step, 
        attire,
        finalDate,
        chooseAttire,
        recordWinner,
        currentCategory: CATEGORIES.find(c => c.associatedAttire === attire && c.stepOrder === step)
    }

}