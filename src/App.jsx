import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup
    .string()
    .required("Введите имя")
    .min(2, "Мин 2 буквы")
    .max(10, "Макс 10 букв")
    .matches(/^[a-zA-Zа-яА-Я]*$/, "Только буквы"),
});

export const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <p>{errors.name?.message}</p>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};
