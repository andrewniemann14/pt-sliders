import App from "../../App";
import ContextWrapper from "../ContextWrapper";

export default function MobileContainer() {
  return (
    <div className="overflow-hidden w-screen h-screen flex">
      <ContextWrapper>
        <App />
      </ContextWrapper>
    </div>
  )
}
