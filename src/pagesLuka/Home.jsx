import * as React from 'react';
import Header from './Header';

export default function Home() {
	return (
		<div>
			<main>
				<h2>Home</h2>
				<p>Bienvenidos al tema de las Rutas en React.</p>
				<img
					src='https://scontent.fmid2-1.fna.fbcdn.net/v/t39.30808-6/277755188_5701670866527284_2203859788017450218_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Sb1kAjLkwDYAX_jluBd&_nc_ht=scontent.fmid2-1.fna&oh=00_AT_XNc-jdz7Pt9k0CUvycENONldnM8E8BiYmbO4uzPZ3xA&oe=625F6548'
					alt='Alpaca Suri'
					width={250}
				/>
			</main>
		</div>
	);
}
