'use client'


import { Button } from "@/components/ui/button"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { authClient } from "@/lib/auth-client"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { GrCircleAlert } from "react-icons/gr"

type Inputs = {
    password: string
    email: string
    name: string
    photoURL: string
    terms: boolean
}


export default function RegisterPage() {
    const [isVisible, setIsVisible] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const handleLoginForm: SubmitHandler<Inputs> = async (data) => {
        const { data:regData , error } = await authClient.signUp.email({
            name: data.name, // required, The name of the user.
            email: data.email, // required, The email address of the user.
            password:data.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            image: data.photoURL, // An optional profile image of the user.
            callbackURL: "/category/0", // An optional URL to redirect to after the user signs up.
        });

        if(error){
            alert(error?.message)
        }

        if(regData){
            alert("Registration Successfull");
        }
    }

    return (

        <form onSubmit={handleSubmit(handleLoginForm)} >

            <FieldGroup className="max-w-140 mx-auto my-10 max-h-140 bg-white p-10 rounded-xl flex items-center justify-center">

                <h2 className="text-center text-xl font-semibold">Register your account</h2>

                {/* Name field */}
                <Field>
                    <FieldLabel htmlFor="fieldgroup-name">Your Name</FieldLabel>
                    <Input
                        type="text"
                        id="fieldgroup-name"
                        placeholder="Your Name"
                        className="bg-gray-200 "
                        {...register("name", {
                            required: "Name is mandatory",
                        })}
                    />

                    {
                        errors.name && <FieldDescription className="flex gap-1 items-center text-sm text-rose-600"> <GrCircleAlert /> {errors.email?.message}</FieldDescription>
                    }

                </Field>

                {/* Photo url field */}
                <Field>
                    <FieldLabel htmlFor="fieldgroup-photoURL">Photo URL</FieldLabel>
                    <Input
                        type="text"
                        id="fieldgroup-photoURL"
                        placeholder="Photo URL"
                        className="bg-gray-200 "
                        {...register("photoURL", {
                            required: "Photo URL is mandatory",
                        })}
                    />

                    {
                        errors.email && <FieldDescription className="flex gap-1 items-center text-sm text-rose-600"> <GrCircleAlert /> {errors.email?.message}</FieldDescription>
                    }

                </Field>


                {/* Email */}
                <Field>
                    <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
                    <Input
                        type="email"
                        id="fieldgroup-email"
                        placeholder="Email"
                        className="bg-gray-200 "
                        {...register("email", {
                            required: "Email is mandatory",
                        })}
                    />

                    {
                        errors.email && <FieldDescription className="flex gap-1 items-center text-sm text-rose-600"> <GrCircleAlert /> {errors.email?.message}</FieldDescription>
                    }

                </Field>


                {/* Password */}
                <Field>
                    <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
                    <Input
                        id="fieldgroup-password"
                        type={isVisible ? "text" : "password"}
                        placeholder="Password"
                        className="bg-gray-200 "
                        {...register("password", {
                            required: "Password is mandatory",
                            minLength: 4
                        })}
                    />
                    
                    <p onClick={() => setIsVisible(!isVisible)} className="absolute -right-115 top-9">
                        {isVisible ? 'Hide' : 'Show'}
                    </p>

                    {
                        errors.password && <FieldDescription className="flex gap-1 items-center text-sm text-rose-600"> <GrCircleAlert /> {errors.password.message}</FieldDescription>
                    }

                </Field>


                {/* Terms and conditions */}
                {/* <Field orientation="horizontal">
                    <Checkbox
                        id="checkout-7j9-same-as-shipping-wgm"
                        className={`border-black/85`}
                        {...register('terms', {
                            required: "You must accept the terms and conditions"
                        })}
                    />
                    <FieldLabel
                        htmlFor="checkout-7j9-same-as-shipping-wgm"
                        className="font-normal"
                    >
                        <span className="opacity-75">Accept</span>Terms & Conditon
                    </FieldLabel>
                </Field> */}

                <Field orientation="horizontal">
                    <Button className={`w-full`} type="submit">Submit</Button>
                </Field>
            </FieldGroup>

        </form>
    )
}
