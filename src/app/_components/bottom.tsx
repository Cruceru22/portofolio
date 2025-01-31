import { LinkedinIcon, XIcon, MailIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

export default function Component() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Contact Me
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <MailIcon className="h-5 w-5 text-gray-500" />
          <span className="text-sm text-gray-700">
            cruceru.andrei2202@gmail.com
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <LinkedinIcon className="h-5 w-5 text-blue-600" />
          <a
            href="https://linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <XIcon className="h-5 w-5 text-blue-400" />
          <a
            href="https://x.com/andreicruceruu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline"
          >
            X Profile
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
