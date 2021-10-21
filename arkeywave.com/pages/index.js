import { createClient } from 'contentful'
import ServicesCard from '../components/ServicesCard'
import styles from '../styles/Home.module.scss'

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	})

	const res = await client.getEntries({ content_type: 'servicios' })

	return {
		props: {
			servicio: res.items,
		},
	}
}

export default function Servicio({ servicio }) {
	/* 	console.log(servicio) */

	return (
		<div>
			<div className="navbar">
				<div className="navbar__wrapper">
					<div>
						<img src="static/favicon-32x32.png" width="200" height="70" />
					</div>
					<div>
						<button className="btn-primary">Conversemos</button>
					</div>
				</div>
			</div>
			<div className="hero">
				<div className="container fd-col ai-start jc-center">
					<h1>Transforma tu sitio web en una máquina de marketing</h1>
					<p>
						Haz crecer tu empresa más rápido e inteligentemente con la ayuda de
						un veloz sitio web enfocado en el marketing que genera leads
						constantemente.
					</p>
					<button className="btn-primary">Descubre cómo</button>
				</div>
			</div>
			<div className="about-me my-l">
				<div className="container">
					<div className="c-50">
						<img src="static/favicon-32x32.png" alt="No olvides cambiarlo!" />
					</div>
					<div className="c-50">
						<h2>Creo sitios web modernos que generan resultados comerciales</h2>
						<p>
							Haz crecer tu empresa más rápido e inteligentemente con la ayuda
							de un veloz sitio web enfocado en el marketing que genera leads
							constantemente.
						</p>
						<p>
							Haz crecer tu empresa más rápido e inteligentemente con la ayuda
							de un veloz sitio web enfocado en el marketing que genera leads
							constantemente.
						</p>
						<p>
							Haz crecer tu empresa más rápido e inteligentemente con la ayuda
							de un veloz sitio web enfocado en el marketing que genera leads
							constantemente.
						</p>
					</div>
				</div>
			</div>
			<div className="proyectos my-l">
				<div className="container fd-col">
					<h2>Últimos Proyectos</h2>
					<p>
						Haz crecer tu empresa más rápido e inteligentemente con la ayuda de
						un veloz sitio web enfocado en el marketing que genera leads
						constantemente.
					</p>
					<div className="proyectos__grid">
						<div className="proyecto c-25">.</div>
						<div className="proyecto c-25">.</div>
						<div className="proyecto c-25">.</div>
						<div className="proyecto c-25">.</div>
					</div>
				</div>
			</div>
			<div className="proceso my-l">
				<div className="container fd-col">
					<h2>
						Cómo te ayudaré a construir un sitio web que genere resultados
					</h2>
					<p>
						Haz crecer tu empresa más rápido e inteligentemente con la ayuda de
						un veloz sitio web enfocado en el marketing que genera leads
						constantemente.
					</p>
					<div className="proceso__step">
						<div className="proceso__step__data c-50">
							<div className="p__s__d__number">
								<h3>01</h3>
							</div>
							<div className="p__s__d__text">
								<h3>Descubrimiento</h3>
								<p>
									Haz crecer tu empresa más rápido e inteligentemente con la
									ayuda de un veloz sitio web enfocado en el marketing que
									genera leads constantemente.
								</p>
							</div>
						</div>
						<div className="proceso__step__image c-50">
							<img src="static/favicon-32x32.png" alt="" />
						</div>
					</div>
					<div className="proceso__step">
						<div className="proceso__step__data c-50">
							<div className="p__s__d__number">
								<h3>02</h3>
							</div>
							<div className="p__s__d__text">
								<h3>Estrategia + planificación</h3>
								<p>
									Haz crecer tu empresa más rápido e inteligentemente con la
									ayuda de un veloz sitio web enfocado en el marketing que
									genera leads constantemente.
								</p>
							</div>
						</div>
						<div className="proceso__step__image c-50">
							<img src="static/favicon-32x32.png" alt="" />
						</div>
					</div>
					<div className="proceso__step">
						<div className="proceso__step__data c-50">
							<div className="p__s__d__number">
								<h3>03</h3>
							</div>
							<div className="p__s__d__text">
								<h3>Diseño + Desarrollo</h3>
								<p>
									Haz crecer tu empresa más rápido e inteligentemente con la
									ayuda de un veloz sitio web enfocado en el marketing que
									genera leads constantemente.
								</p>
							</div>
						</div>
						<div className="proceso__step__image c-50">
							<img src="static/favicon-32x32.png" alt="" />
						</div>
					</div>
					<div className="proceso__step">
						<div className="proceso__step__data c-50">
							<div className="p__s__d__number">
								<h3>04</h3>
							</div>
							<div className="p__s__d__text">
								<h3>Capacitación y lanzamiento</h3>
								<p>
									Haz crecer tu empresa más rápido e inteligentemente con la
									ayuda de un veloz sitio web enfocado en el marketing que
									genera leads constantemente.
								</p>
							</div>
						</div>
						<div className="proceso__step__image c-50">
							<img src="static/favicon-32x32.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			<div className="soluciones my-l">
				<div className="container fd-col">
					<h2>Soluciones a la medida</h2>
					<p>
						Construir un sitio web puede ser más simple de lo que parece cuando
						tenemos claro el objetivo por el que trabajamos.
					</p>
					<div className="grid-soluciones">
						<div className="solucion">
							<h3>Diseño web express</h3>
							<p>Para:</p>
							<ul>
								<li>Startups y emprendimientos validando su idea de negocio</li>
								<li>
									Empresas establecidas que buscan dar un paso rápido y seguro
									al mundo digital
								</li>
							</ul>
							<div className="solucion__features">
								<div className="solucion__features__time c-50">
									<img src="static/favicon-32x32.png" alt="" />
									<div className="time__data">
										<p>De</p>
										<h4>2 a 6 semanas</h4>
									</div>
								</div>
								<div className="solucion__features__price c-50">
									<img src="static/favicon-32x32.png" alt="" />
									<div className="price__data">
										<p>Desde</p>
										<h4>US$ 1200.00</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="solucion">
							<h3>Diseño web personalizado</h3>
							<p>Para:</p>
							<ul>
								<li>Startups y emprendimientos validando su idea de negocio</li>
								<li>
									Empresas establecidas que buscan dar un paso rápido y seguro
									al mundo digital
								</li>
							</ul>
							<div className="solucion__features">
								<div className="solucion__features__time">
									<img src="static/favicon-32x32.png" alt="" />
									<div className="time__data">
										<p>Desde</p>
										<h4>US$ 1200.00</h4>
										<p>dólares</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button className="btn-primary">Conversemos</button>
					<h2>Todas mis soluciones incluyen</h2>
					<div className="solucion__aditional-features">
						<div className="aditional-feature">
							<img src="static/favicon-32x32.png" alt="Cambiame!" />
							<p>Dominio a elección por un año</p>
						</div>
						<div className="aditional-feature">
							<img src="static/favicon-32x32.png" alt="Cambiame!" />
							<p>Dominio a elección por un año</p>
						</div>
						<div className="aditional-feature">
							<img src="static/favicon-32x32.png" alt="Cambiame!" />
							<p>Dominio a elección por un año</p>
						</div>
						<div className="aditional-feature">
							<img src="static/favicon-32x32.png" alt="Cambiame!" />
							<p>Dominio a elección por un año</p>
						</div>
					</div>
				</div>
			</div>
			<div className="clientes my-l">
				<div className="container fd-col">
					<h2>Clientes</h2>
					<p>
						Estas son algunas de las organizaciones que confiaron en mi y hoy
						cuentan con un sitio web que les ayuda a conectar con su audiencia y
						generar más ventas.
					</p>
					<p>¡Muchas gracias!</p>
					<div className="grid-clientes">
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
						<img src="static/favicon-32x32.png" alt="Cambiame!" />
					</div>
				</div>
			</div>
			<div className="conversemos my-l">
				<div className="container fd-col">
					<h2>Conversemos</h2>
					<p>¿Listo para iniciar un proyecto?</p>
					<form>
						<div className="form-style">
							<input type="text" name="first_name" placeholder="Nombre" />
							<input type="text" name="first_name" placeholder="Apellidos" />
							<input type="text" name="first_name" placeholder="Email" />
							<input type="text" name="first_name" placeholder="Whatsapp" />
							<button type="submit" href="/">
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
			{/* 			{
				<div className="lista-de-servicios">
					{servicio.map((servicios) => (
						<ServicesCard key={servicios.sys.id} servicios={servicios} />
					))}
				</div>
			} */}
			<style jsx>{``}</style>
		</div>
	)
}
