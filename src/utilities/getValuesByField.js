export const getValuesByFields = (arr, field) => {
  const dataArr = arr?.map(item => item[field]);
  return dataArr?.join(', ');
};
