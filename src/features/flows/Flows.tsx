import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";

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
