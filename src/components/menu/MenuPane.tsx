
type Props = {
  open: boolean
}

const MenuPane = ({ open }: Props) => {

  return (
    <div className={`flex flex-col right-0 top-0 h-full w-64 absolute z-10 transition-all bg-neutral-800 text-white ${open ? "" : "translate-x-[100%] bg-transparent"}`}>
      {/* logo here */}
      <a href="https://www.youtube.com/watch?v=8mPicXen9nA" className="text-center mt-12 underline">Shuttle run practice</a>
      <a href="mailto:pt@niemann.app" className="text-center m-4 underline">Contact me</a>

      <div className="absolute bottom-12 p-2">
        <p className="text-teal-100 text-center">To do:</p>
        <ul>
          <li className="my-4 text-sm text-teal-100">MINOR FEATURE: color indicator based on points gained for one more rep</li>
          <li className="my-4 text-sm text-teal-100">MAJOR FEATURE: Mock Test Mode with timers, HAMR audio, score input</li>
        </ul>

      </div>
    </div>
  )
}

export default MenuPane;