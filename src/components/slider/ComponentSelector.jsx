

export default function ComponentSelector({ handleSelect, options }) {

  return (
    <select onChange={e => handleSelect(e.target.value)}>
      {options.map(o => {
        return (
          <option key={o} value="" className="">{o}</option>
        )
      })}
    </select>
  )
}
