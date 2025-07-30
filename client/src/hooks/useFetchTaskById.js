"use client";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export function useFetchTaskById(taskId, refreshTrigger = 0) {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["task", taskId, refreshTrigger],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/tasks/${taskId}`);
      return res.data;
    },
    enabled: !!taskId,
  });

  return {
    task: data,
    isLoading,
    isError,
    refetch,
  };
}
