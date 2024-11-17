import { useAxios } from "@/Services/useAxios";
import { useQuery } from "@tanstack/react-query";

const useLoadData = (apiName) => {
  console.log(apiName);
  const { data, refetch, isLoading } = useQuery({
    queryKey: [apiName],
    queryFn: async () => {
      const { data } = await useAxios.get(`${apiName}/api`);
      return data;
    },
  });
  return [data, refetch, isLoading];
};

export default useLoadData;
