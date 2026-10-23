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
import { SubmitHandler, useForm } from "react-hook-form"
import { GrCircleAlert } from "react-icons/gr"

type Inputs = {
  password: string
  email: string
}


export default function LoginPage() {

    const {register, handleSubmit, formState:{errors}} = useForm<Inputs>()

    console.log(errors);

    const handleLoginForm : SubmitHandler<Inputs> = (data) =>{
        console.log({data});
    }

    return (

        <form onSubmit={handleSubmit(handleLoginForm)} >

            <FieldGroup className="max-w-150 mx-auto my-10 max-h-90 bg-white p-10 rounded-xl flex items-center justify-center">
                <Field>
                    <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                    <Input 
                        id="fieldgroup-email" 
                        placeholder="Email" 
                        className="bg-gray-200 "
                        {...register("email", {
                            required:"Email is mandatory",
                        } )}
                     />
                     
                     {
                        errors.email && <FieldDescription className="flex gap-1 items-center text-sm text-rose-600"> <GrCircleAlert/> {errors.email?.message}</FieldDescription>
                    }

                </Field>

                <Field>
                    <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
                    <Input
                        id="fieldgroup-password"
                        type="password"
                        placeholder="Password"
                        className="bg-gray-200 "
                        {...register("password", {
                            required:"Password is mandatory",
                            minLength:4
                        })}
                    />

                    {
                        errors.password && <FieldDescription className="flex gap-1 items-center text-sm text-rose-600"> <GrCircleAlert/> {errors.password.message}</FieldDescription>
                    }

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
