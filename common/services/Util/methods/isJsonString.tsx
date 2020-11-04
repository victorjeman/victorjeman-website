export const isJsonString = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (error) {
    return false;
  }
  return true;
};
