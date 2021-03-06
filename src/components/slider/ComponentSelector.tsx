
type Props = {
  data: object,
  handleSelect: (select: string) => void,
  options: string[]
}

export default function ComponentSelector({ data, handleSelect, options }: Props) {

  return (
    <select onChange={e => handleSelect(e.target.value)}>
      {options.map(o => {
        return (
          // TODO: make a modal that displays full component name
          <option key={o} value={o} className="">{o}</option>
        )
      })}
    </select>
  )
}
