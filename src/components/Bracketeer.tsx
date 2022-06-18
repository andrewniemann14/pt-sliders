import React from 'react'

import {BracketContext} from './ContextWrapper'

export default function Bracketeer() {
  const [sex, setSex] = React.useState('male');
  const [age, setAge] = React.useState('30-34');

  const [, setBracket] = React.useContext(BracketContext)

  React.useEffect(() => {
    setBracket(sex + '-' + age)
  }, [sex, age])



  return (
    <div className="flex justify-center mt-4 space-x-1">
      <select name="" id="" value={'male'} onChange={e => setSex(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select name="" id="" value={'30-34'} onChange={e => setAge(e.target.value)}>
        <option value="17-24">17-24</option>
        <option value="25-29">25-29</option>
        <option value="30-34">30-34</option>
        <option value="35-39">35-39</option>
        <option value="40-44">40-44</option>
        <option value="45-49">45-49</option>
        <option value="50-54">50-54</option>
        <option value="55-59">55-59</option>
      </select>

    </div>
  )
}
