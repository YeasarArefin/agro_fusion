import { baseUrl } from '@/constants/baseUrl';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${baseUrl}api`
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: '/signup',
                method: 'POST',
                body: data
            })
        }),
        verifyCode: builder.mutation({
            query: (data) => ({
                url: '/verify-code',
                method: 'POST',
                body: data
            })
        })

    })
});
export const { useSignUpMutation, useVerifyCodeMutation } = apiSlice;