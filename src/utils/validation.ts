import { z } from "zod";

type Url = z.infer<typeof Url>;
const Url = z.string().url();

export const isUrl = (str: string): str is Url => Url.safeParse(str).success;
