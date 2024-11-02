import { useQuery, useMutation, useQueryClient } from "react-query";
import { addUser, deleteUser, getUsers, getUserByEmail } from "../api/User";

export const useUserData = () => {
  return useQuery("users", getUsers);
};

export const useAddUser = (user) => {
  const queryClient = useQueryClient();
  return useMutation(addUser, {
    onSuccess: (data) => {
      queryClient.setQueryData("users", (oldData) => {
        if (!oldData || !oldData.data) {
          console.log("oldData is undefined");
          return { data: [data.data] };
        }
        return { ...oldData, data: [...oldData.data, data.data] };
      });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: (data) => {
      queryClient.setQueryData("users", (oldData) => {
        return {
          ...oldData,
          data: oldData.data.filter((user) => user.id !== data.data.id),
        };
      });
    },
  });
};

export const useGetUserByEmail = (email) => {
  return useQuery(["user", email], () => getUserByEmail(email));
};
