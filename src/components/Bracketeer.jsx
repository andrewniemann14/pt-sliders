import { useEffect, useState } from 'react'

export default function Bracketeer({ handleBracket }) {
  const [sex, setSex] = useState('male');
  const [age, setAge] = useState('30-34');

  useEffect(() => {
    handleBracket(sex + '-' + age)
  }, [sex, age])



  return (
    <div className="flex justify-center mt-4 space-x-1">
      <select name="" id="" onChange={e => setSex(e.target.value)}>
        <option value="male" selected>Male</option>
        <option value="female">Female</option>
      </select>
      <select name="" id="" onChange={e => setAge(e.target.value)}>
        <option value="17-24">17-24</option>
        <option value="25-29">25-29</option>
        <option value="30-34" selected>30-34</option>
        <option value="35-39">35-39</option>
        <option value="40-44">40-44</option>
      </select>

    </div>
  )
}
