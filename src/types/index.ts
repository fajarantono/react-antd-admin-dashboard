// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ApiResponse<T> {
  code: number;
  result: T;
  message: string;
  type: "success" | "error" | "warning" | "info";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
type Recordable<T = any> = Record<string, T>;
