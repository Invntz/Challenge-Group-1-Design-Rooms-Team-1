//creat by Min-Xuan

import { useNavigate } from 'react-router-dom';
import Popup, { PopupPropsWithoutChildren } from './Popup';
import logo from '@/images/logo/invntz.png';
import { userFormField } from '@/pages/Authentication/SignUp';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useEffect } from 'react';

type SignupPopupProps = PopupPropsWithoutChildren & {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
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

const SignupPopup = ({ isOpen, handleClose, setLogin }: SignupPopupProps) => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (!isOpen) {
      form.reset();
    }
  }, [isOpen]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    navigate('/');
  }

  return (
    <Popup isOpen={isOpen} handleClose={handleClose}>
      <div className="rounded-xl max-h-[90vh] overflow-y-auto bg-white shadow-default dark:bg-boxdark">
        <div className="flex flex-col max-w-xl mx-auto w-full justify-center px-5 py-2">
          <div className="w-full rounded-xl">
            <div className="w-full px-4 py-2">
              <h2 className="mb-5 text-2xl flex flex-wrap items-end justify-center gap-x-2 font-bold text-center text-black dark:text-white sm:text-title-xl2">
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

              <p className="mx-auto mt-5 text-graydark/50 dark:text-white text-sm text-center">
                Already have an account?
                <button
                  className="text-blue-400 ml-2"
                  onClick={() => {
                    handleClose();
                    setLogin(true);
                  }}
                >
                  Log In
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default SignupPopup;
