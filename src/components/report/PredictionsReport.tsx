'use client';

import { useChat } from "ai/react";
import { useEffect, useState } from "react";
import Markdown from "../help/markdown";

export default function PredictionsReport({ data }: { data: { groundwaterdecision: string, rain_type: string, soilDryness: number, waterPurity: number, language: string; }; }) {
    const { messages, handleSubmit, setInput } = useChat();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSubmitted, setIsSubmitted] = useState(false);
    const prompt = `MY land's soildryness is  ${data?.soilDryness}% and MY land's ground level water is ${data?.waterPurity} %.
     The current rain type is  ${data?.rain_type}. The current decision based on the ground water level is ${data?.groundwaterdecision}.
     so give me overall recommendations in 100 words (must give response with some points separeted with number like 1,2,3) in ${data.language} language (Give me the most cost efficient alternatives)`;
    console.log(prompt);

    useEffect(() => {
        setInput(prompt);
    }, [prompt]);


    useEffect(() => {
        if (!isSubmitted) {
            setTimeout(() => {
                handleSubmit();
            }, 500);
        }
    }, [isSubmitted, handleSubmit]);

    console.log(messages);
    return (
        <div>

            {messages && (
                messages.map((m) => (
                    <>
                        {m.role == 'assistant' && (

                            <div className='flex flex-col space-y-2'>
                                <div className="w-auto bg-slate-200 px-4 py-2 rounded-lg  text-slate-800">
                                    <Markdown text={m.content} />
                                </div>
                            </div>
                        )
                        }
                    </>
                ))
            )}
        </div>
    );
}