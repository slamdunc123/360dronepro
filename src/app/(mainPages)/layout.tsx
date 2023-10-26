import Navbar from '../components/Navbar/Navbar';

export default function MainPagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='flex flex-col items-center w-full xl:w-10/12'>
			<Navbar />
			{children}
		</div>
	);
}
