function handleRounding(start: Date, current: Date): string {
  const timeDiff = (current.getTime() - start.getTime()) as number;
  const yearsDiffString = (timeDiff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

  const originalNum = Number(yearsDiffString);
  const whole = Math.round(originalNum);
  const diff = originalNum - whole;

  // If months is 1/4+ of year then it rounds up to half year
  if (diff >= 0.25) return (whole + 0.5).toFixed(1);
  
  // If months is less 3/4 of year (diff is negative since whole rounds up)
  if (diff < -0.25) return (whole - 0.5).toFixed(1);

  // Any number that is .75 to .25 will round to whole number
  // Think of .75 to 1.24
  return whole.toFixed(1);
}

export { handleRounding };
