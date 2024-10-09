'use client';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot
} from "@/components/ui/input-otp";
import icons from "@/constants/menuIcons";
import { useVerifyCodeMutation } from "@/features/api/apiSlice";
import { useToast } from "@/hooks/use-toast";
import VerificationCodeSchema from '@/schemas/verificationCodeSchema';
import { VerificationCodeFromData } from "@/types/types";
import { zodResolver } from '@hookform/resolvers/zod';
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";

export default function Page() {

    const [verifyCode, { data: response, isLoading, isError, isSuccess, error, reset }] = useVerifyCodeMutation();

    const form = useForm<VerificationCodeFromData>({
        resolver: zodResolver(VerificationCodeSchema),
        defaultValues: {
            verificationCode: '',
        }
    });

    const router = useRouter();
    const params = useParams<{ email: string; }>();
    const email = decodeURIComponent(params.email);
    const { toast } = useToast();

    const onSubmit = (data: VerificationCodeFromData) => {
        data.email = email;
        verifyCode(data);
    };

    useEffect(() => {
        if (isSuccess && response && response.message) {
            toast({
                title: "Success",
                description: response.message,
            });
            reset();
            router.replace(`/sign-in`);
        }
        if (isError) {
            toast({
                title: "Error",
                variant: "destructive",
                description: "Wrong Verification Code!"
            });
        }
    }, [error, isError, isSuccess, reset, response, router, toast]);

    return (
        <section className="flex justify-center items-center h-[100vh]">
            <div className="w-full lg:w-5/12 mx-auto flex flex-col items-center gap-y-5 p-6 rounded-xl ">
                <div className="flex flex-col items-center text-2xl lg:text-4xl font-black relative">
                    <Image src={icons.brandLogo} alt="brand" className="mb-5 w-60" />
                    <h1>Verify Your</h1>
                    <h1>Account</h1>
                </div>
                <h1>Enter the 6 digit verification code sent to your email : <span className="text-primary underline">{email}</span></h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-5">
                        <FormField
                            control={form.control}
                            name="verificationCode"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-center">
                            <Button type="submit" disabled={isLoading} className="text-white">
                                {isLoading ? <span className="flex items-center gap-x-2"><BiLoaderAlt className="animate-spin" /> Verifying...</span> : 'Verify'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
}
