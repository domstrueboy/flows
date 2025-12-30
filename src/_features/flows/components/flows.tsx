import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export function Flows() {
  const flows = useSelector((state: RootState) => state.flowsReducer.flows);

  return flows.length > 0 ? (
    <ul>
      {flows.map((flow) => (
        <li key={flow.id}>{flow.title}</li>
      ))}
    </ul>
  ) : (
    <div>No flows found</div>
  );
}
