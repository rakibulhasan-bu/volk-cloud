import Footer from '@/components/shared/footer/footer';
import Header from '@/components/shared/header/header';

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className=''>
            <Header />
            {children}
            <Footer />
        </div>
    );
};