import { createContext } from "react";

// Below line will create global state container
export const UserContext = createContext<{UserName: string; UserLastName: string}>({UserName: "", UserLastName: ""});

