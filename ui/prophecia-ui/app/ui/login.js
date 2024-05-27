import {inter} from '../ui/fonts'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    router.push('/prophecia');
};


  return (
    <div className="flex justify-center items-center h-screen">
      <section>
        <div>
          <h1  className={`${inter.className} text-left`} style={{ fontSize:'44.43px',color: 'white'}}>Login</h1>
          <form onSubmit={handleLogin} className="flex flex-col items-baseline">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-4 w-full rounded-md p-2  border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-4 w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              required
            />
           <div className="flex items-center mt-4">
    <input
        id="rememberMe"
        type="checkbox"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
    />
    <label htmlFor="rememberMe" className="text-sm font-medium text-gray-900 dark:text-gray-300">Remember Me as <span className='text-blue-600'>Member of Prophecia</span>.</label>
</div>

            <button type="submit" className={`${inter.className}  mt-4 w-full bg-white hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline`}>
              LOGIN
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
