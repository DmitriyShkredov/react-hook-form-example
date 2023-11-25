import React from "react";
import { useForm } from "react-hook-form";

export const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className={errors.name && "error"}
          {...register("name", {
            required: true,
            minLength: 2,
            maxLength: 10,
            pattern: /^[a-zA-Zа-яА-Я]*$/,
          })}
        />
        {errors.name?.type === "required" && <span>Введите имя</span>}
        {errors.name?.type === "minLength" && <span>Мин 2 буквы</span>}
        {errors.name?.type === "maxLength" && <span>Макс 10 букв</span>}
        {errors.name?.type === "pattern" && <span>Только буквы</span>}
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};
