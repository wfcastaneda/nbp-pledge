import Footer from './footer';
import './globals.css';
import Header from './header';
import Providers from './providers';

export const metadata = {
    title: 'Never bitcoin pledge',
    description: 'Never bitcoin pledge',
};

export default function RootLayout({ children }) {
    return (
        <html>
            <head />
            <body>
                <main className='bg-gray-10 flex min-h-screen flex-col items-center'>
                    <div className='mx-2 mt-8 grid w-full grid-cols-6 gap-x-2 gap-y-3 px-6 md:max-w-sm md:px-0'>
                        <h1 className='col-span-6 border-b border-gray-300 pb-2 font-semibold'>
                            The Never Bitcoin Pledge
                        </h1>
                        <Providers>
                            <Header />
                            {children}
                            <Footer />
                        </Providers>
                    </div>
                </main>
            </body>
        </html>
    );
}
