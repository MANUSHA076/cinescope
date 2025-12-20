"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

import { loginUser } from "@/actions/auth";

/* ---------------- TYPES ---------------- */

type LoginState = {
  success: boolean | null;
  message: string | null;
  field: "email" | "password" | "general" | null;
};

/* ---------------- COMPONENT ---------------- */

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState<LoginState>(
    loginUser,
    {
      success: null,
      message: null,
      field: null,
    }
  );

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  // Redirect on successful login
  useEffect(() => {
    if (state?.success === true) {
      router.push("/dashboard");
    }
  }, [state, router]);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg capitalize">
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form action={formAction}>
            <FieldGroup className="gap-4">

              {/* ---------------- EMAIL ---------------- */}
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                />
                <FieldError className="text-xs">
                  {state?.field === "email" && state?.message}
                </FieldError>
              </Field>

              {/* ---------------- PASSWORD ---------------- */}
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                />
                <FieldError className="text-xs">
                  {state?.field === "password" && state?.message}
                </FieldError>
              </Field>

              {/* ---------------- GENERAL ERROR + BUTTONS ---------------- */}
              <Field className="flex flex-col gap-2">
                <FieldError className="text-xs text-center">
                  {state?.field === "general" && state?.message}
                </FieldError>

                <Button type="submit" disabled={isPending}>
                  {isPending ? "Logging in..." : "Login"}
                </Button>

                <Button
                  variant="outline"
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isPending}
                >
                  Continue with Google
                </Button>

                <FieldDescription className="text-center">
                  Don&apos;t have an account? <Link href="/register">Register</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
