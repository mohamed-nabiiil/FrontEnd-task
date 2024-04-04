import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { addUser, fetchUsers } from "@/store/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";

const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Phone: "",
    Email: "",
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(addUser(formData)); // Dispatch addUser action
      await dispatch(fetchUsers()); // Refetch user data after adding user
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="mb-4">
          <label
            htmlFor="FirstName"
            className="block mb-1 text-[#1A1A1A] text-sm font-medium"
          >
            {t("First Name")}
          </label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder={t("First Name")}
            value={formData.FirstName}
            onChange={handleChange}
            className="lg:w-fit lg:max-w-[258px] w-full border border-[#E5E5E5] rounded-sm py-4 px-6 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="LastName"
            className="block mb-1 text-[#1A1A1A] text-sm font-medium"
          >
            {t("Last Name")}
          </label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            placeholder={t("Last Name")}
            value={formData.LastName}
            onChange={handleChange}
            className="lg:w-fit lg:max-w-[258px] w-full border border-[#E5E5E5] rounded-sm py-4 px-6 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="Phone"
          className="block mb-1 text-[#1A1A1A] text-sm font-medium"
        >
          {t("Mobile Number")}
        </label>
        <input
          type="tel"
          id="Phone"
          name="Phone"
          placeholder={t("Mobile Number")}
          value={formData.Phone}
          onChange={handleChange}
          className="w-full border max-w-[546px] border-[#E5E5E5] rounded-sm py-4 px-6 focus:outline-none focus:border-blue-500"
          dir={t("Mobile Number") === "رقم الموبايل" ? "rtl" : "ltr"}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="Email"
          className="block mb-1 text-[#1A1A1A] text-sm font-medium"
        >
          {t("Email")}
        </label>
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder={t("Email")}
          value={formData.Email}
          onChange={handleChange}
          className="w-full border max-w-[546px] border-[#E5E5E5] rounded-sm py-4 px-6 focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-[#49BD88] max-w-[546px] text-white p-2 rounded-sm hover:bg-green-600 transition-colors w-full"
      >
        {t("Send")}
      </button>
    </form>
  );
};

export default Form;
