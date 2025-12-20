"use client";

import { registerUser } from "@/actions/auth";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type RegisterState = {
  success: boolean | null;
  message: string | null;
  field: "name" | "email" | "password" | "general" | null;
};

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState<RegisterState>(
    registerUser,
    {
      success: null,
      message: null,
      field: null,
    }
  );

  useEffect(() => {
    if (state?.success) {
      router.push("/dashboard");
    }
  }, [state, router]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg capitalize">
            Create your account
          </CardTitle>
          <CardDescription>
            Enter your information below to create your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={formAction}>
            <FieldGroup className="gap-4">

              {/* Name */}
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" name="name" type="text" placeholder="Your Name" />
                <FieldError className="text-xs">
                  {state?.field === "name" && state?.message}
                </FieldError>
              </Field>

              {/* Email */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" name="email" type="email" placeholder="john@example.com" />
                <FieldError className="text-xs">
                  {state?.field === "email" && state?.message}
                </FieldError>
              </Field>

              {/* Password */}
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" name="password" type="password" />
                <FieldError className="text-xs">
                  {state?.field === "password" && state?.message}
                </FieldError>
              </Field>

              {/* Buttons */}
              <Field className="flex flex-col gap-2">
                <FieldError className="text-xs text-center">
                  {state?.field === "general" && state?.message}
                </FieldError>

                <Button type="submit" disabled={isPending}>
                  {isPending ? "Registering..." : "Register"}
                </Button>

                <Button variant="outline" type="button" disabled={isPending}>
                  Continue with Google
                </Button>

                <FieldDescription className="text-center">
                  Already have an account? <Link href="/login">Login</Link>
                </FieldDescription>
              </Field>

            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
