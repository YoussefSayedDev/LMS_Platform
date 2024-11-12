import { z } from "zod";

const requiedString = z.string().trim().min(1, "Required");

export const SignUpSchema = z.object({
  email: requiedString.email("Invalid email address"),
  username: requiedString.regex(
    /^[a-z0-9_-]+$/,
    "Only small letter, numbers, - and _ allowed",
  ),
  password: requiedString
    .min(8, "Password must be at least 8 characters long.")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z]).*$/,
      "Password must contain both uppercase and lowercase letters",
    )
    .regex(
      /^(?=.*\d)(?=.*[@$!%*?&]).*$/,
      "Password must contain at least one number and one special character (e.g., !@#$%^&*).",
    ),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const SignInSchema = z.object({
  username: requiedString,
  password: requiedString,
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
