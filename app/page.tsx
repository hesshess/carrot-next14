'use client';

import { useState, useEffect } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface ILoginForm {
  work: string;
  goal: string;
  salary: string;
  intro: string;
  dreams: string;
  email: string;
}

function Home() {
  const [data, setData] = useState<ILoginForm>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });
  const onValid = (data: ILoginForm) => {
    setData(data);
    reset();
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log('connection error');
  };
  return (
    <div className="text-black max-w-[450px] m-auto border-2 border-black rounded-xl  shadow-[5px_5px_0px_0px_#000000] bg-pink-100">
      <h1 className="m-10 text-center text-4xl font-extrabold">
        Job Application Form
      </h1>
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col gap-2 px-8"
      >
        <div>
          <legend className="font-semibold">
            What department do you want to work for?
          </legend>
          <div className="px-2 py-1 gap-1">
            <div className="flex gap-1">
              <input
                type="radio"
                id="work1"
                className=""
                value="sales"
                {...register('work')}
              />
              <label htmlFor="work1">Sales</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                id="work2"
                className=""
                value="marketing"
                {...register('work')}
              />
              <label htmlFor="work2">Marketing</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                id="work3"
                className=""
                value="accounting"
                {...register('work')}
              />
              <label htmlFor="work3">Accounting</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                id="work4"
                className=""
                value="customer"
                {...register('work')}
              />
              <label htmlFor="work4">Customer Service</label>
            </div>
          </div>
        </div>

        <div>
          <legend className="font-semibold">
            Why do you want to join this company?
          </legend>
          <div className="px-2 py-1">
            <div className="flex gap-1">
              <input
                type="radio"
                id="goal1"
                className=""
                value="Money"
                {...register('goal')}
              />
              <label htmlFor="goal1">I want money</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                id="goal2"
                className=""
                value="Love"
                {...register('goal')}
              />
              <label htmlFor="goal2">I love this company</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                id="goal3"
                className=""
                value="Knowledge"
                {...register('goal')}
              />
              <label htmlFor="goal3">I want to learn</label>
            </div>
            <div className="flex gap-1">
              <input
                type="radio"
                id="goal4"
                className=""
                value="none"
                {...register('goal')}
              />
              <label htmlFor="goal4">I don&#39;t know why</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label id="salarySelect" className="font-semibold">
            Salary
          </label>
          <select
            id="salarySelect"
            className="mx-2 my-1 rounded-md border-2 border-[#00203FFF] p-1"
            {...register('salary')}
          >
            <option value="50K">$50K</option>
            <option value="100K">$100K</option>
            <option value="150K">$150K</option>
            <option value="200K">$200K</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Introduce yourself</label>
          <input
            type="text"
            className={
              errors.intro
                ? 'mx-2 my-1 rounded-md border-2 border-red-500 px-1 caret-red-500 focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-yellow-100'
                : 'mx-2 my-1 rounded-md border-2 border-[#00203FFF] px-1 caret-[#00203FFF] focus:outline-none focus:ring focus:ring-[#00203FFF] focus:ring-offset-1 focus:ring-offset-yellow-100'
            }
            {...register('intro', {
              required: 'Please write down your introduction.',
            })}
          />
          {errors.intro ? (
            <span className="text-red-500">{errors.intro?.message}</span>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold">Tell us what your dreams are</label>
          <textarea
            rows={5}
            className={
              errors.dreams
                ? 'mx-2 my-1 rounded-md border-2 border-red-500 px-1 caret-red-500 resize-none focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-yellow-100'
                : 'mx-2 my-1 rounded-md border-2 border-[#00203FFF] px-1 caret-[#00203FFF] resize-none  focus:outline-none focus:ring focus:ring-[#00203FFF] focus:ring-offset-1 focus:ring-offset-yellow-100'
            }
            {...register('dreams', {
              required: 'Tell us what your dreams are 😤',
              minLength: {
                value: 10,
                message: 'Please write more than 10 chars',
              },
            })}
          ></textarea>
          {errors.dreams ? (
            <span className="text-red-500">{errors.dreams?.message}</span>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold">Email</label>
          <input
            type="text"
            className={
              errors.email
                ? 'mx-2 my-1 rounded-md border-2 border-red-500 px-1 caret-red-500 focus:outline-none focus:ring focus:ring-red-500 focus:ring-offset-1 focus:ring-offset-yellow-100'
                : 'mx-2 my-1 rounded-md border-2 border-[#00203FFF] px-1 caret-[#00203FFF] focus:outline-none focus:ring focus:ring-[#00203FFF] focus:ring-offset-1 focus:ring-offset-yellow-100'
            }
            placeholder="asdf@naver.com"
            {...register('email', {
              required: 'Email is required!',
              validate: {
                onlyGamil: (value) =>
                  value.includes('@naver.com') || 'Only @naver is allowed ',
              },
            })}
          />
          {errors.email ? (
            <span className="text-red-500">{errors.email?.message}</span>
          ) : null}
        </div>

        <div className="mb-10 mt-5 px-2">
          <input
            type="submit"
            value="Give me this job!"
            className="w-full cursor-pointer rounded-md border-2 border-[#00203FFF] bg-yellow-200 p-2 font-extrabold text-[#00203FFF] shadow-[3px_3px_0px_0px_#00203FFF] transition-transform ease-in-out hover:scale-110"
          />
        </div>
      </form>
      <div className="break-words px-10"> {JSON.stringify(data)}</div>
    </div>
  );
}

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return <h1>{isClient ? <Home /> : 'Prerendered'}</h1>;
}
