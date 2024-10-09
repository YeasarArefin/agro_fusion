'use client';

import { Button } from "@/components/ui/button";
import Error from "@/components/ui/Errors";
import icons from "@/constants/menuIcons";
import { useToast } from "@/hooks/use-toast";
import SignInSchema from "@/schemas/signInSchema";
import { SignInFormData } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { z } from "zod";

export default function Page() {

    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const { toast } = useToast();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
        setLoading(true);
        const result = await signIn('Credentials', {
            email: data.email,
            password: data.password,
            redirect: false,
            callbackUrl: '/dashboard'
        });
        if (result?.ok) {
            const url = result?.url as string;
            setLoading(false);
            router.push(url);
        } else {
            setLoading(false);
            toast({
                title: 'Sign-in Failed',
                description: result?.error,
                variant: 'destructive'
            });
        }

    };


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
                            <h1 className="text-3xl font-bold mb-8 pl-2">Sign In</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
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
                                    <Link href={'/sign-up'} className="text-primary hover:underline">Sign Up</Link>
                                </div>
                                <Button className="text-white w-full py-5 mt-5">
                                    {loading ? <span className="flex items-center gap-x-2"><BiLoaderAlt className="animate-spin" /> Signing in...</span> : 'Sign In'}
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
