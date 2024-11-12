import img from '../assets/img/600x400.png'

export default function AppMain() {
	return (
		<main className='main bg-light vh-100'>
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-6'>
						<div className='card border-1 border-light-subtle rounded'>
							<img src={img} alt='card-img' className='card-img rounded-top rounded-0' />
							<div className='card-body'>
								<h5 className='card-title'>Titolo del post</h5>
								<p className='card-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat asperiores nam unde hic, consectetur
									nemo.
								</p>
								<button className='btn btn-warning text-uppercase px-4 text-white'>LEGGI DI PIù</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
