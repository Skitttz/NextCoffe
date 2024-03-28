import Link from 'next/link';
import { CoffeeIcon } from '../../views/CoffeIcon';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

export default function AuthForm() {
  return (
    <main>
      <div className="flex items-center mt-24 min-h-fit p-4">
        <div className="grid max-w-sm gap-4 mx-auto items-center space-y-4">
          <div className="space-y-2 text-center">
            <CoffeeIcon className="w-20 mx-auto" />
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your email below to login to your account
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" size="sm" variant="default">
              Login
            </Button>
            <Button className="w-full" variant="outline">
              Login with Google
            </Button>
          </div>
          <div className="space-y-2 text-center">
            <Link className="text-sm underline" href="#">
              Forgot your password?
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Dont have an account?
              <Link className="underline" href="#">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
