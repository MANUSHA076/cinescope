"use server";
import { Field } from "@/components/ui/field";
import { signUp, signIn, signOut } from "@/lib/auth-client";

//import { redirect ,RedirectType} from "next/navigation";
//server action to log in user
export const registerUser = async (prevState: string[], formData: FormData) => {
  if (formData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email) {
      return { success: false, message: "Email is required.", field: "email" };
    }
    if (!password) {
      return { success: false, message: "Password is required.", field: "password" };
    }
    if (!name) {
      return { success: false, message: "Name is required.", field: "name" };
    }

   

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
        field: error && "general"
      };
    } catch (error) {
      console.error("Error registering user:", error);

      return { success: false, message: "Registration failed." };
    }
  }
};

export const loginUser = async (prevState: string[], formData: FormData) => {
  
  if (formData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email) {
      return { success: false, message: "Email is required." };
      if (!password) {
        return { success: false, message: "Password is required.", field: "password" };
      }
    }
   
    try {
      // Implement logout logic here
      const { error } = await signIn.email(
        {
          email,
          password,
          rememberMe: true,
          callbackURL: "/dashboard",
        },
        {
          onSuccess: (ctx) => {
            console.log("User logged in successfully");
            
            //redirect("/dashboard", RedirectType.push);
          },


          onError: (ctx) => {
            console.error("Logout error:", ctx.error);
          },
        }
    
      );
      return {
        success: !error,
        message: error ? error.message : "Login successful.",
        field: error && "general"
      };
    } catch (error) {
      console.error("Error logging  user:", error);
      return { success: false, message: "Login failed." };
    }
  }


};

export const logoutUser = async () => {
  try {
// Implement logout logic here
     await signOut({
       fetchOptions: {
         onSuccess: () => {
           console.log("User logged out successfully");
           //redirect loging page
         },
       },
    });
    
  } catch (error) {
    console.error("Error logging out user:", error);
    return { success: false, message: "Logout failed." };
  } 

  };
