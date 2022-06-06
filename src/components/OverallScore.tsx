import { ReactComponent as Star } from '../img/star-svgrepo-com.svg';

type Props = {
  score: number
}

export default function OverallScore({score}: Props) {
  // let scoreNum = Number(score);
  let color;
  if (score < 75) color = 'text-red-700';
  else if (score < 80) color = 'text-lime-600';
  else if (score < 90) color = 'text-green-600';
  else color = 'text-teal-600';

  return (
    <div className="flex justify-center items-center py-2">
      {score >= 90 && <Star />}
      <h1 className={'font-bold text-center mx-4 text-4xl ' + color}>{score}</h1>
      {score >= 90 && <Star />}

    </div>
  )
}
