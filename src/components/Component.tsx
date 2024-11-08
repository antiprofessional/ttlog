'use client';

import { ChevronLeft, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import classNames from 'classnames'; // Use classNames as a replacement for cn

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...props}>{props.children}</button>;
}

export default function Component() {
  const [activeTab, setActiveTab] = useState<'phone' | 'email'>('email');

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <button className="p-2">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Log in</h1>
        <button className="p-2">
          <HelpCircle className="h-6 w-6" />
        </button>
      </div>

      <div className="flex mb-8 border-b">
        <button
          onClick={() => setActiveTab('phone')}
          className={classNames(
            'pb-2 px-4 text-base font-normal flex-1',
            activeTab === 'phone'
              ? 'border-b-2 border-black'
              : 'text-gray-400'
          )}
        >
          Phone
        </button>
        <button
          onClick={() => setActiveTab('email')}
          className={classNames(
            'pb-2 px-4 text-base font-normal flex-1',
            activeTab === 'email'
              ? 'border-b-2 border-black'
              : 'text-gray-400'
          )}
        >
          Email / Username
        </button>
      </div>

      <form className="space-y-6">
        {activeTab === 'phone' ? (
          <div>
            <Input
              type="tel"
              placeholder="Phone number"
              className="border-0 border-b border-gray-200 rounded-none px-0 h-12 text-base placeholder:text-gray-400"
            />
          </div>
        ) : (
          <div>
            <Input
              type="text"
              placeholder="Email or username"
              className="border-0 border-b border-gray-200 rounded-none px-0 h-12 text-base placeholder:text-gray-400"
            />
          </div>
        )}
        <div>
          <Input
            type="password"
            placeholder="Password"
            className="border-0 border-b border-gray-200 rounded-none px-0 h-12 text-base placeholder:text-gray-400"
          />
        </div>
        <div>
          <Button
            className="p-0 h-auto text-base font-normal text-black"
          >
            Forgot password?
          </Button>
        </div>
        <Button className="w-full h-12 mt-6 bg-gray-100 text-gray-400 hover:bg-gray-100">
          Log in
        </Button>
      </form>
    </div>
  );
}
