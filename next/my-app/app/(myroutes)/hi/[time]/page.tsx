import { TIMES } from '../layout';

type Props = {
  params: { time: string };
};
export async function generateStaticParams() {
  return TIMES.map((time) => ({
    time,
  }));
}

const toUp = (s: string) => {
  return [s[0].toUpperCase(), s.slice(1)].join('');
};

export function HiTime({ params }: Props) {
  const { time } = params;
  return <>Good {toUp(time)}</>;
}
