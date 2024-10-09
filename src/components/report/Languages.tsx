
'use client';
import React, { useEffect, useState } from 'react';
// import { Button } from '../ui/button'
import { useRouter, useSearchParams } from 'next/navigation';
// import { cn } from '@/lib/utils'
import PageTitle from '../ui/PageTitle';

// type languageType = { id: number, text: string }
const all_languages = [
    { "name": "English", "code": "en" },
    { "name": "Bangla", "code": "bn" },
    { "name": "Spanish", "code": "es" },
    { "name": "French", "code": "fr" },
    { "name": "German", "code": "de" },
    { "name": "Chinese", "code": "zh" },
    { "name": "Hindi", "code": "hi" },
    { "name": "Arabic", "code": "ar" },
    { "name": "Russian", "code": "ru" },
    { "name": "Portuguese", "code": "pt" },
    { "name": "Japanese", "code": "ja" },
    { "name": "Korean", "code": "ko" },
    { "name": "Italian", "code": "it" },
    { "name": "Dutch", "code": "nl" },
    { "name": "Greek", "code": "el" },
    { "name": "Turkish", "code": "tr" },
    { "name": "Swedish", "code": "sv" },
    { "name": "Polish", "code": "pl" },
    { "name": "Danish", "code": "da" },
    { "name": "Finnish", "code": "fi" },
    { "name": "Norwegian", "code": "no" },
    { "name": "Czech", "code": "cs" },
    { "name": "Hungarian", "code": "hu" },
    { "name": "Romanian", "code": "ro" },
    { "name": "Ukrainian", "code": "uk" },
    { "name": "Hebrew", "code": "he" },
    { "name": "Thai", "code": "th" },
    { "name": "Vietnamese", "code": "vi" },
    { "name": "Indonesian", "code": "id" },
    { "name": "Malay", "code": "ms" },
    { "name": "Filipino", "code": "fil" },
    { "name": "Serbian", "code": "sr" },
    { "name": "Croatian", "code": "hr" },
    { "name": "Slovak", "code": "sk" },
    { "name": "Bulgarian", "code": "bg" },
    { "name": "Slovenian", "code": "sl" },
    { "name": "Lithuanian", "code": "lt" },
    { "name": "Latvian", "code": "lv" },
    { "name": "Estonian", "code": "et" },
    { "name": "Icelandic", "code": "is" },
    { "name": "Maltese", "code": "mt" },
    { "name": "Luxembourgish", "code": "lb" },
    { "name": "Basque", "code": "eu" },
    { "name": "Catalan", "code": "ca" },
    { "name": "Welsh", "code": "cy" },
    { "name": "Irish", "code": "ga" },
    { "name": "Scottish Gaelic", "code": "gd" },
    { "name": "Afrikaans", "code": "af" },
    { "name": "Swahili", "code": "sw" },
    { "name": "Zulu", "code": "zu" },
    { "name": "Xhosa", "code": "xh" },
    { "name": "Amharic", "code": "am" },
    { "name": "Somali", "code": "so" },
    { "name": "Hausa", "code": "ha" },
    { "name": "Yoruba", "code": "yo" },
    { "name": "Igbo", "code": "ig" },
    { "name": "Sinhala", "code": "si" },
    { "name": "Tamil", "code": "ta" },
    { "name": "Telugu", "code": "te" },
    { "name": "Kannada", "code": "kn" },
    { "name": "Malayalam", "code": "ml" },
    { "name": "Marathi", "code": "mr" },
    { "name": "Gujarati", "code": "gu" },
    { "name": "Punjabi", "code": "pa" },
    { "name": "Odia", "code": "or" },
    { "name": "Assamese", "code": "as" },
    { "name": "Maithili", "code": "mai" },
    { "name": "Bhojpuri", "code": "bho" },
    { "name": "Santali", "code": "sat" },
    { "name": "Kashmiri", "code": "ks" },
    { "name": "Pashto", "code": "ps" },
    { "name": "Urdu", "code": "ur" },
    { "name": "Farsi", "code": "fa" },
    { "name": "Kurdish", "code": "ku" },
    { "name": "Azerbaijani", "code": "az" },
    { "name": "Georgian", "code": "ka" },
    { "name": "Armenian", "code": "hy" },
    { "name": "Kazakh", "code": "kk" },
    { "name": "Uzbek", "code": "uz" },
    { "name": "Tajik", "code": "tg" },
    { "name": "Kyrgyz", "code": "ky" },
    { "name": "Mongolian", "code": "mn" },
    { "name": "Tibetan", "code": "bo" },
    { "name": "Lao", "code": "lo" },
    { "name": "Khmer", "code": "km" },
    { "name": "Burmese", "code": "my" },
    { "name": "Javanese", "code": "jv" },
    { "name": "Sundanese", "code": "su" },
    { "name": "Balinese", "code": "ban" },
    { "name": "Madurese", "code": "mad" },
    { "name": "Buginese", "code": "bug" },
    { "name": "Tagalog", "code": "tl" },
    { "name": "Cebuano", "code": "ceb" },
    { "name": "Hiligaynon", "code": "hil" },
    { "name": "Ilocano", "code": "ilo" },
    { "name": "Waray", "code": "war" },
    { "name": "Fijian", "code": "fj" },
    { "name": "Samoan", "code": "sm" },
    { "name": "Tongan", "code": "to" },
    { "name": "Hawaiian", "code": "haw" },
    { "name": "Maori", "code": "mi" },
    { "name": "Chichewa", "code": "ny" },
    { "name": "Malagasy", "code": "mg" },
    { "name": "Shona", "code": "sn" },
    { "name": "Twi", "code": "tw" },
    { "name": "Tswana", "code": "tn" },
    { "name": "Sesotho", "code": "st" },
    { "name": "Wolof", "code": "wo" },
    { "name": "Fula", "code": "ff" },
    { "name": "Mandinka", "code": "mnk" },
    { "name": "Bambara", "code": "bm" },
    { "name": "Tigrinya", "code": "ti" },
    { "name": "Quechua", "code": "qu" },
    { "name": "Aymara", "code": "ay" },
    { "name": "Guarani", "code": "gn" },
    { "name": "Nahuatl", "code": "nah" },
    { "name": "Maya", "code": "myn" },
    { "name": "Cherokee", "code": "chr" },
    { "name": "Navajo", "code": "nv" },
    { "name": "Inuktitut", "code": "iu" },
    { "name": "Greenlandic", "code": "kl" },
    { "name": "Sami", "code": "se" },
    { "name": "Mongolic", "code": "xal" },
];


