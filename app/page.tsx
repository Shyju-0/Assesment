import Image from "next/image";
import HomePage from "./AssesmentUi/AssesmentHome";
import AgentDetail from "./AssesmentUi/AgentsDetail";
export default function Home() {
  return (
    
    <>
    <HomePage />
    <div className=" mt-14">
      <AgentDetail/>
    </div>
    </>
  );
}
