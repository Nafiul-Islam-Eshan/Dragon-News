'use client'


import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import React from "react"

export default function LoginPage() {

    const handleLoginForm = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log({email, password});

    }


    return (

        <form onSubmit={handleLoginForm} >

            <FieldGroup className="max-w-150 mx-auto my-10 max-h-90 bg-white p-10 rounded-xl flex items-center justify-center">
                <Field>
                    <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                    <Input 
                        id="fieldgroup-email" 
                        placeholder="Email" 
                        name="email"
                        className="bg-gray-200 " />
                </Field>
                <Field>
                    <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
                    <Input
                        id="fieldgroup-password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="bg-gray-200 "
                    />
                    <FieldDescription>
                        We&apos;ll send updates to this address.
                    </FieldDescription>
                </Field>
                <Field orientation="horizontal">
                    <Button className={`w-full`} type="submit">Submit</Button>
                </Field>
                <p className="text-sm">
                    Don&apos;t have an account? <Link className="text-blue-500" href='register'>Register</Link>
                </p>
            </FieldGroup>

        </form>
    )
}
