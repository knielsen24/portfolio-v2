const startDate = new Date("2021-12-15");
const currentDate = new Date();

const timeDiff = (currentDate.getTime() - startDate.getTime()) as number;

const yearsDiff = (timeDiff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

function handleRounding(str: string): number {
  const num = Number(str);
  const whole = Math.round(num);
  // if (num)  whole;

  return whole;
}

export { handleRounding };
