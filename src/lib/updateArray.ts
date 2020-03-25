type Finder<T> = (item: T) => boolean;

export const updateArray = <T>(array: T[], item: T, finder: Finder<T>) => {
  const index = array.findIndex(finder);
  const newArray = array.concat();
  newArray.splice(index, 1, {...item});
  return newArray;
};
