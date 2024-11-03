import React, { useEffect } from "react";
import { useGetUserByEmail } from "../queryHooks/useUsersData";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

export const MainWrapper = ({ children }: { children: any }) => {
  const { data: users } = useGetUserByEmail("nikola@gmail.com");
  const user = users?.data[0];
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(login(user));
    }
  }, [user, dispatch]);
  return <div>{children}</div>;
};
