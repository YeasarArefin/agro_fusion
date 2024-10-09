'use client';
import { Button } from "@/components/ui/button";
import Error from "@/components/ui/Errors";
import icons from "@/constants/menuIcons";
import { useSignUpMutation } from "@/features/api/apiSlice";
import { useToast } from "@/hooks/use-toast";
import signUpSchema from '@/schemas/signUpSchema';
import { SignUpFormData } from "@/types/types";
import { zodResolver } from '@hookform/resolvers/zod';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { BiLoaderAlt } from "react-icons/bi";
export default function Page() {

    const [formData, setFormData] = useState<SignUpFormData>({ name: '', email: '', password: '' });
    const { register, handleSubmit, formState: { errors }, reset } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }

    });

    const [signUp, { data: response, isLoading, isError, isSuccess, error }] = useSignUpMutation();
    const { toast } = useToast();
    const router = useRouter();

    const handleSignUp = (data: SignUpFormData) => {
        signUp(data);
        setFormData(data);
    };

    useEffect(() => {
        if (isSuccess && response && response.message) {
            toast({
                title: "Success",
                description: response.message,
            });
            reset();
            router.replace(`/verify/${formData.email}`);
        }
        if (error) {
            toast({
                title: "Error",
                variant: "destructive",
                description: 'Failed to sign-up',
            });
        }
    }, [error, formData.email, isError, isSuccess, reset, response, router, toast]);

    return (

        <section className="container h-[100vh] flex justify-center items-center">
            <div className="grid grid-cols-3 relative">
                <div className="col-span-1 flex flex-col items-center relative ">
                    <Image src={icons.brandLogo2} alt="brand logo" />
                    <Image src={icons.smart_firming} alt="brand logo" className="z-20" />
                    <div className="bg-primary h-[50px] w-full absolute bottom-0 z-10"></div>
                    <div className="absolute w-[80px] h-full -right-10 z-30 rounded-full bg-white" style={{ boxShadow: '-10px -0px 22px -13px #aaa;' }}></div>
                </div>
                <div className="col-span-2 flex items-center rounded-3xl ">
                    <div className="w-3/6 mx-auto">
                        <div >
                            <h1 className="text-3xl font-bold mb-8 pl-2">Sign Up</h1>
                            <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-y-2">
                                <div>
                                    <input type="text" placeholder="Full Name" className="outline-none border-b border-slate-300 px-2 py-2 w-full" {...register('name')} />
                                    {errors.email && <Error>{errors.name?.message}</Error>}
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" className="outline-none border-b border-slate-300 px-2 py-2 w-full" {...register('email')} />
                                    {errors.email && <Error>{errors.email.message}</Error>}
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" className="outline-none border-b border-slate-300 px-2 py-2 w-full" {...register('password')} />
                                    {errors.password && <Error>{errors.password.message}</Error>}
                                </div>
                                <div className="flex gap-x-2 py-2 px-2">
                                    <p>Don&apos;t have an account?</p>
                                    <Link href={'/sign-in'} className="text-primary hover:underline">Sign In</Link>
                                </div>
                                <Button className="text-white w-full py-5 mt-5">
                                    {isLoading ? <span className="flex items-center gap-x-2"><BiLoaderAlt className="animate-spin" /> Creating...</span> : 'Sign Up'}
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
                <div>

                </div>
            </div>
        </section>

    );
}
