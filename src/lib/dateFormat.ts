const dateFormat = (timestamp: number): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(timestamp * 1000).toLocaleDateString(undefined, options);
};

export default dateFormat;
