//modify by Min-Xuan

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@/images/logo/invntz.png';

export type userFormField = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
};

const formSchema = z
  .object({
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Invalid email address' }),
    name: z
      .string({
        required_error: 'Username is required',
        invalid_type_error: 'Username must be a string',
      })
      .min(1),
    password: z
      .string({ required_error: 'Password is required.' })
      .min(8, 'Password must be at least 8 characters'),
    confirm: z.string(),
  })
  .superRefine((data, customError) => {
    if (data.confirm !== data.password) {
      customError.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['confirm'],
        message: "Passwords don't match",
      });
    }
  });

const signFrom: userFormField[] = [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
  },
  {
    name: 'name',
    label: 'Username',
    type: 'text',
    placeholder: 'Enter your username',
  },
  {
    name: 'password',
    label: 'Your Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
  {
    name: 'confirm',
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Confirm your password',
  },
];

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    navigate('/');
  }
  return (
    <>
      <div className="rounded-sm min-h-screen bg-white shadow-default dark:bg-boxdark">
        <div className="flex flex-col max-w-xl mx-auto w-full justify-center px-5 py-[calc(11vh_-_15px)]">
          <p className="mr-0 ml-auto pr-4 mb-2 text-graydark/50 dark:text-white text-sm">
            Already have an account?{' '}
            <Link to="/auth/signin" className="text-blue-400">
              Log In
            </Link>
          </p>
          <div className="w-full rounded-xl border border-graydark/20 dark:border-white">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              {/* <span className="mb-1.5 block font-medium">Start for free</span> */}
              <h2 className="lg:mb-9 mb-5 text-2xl flex flex-wrap items-end justify-center gap-x-2 font-bold text-center text-black dark:text-white sm:text-title-xl2">
                Sign Up with{' '}
                <img src={logo} alt="logo" className="w-full max-w-32" />
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  {signFrom.map((data) => (
                    <FormField
                      key={data.name}
                      control={form.control}
                      name={
                        data.name as 'email' | 'password' | 'name' | 'confirm'
                      }
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="dark:text-white">
                            {data.label}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={data.placeholder}
                              type={data.type}
                              className="focus-visible:ring-blue-400 dark:text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription />
                          <FormMessage className="dark:text-white" />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button type="submit" className="mx-auto w-full">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
