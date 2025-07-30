"use client";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export function useFetchTasks() {
  const axiosPublic = useAxiosPublic();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/tasks/get");
      return res.data;
    },
  });

  return {
    tasks: data || [],
    isLoading,
    error: isError,
    refetch,
  };
}
