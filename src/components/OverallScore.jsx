// TODO: make stars appear when 90+

export default function OverallScore({score}) {
  // let scoreNum = Number(score);
  let color;
  if (score < 75) color = 'text-red-700';
  else if (score < 80) color = 'text-lime-500';
  // else if (score < 90) color = 'text-green-700';
  else color = 'text-green-700';
  

  return (
    <h1 className={'font-bold text-center text-4xl text- '+color}>{score}</h1>
  )
}
