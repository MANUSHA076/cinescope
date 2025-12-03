"use server";
import { signUp } from "@/lib/auth-client";

export const registerUser = async (prevState: any, formData: FormData) => {
  if (formData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
console.log("Registering user with:", { name, email, password });
    try {
      const { error } = await signUp.email(
        {
          email,
          password,
          name,
          image: undefined,
          callbackURL: "/dashboard",
        },
        {
          onError: (ctx) => {
            console.error("Registration error:", ctx.error);
          },
        }
      );

      return {
        success: !error,
        message: error ? error.message : "Registration successful.",
      };
    } catch (error) {
      console.error("Error registering user:", error);

      return { success: false, message: "Registration failed." };
    }
  }
};