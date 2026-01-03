import { useState } from "react"
import type { PlanningPhase, AttireType } from "../../types"
import AttireSelection from "./AttireSelection";

const Planner = () => {
  const [phase, setPhase] = useState<PlanningPhase>('ATTIRE');
  const [selectedAttire, setSelectedAttire] = useState<AttireType | null>(null);

  const handleAttireSelect = (attire: AttireType) => {
    setSelectedAttire(attire);
    setPhase('MAIN_EVENT');
  };

  

  const renderPhase = () => {
    switch (phase){
        case 'ATTIRE':
            return <AttireSelection onSelect={handleAttireSelect}/>;
        case 'MAIN_EVENT':
            return <h1>{selectedAttire}</h1>;
        case 'NIGHT_CAP':
            return <h1>H</h1>;
        case 'SUMMARY':
            return <h1>O</h1>;
        default:
            return <h1>Phase not found</h1>
    }
  };

  return (
    <div>
        {renderPhase()}
    </div>
    )
}

export default Planner