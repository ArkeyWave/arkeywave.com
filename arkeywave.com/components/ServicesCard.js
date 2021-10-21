import Link from 'next/link'
import Image from 'next/image'

export default function ServicesCard({ servicios }) {
	const { nombreDelServicio, slug, descripcinDelServicio } = servicios.fields

	return (
		<div className="card">
			<div className="featured">{/* image - thumb */}</div>
			<div className="content">
				<div className="info">
					<h4>{nombreDelServicio}</h4>
					<p>Tu empresa en internet en menos de 2 semanas</p>
				</div>
			</div>
			<div className="actions">
				<Link href={'/servicios/' + slug}>
					<a>Pruébalo hoy</a>
				</Link>
			</div>
		</div>
	)
}
