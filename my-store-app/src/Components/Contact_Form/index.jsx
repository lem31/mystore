import React from 'react';

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";


const validation = yup.object({
  fullName: yup.string().min(3).max(100).required(),

  email: yup.string().email().required(),

  subject: yup.string().min(3).max(100).required(),

  message: yup.string().min(3).max(1000).required(),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>
      <input {...register("subject")} />
      <p>{errors.subject?.message}</p>
      <input {...register("message")} />
      <p>{errors.message?.message}</p>
      <button type="submit">SEND</button>
    </form>
  );
}

export default ContactForm;