import App from "../../App";

export default function DesktopContainer() {
  return (
    <div className="overflow-hidden w-screen h-screen flex bg-emerald-300">
      <div className="w-[320px] h-[540px] border-b-[4rem] border-t-[2rem] border-x-8 border-black rounded-3xl m-auto">
        <App />
      </div>
    </div>
  )
}