export default function Languages() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentLanguage = searchParams.get('language');

    // Local state to store the previous language
    const [prevLanguage, setPrevLanguage] = useState<string | null>(currentLanguage);

    const handleLanguageChange = (lan: string) => {
        router.replace(`/dashboard/report?language=${lan}`);
    };

    useEffect(() => {
        // Reload only if the language has changed and isn't the initial load
        if (currentLanguage && currentLanguage !== prevLanguage) {
            setPrevLanguage(currentLanguage); // Update previous language
            window.location.reload();
        }
        setSelectedLanguage(currentLanguage || ''); // Reload the page

    }, [currentLanguage, prevLanguage]);

    const [selectedLanguage, setSelectedLanguage] = useState('');
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedLanguage(value);
        // Run any function when the value changes
        handleLanguageChange(value);
    };



    return (
        <div className='flex flex-row items-center justify-between border-slate-200 border-b py-4'>
            <div>
                <PageTitle title="Overall Report" />
            </div>
            <div className='flex flex-row space-x-2 items-center'>

                <select value={selectedLanguage} onChange={handleSelectChange} className='outline-none border border-primary text-primary rounded-md px-1 py-1.5'>

                    {all_languages?.map(item => {
                        return (
                            <option key={item.code} value={item.name} className='w-36'>{item.name}</option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
}