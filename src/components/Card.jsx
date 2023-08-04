import { Link } from "react-router-dom";

const Card = ({ creator }) => {
	return (
		<div
			className='Card'
			style={{ backgroundImage: `url(${creator.imageURL})` }}
		>
			<article>
				<div className='card-header-name'>
					<h3>{creator.name}</h3>
				</div>
				<div className='card-header-edit'>
					<Link
						to={"/" + creator.id}
						onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
					>
						<i className='fa-solid fa-circle-info'>View</i>
					</Link>
					<br />
					<Link
						to={"/edit/" + creator.id}
						onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
					>
						<i className='fa-solid fa-pen'>Edit</i>
					</Link>
				</div>
				<div className='card-description'>
					<p>{creator.description}</p>
				</div>
			</article>
		</div>
	);
};
export default Card;
