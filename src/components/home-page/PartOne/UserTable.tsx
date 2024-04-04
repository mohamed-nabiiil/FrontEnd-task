import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchUsers } from "@/store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";

const UserTable: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const userData = useSelector((state: RootState) => state.user.users);
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  console.log(userData);
  return (
    <div className="space-y-2">
      <h1 className="text-base text-[#6D5CBC] font-bold">{t("Results")}:</h1>
      <table className="w-full divide-y divide-[#E5E5E5] rounded-sm border border-[#E5E5E5]">
        <thead className="bg-[#F2F2F2]">
          <tr>
            <th className=" py-3 text-left text-xs font-medium text-[#999999]  tracking-wider">
              {t("First Name")}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#999999]  tracking-wider">
              {t("Last Name")}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#999999]  tracking-wider">
              {t("Mobile Number")}
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-[#999999]  tracking-wider">
              {t("Email")}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {userData.map((user, index) => (
            <tr key={index} className="bg-white">
              <td className="px-6 py-4 text-sm font-medium">
                {user.FirstName}
              </td>
              <td className="px-6 py-4 text-sm font-medium">{user.LastName}</td>
              <td className="px-6 py-4 text-sm font-medium">{user.Phone}</td>
              <td className=" text-sm font-medium">{user.Email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
