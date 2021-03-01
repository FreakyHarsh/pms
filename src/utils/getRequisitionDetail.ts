export const getRequisitionDetail = async (id: string) => {
  const jobDetail = await fetch(baseURL + '/jobs/' + id)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error(error));
  console.log(jobDetail);
  return jobDetail;
};