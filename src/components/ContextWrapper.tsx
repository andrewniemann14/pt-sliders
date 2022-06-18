import React from 'react'

interface DataFile {
  strength: {
    "push-ups": DataComponent,
    "hand-release-push-ups": DataComponent
  },
  endurance: {
    "sit-ups": DataComponent,
    "crunches": DataComponent,
    plank: DataComponent
  },
  cardio: {
    run: DataComponent,
    hamr: DataComponent
  }
}

interface DataComponent {
  component: string,
  reps: number[],
  points: number[]
}

type BracketType = [string, React.Dispatch<React.SetStateAction<string>>]
type DataType = [DataFile, React.Dispatch<React.SetStateAction<DataFile>>]
type MaxOverallScoreType = [number, React.Dispatch<React.SetStateAction<number>>]

export const BracketContext = React.createContext<BracketType>(['', () => null]);
export const DataContext = React.createContext<DataType>({} as DataType);
export const MaxOverallScoreContext = React.createContext<MaxOverallScoreType>([100, () => null]);

export default function ContextWrapper(props) {
  const [bracket, setBracket] = React.useState<string>('male-30-34');
  const [data, setData] = React.useState<DataFile>(require(`../data/${bracket}.json`))
  const [maxScore, setMaxScore] = React.useState<number>(100);

  React.useEffect(() => {
    setData(require(`../data/${bracket}.json`));
  }, [bracket])

  console.log(data);

  return (
    <BracketContext.Provider value={[bracket, setBracket]}>
      <DataContext.Provider value={[data, setData]}>
        <MaxOverallScoreContext.Provider value={[maxScore, setMaxScore]}>
          {props.children} {/* <App /> here */}
        </MaxOverallScoreContext.Provider>
      </DataContext.Provider>
    </BracketContext.Provider>
  )
}