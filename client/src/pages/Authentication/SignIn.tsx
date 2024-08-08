// Modified by Minhazul Karim

import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
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
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

const SignIn: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="mt-5">
      <Breadcrumb pageName="Sign In" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">

          <div className="w-full border-stroke dark:border-strokedark max-w-2xl mx-auto xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-center text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to Invntz
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="mx-auto w-fit block">
                    Submit
                  </Button>
                </form>
              </Form>

              <div className="flex gap-4 my-4 mx-auto w-fit">
                <svg
                  width="120"
                  height="45"
                  viewBox="0 0 120 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="120" height="45" rx="6" fill="#4064AC" />
                  <path
                    d="M64.8125 21.0625H63.0625H62.4375V20.4375V18.5V17.875H63.0625H64.375C64.7188 17.875 65 17.625 65 17.25V13.9375C65 13.5938 64.75 13.3125 64.375 13.3125H62.0938C59.625 13.3125 57.9062 15.0625 57.9062 17.6562V20.375V21H57.2812H55.1562C54.7187 21 54.3125 21.3438 54.3125 21.8438V24.0938C54.3125 24.5312 54.6562 24.9375 55.1562 24.9375H57.2187H57.8437V25.5625V31.8438C57.8437 32.2812 58.1875 32.6875 58.6875 32.6875H61.625C61.8125 32.6875 61.9688 32.5938 62.0938 32.4688C62.2188 32.3438 62.3125 32.125 62.3125 31.9375V25.5938V24.9688H62.9688H64.375C64.7812 24.9688 65.0938 24.7188 65.1562 24.3438V24.3125V24.2812L65.5938 22.125C65.625 21.9062 65.5938 21.6562 65.4062 21.4062C65.3438 21.25 65.0625 21.0938 64.8125 21.0625Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="120"
                  height="45"
                  viewBox="0 0 120 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="120" height="45" rx="6" fill="#1C9CEA" />
                  <path
                    d="M68.2945 18.3752C68.4059 18.2453 68.2607 18.0756 68.0958 18.1364C67.728 18.2721 67.3918 18.3616 66.8947 18.4168C67.5062 18.0763 67.7906 17.5897 68.0219 16.9936C68.0777 16.8498 67.9094 16.7193 67.7645 16.788C67.1759 17.0671 66.5408 17.2741 65.873 17.3965C65.2129 16.7423 64.272 16.3335 63.2312 16.3335C61.2325 16.3335 59.6117 17.8408 59.6117 19.6995C59.6117 19.9633 59.6441 20.2204 59.7051 20.4665C56.832 20.3326 54.2702 19.1036 52.4903 17.219C52.3683 17.0898 52.147 17.107 52.071 17.2645C51.8684 17.6848 51.7554 18.1511 51.7554 18.642C51.7554 19.8095 52.3942 20.8397 53.3652 21.4433C52.9298 21.4302 52.5134 21.3454 52.1297 21.2014C51.9429 21.1314 51.7288 21.2545 51.7539 21.4429C51.9466 22.8895 53.1177 24.0829 54.6295 24.3649C54.3259 24.4422 54.0061 24.4832 53.6754 24.4832C53.5952 24.4832 53.5157 24.4807 53.4369 24.4758C53.2364 24.4634 53.0735 24.6427 53.1594 24.8143C53.7265 25.9462 54.951 26.7363 56.376 26.7609C55.1374 27.6639 53.5769 28.2019 51.8811 28.2019C51.672 28.2019 51.5823 28.4707 51.7678 28.5619C53.2005 29.2662 54.832 29.6668 56.5656 29.6668C63.2231 29.6668 66.8631 24.5379 66.8631 20.0898C66.8631 19.9442 66.8594 19.7986 66.8528 19.6544C67.3932 19.2913 67.8789 18.8597 68.2945 18.3752Z"
                    fill="white"
                  />
                </svg>

                <svg
                  width="120"
                  height="45"
                  viewBox="0 0 120 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="120" height="45" rx="6" fill="#D64937" />
                  <g clip-path="url(#clip0_19_1128)">
                    <path
                      d="M69.2188 22.1252H60.25V24.7814H66.6875C66.3438 28.4689 63.3438 30.0627 60.4375 30.0627C56.75 30.0627 53.4688 27.1877 53.4688 23.0314C53.4688 19.0314 56.5938 16.0002 60.4375 16.0002C63.375 16.0002 65.1563 17.9064 65.1563 17.9064L66.9688 16.0002C66.9688 16.0002 64.5313 13.3439 60.3125 13.3439C54.75 13.3127 50.5 17.9689 50.5 23.0002C50.5 27.8752 54.5 32.6877 60.4063 32.6877C65.625 32.6877 69.375 29.1564 69.375 23.8752C69.4063 22.7814 69.2188 22.1252 69.2188 22.1252Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_19_1128">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(50 13)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
