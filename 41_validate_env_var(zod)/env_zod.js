// Below method is a manually write it and import when used in file
const PORT = isNaN(process.env.PORT) ? 3000 : Number(process.env.PORT);

// Now let's see how we can use Zod to validate our environment variables
import { z } from "zod";

const ageSchema = z.number().min(18).max(100).int();
const userAge = 19;

// const parsedUser = ageSchema.parse(userAge)
// console.log(parsedUser);

try {
  const parsedUser = ageSchema.parse(userAge);
  console.log(parsedUser);
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error("Invalid user age:", error.errors);
  } else {
    console.error("Unexpected error:", error);
  }
}
