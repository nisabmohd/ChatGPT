import GoogleLogin from "@/components/google-login";

export default function Login() {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[70vh]">
      <h3 className="text-2xl font-bold text-center">Login to OpenChat</h3>
      <GoogleLogin />
    </div>
  );
}
