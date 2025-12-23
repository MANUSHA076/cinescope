"use server";

import { auth } from "@/lib/auth";

/* =========================
   TYPES
========================= */
type ActionState = {
  success: boolean;
  message: string;
  field?: "name" | "email" | "password" | "general";
};

type BetterAuthError = {
  message?: string;
  body?: {
    message?: string;
    code?: string;
  };
};

/* =========================
   REGISTER USER
========================= */
export const registerUser = async (
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> => {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  if (!name) {
    return { success: false, message: "Name is required.", field: "name" };
  }

  if (!email) {
    return { success: false, message: "Email is required.", field: "email" };
  }

  if (!password) {
    return { success: false, message: "Password is required.", field: "password" };
  }

  try {
    await auth.api.signUpEmail({
      body: { name, email, password },
    });

    return {
      success: true,
      message: "User registered successfully.",
      field: "general",
    };
  } catch (err: unknown) {
    console.error("Register error:", err);

    const error = err as BetterAuthError;

    if (error?.body?.code === "EMAIL_ALREADY_EXISTS") {
      return {
        success: false,
        message: "This email is already registered.",
        field: "email",
      };
    }

    return {
      success: false,
      message:
        error?.body?.message ||
        error?.message ||
        "User registration failed.",
      field: "general",
    };
  }
};

/* =========================
   LOGIN USER
========================= */
export const loginUser = async (
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> => {
  const email = formData.get("email")?.toString().trim();
  const password = formData.get("password")?.toString();

  if (!email) {
    return { success: false, message: "Email is required.", field: "email" };
  }

  if (!password) {
    return { success: false, message: "Password is required.", field: "password" };
  }

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
        rememberMe: true,
      },
    });

    return {
      success: true,
      message: "User logged in successfully.",
      field: "general",
    };
  } catch (err: unknown) {
    console.error("Login error:", err);

    const error = err as BetterAuthError;

    return {
      success: false,
      message:
        error?.body?.message ||
        error?.message ||
        "Invalid email or password.",
      field: "general",
    };
  }
};

/* =========================
   LOGOUT USER
========================= */
export const logoutUser = async (): Promise<ActionState> => {
  try {
    await auth.api.signOut();

    return {
      success: true,
      message: "User logged out successfully.",
    };
  } catch (err: unknown) {
    console.error("Logout error:", err);

    return {
      success: false,
      message: "Logout failed.",
    };
  }
};
