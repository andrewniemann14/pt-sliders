import '../../css/menu.css'

type Props = {
  open: boolean,
  handler: () => void
}

const MenuButton = ({ open, handler }: Props) => {

  return (
    <div className={`btn z-20 ${open && 'open'}`} data-menu="2" onClick={handler}>
      <div className="icon"></div>
    </div>
  )
}

export default MenuButton