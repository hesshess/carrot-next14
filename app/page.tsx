'use client';

import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface ILoginForm {
  username: string;
  email: string;
  password: string;
  errors?: string;
}

export default function Home() {
  const [msg, setMsg] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });
  const onValid = (data: ILoginForm) => {
    setMsg('Thank you❤️');
    reset();
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log('connection error');
  };
  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="w-screen flex flex-col gap-2"
    >
      <div>
        <label htmlFor="username">Name: </label>
        <input
          id="username"
          {...register('username', {
            required: 'Please write down your name',
          })}
          type="text"
          placeholder="Username"
          className={`${
            Boolean(errors.username?.message) ? 'border-red-500' : ''
          }`}
        />
        {errors.username?.message}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          {...register('email', {
            required: 'Please write down your email',
            validate: {
              notNaver: (val) =>
                val.includes('@naver.com') || 'only @naver emails are allowed',
            },
          })}
          type="email"
          placeholder="Only @naver.com"
          className={`${
            Boolean(errors.email?.message) ? 'border-red-500' : ''
          }`}
        />
        {errors.email?.message}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          {...register('password', {
            required: 'Please write down your password',
            minLength: {
              message: 'Password has to be longer than 10 chars',
              value: 10,
            },
          })}
          type="password"
          placeholder="Min 10 charaters"
        />
        {errors.password?.message}
      </div>

      <button
        className="w-20 bg-gray-300 rounded-full shadow-lg border-2"
        type="submit"
      >
        Log In
      </button>
      <span>{msg}</span>
    </form>
  );
}
