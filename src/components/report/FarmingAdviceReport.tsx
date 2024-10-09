'use client';

import { useChat } from "ai/react";
import { useEffect, useState } from "react";
import Markdown from "../help/markdown";

export default function FarmingAdviceReport({ data }: { data: { uvIndex: number, disease: string[], soilType: string, language: string; }; }) {

    const { messages, handleSubmit, setInput } = useChat();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isSubmitted, setIsSubmitted] = useState(false);

    const prompt = `The current uv index is ${data?.uvIndex} in this area (Low UV levels (below 3 UV index), Moderate UV levels (UV index of 3–7.5), High UV levels (UV index above 7.5) , My land's diseases are ( ${data?.disease?.map(item => item)?.join(',')})  MY land's soil type is ${data?.soilType} and give me suggestions what crops can be grown in this soil type.  lastly,so give me overall recommendations in 100 words (must give response with some points separeted with number like 1,2,3) in ${data.language} language (Give me the most cost efficient alternatives)`;
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