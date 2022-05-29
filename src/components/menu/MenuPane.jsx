
export default function MenuPane({ open }) {

  return (
    <div className={`flex flex-col right-0 top-0 h-full w-64 absolute z-10 transition-all bg-neutral-800 text-white ${open ? "" : "translate-x-[100%] bg-transparent"}`}>
      {/* logo here */}
      <a href="https://www.youtube.com/watch?v=8mPicXen9nA" className="text-center mt-12 underline">Shuttle run practice</a>
      {/* make this a block, welcoming feedback */}
      <a href="mailto:pt@niemann.app" className="text-center m-4 underline">Contact me</a>

      <div className="mt-8 p-2">
        <p className="text-center">Planned features:</p>
        <ul>
          <li className="my-4">sliders auto-adjust to target score</li>
          <li className="my-4">slider changes color based on points gained for one more rep</li>
        </ul>

      </div>
    </div>
  )
}