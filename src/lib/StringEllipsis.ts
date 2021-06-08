const stringEllipsis = (text: string, showLength: number): string => {
  const value: string = text.length > showLength ? text.substring(0, showLength).concat('...') : text;
  return value;
}

export default stringEllipsis;