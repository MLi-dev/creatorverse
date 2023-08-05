import { Link } from "react-router-dom";

const Card = ({ creator }) => {
	const navYouTube = () => {
		window.open("https://www.youtube.com/@" + creator.youtube, "_blank");
	};

	const navTwitter = () => {
		window.open("https://www.twitter.com/" + creator.twitter, "_blank");
	};

	const navInstagram = () => {
		window.open("https://www.instagram.com/" + creator.instagram, "_blank");
	};
	return (
		<div
			className='Card'
			style={{ backgroundImage: `url(${creator.imageURL})` }}
		>
			<article>
				<div className='card-header-name'>
					<h3>{creator.name}</h3>
					{creator.youtube !== null && creator.youtube !== "" ? (
						<span className='fab fa-youtube' onClick={navYouTube}></span>
					) : (
						""
					)}

					{creator.twitter !== null && creator.twitter !== "" ? (
						<span className='fab fa-twitter' onClick={navTwitter}></span>
					) : (
						""
					)}

					{creator.instagram !== null && creator.instagram !== "" ? (
						<span className='fab fa-instagram' onClick={navInstagram}></span>
					) : (
						""
					)}
				</div>
				<div className='card-header-edit'>
					<Link
						to={"/" + creator.id}
						onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
					>
						<i className='fas fa-info-circle'></i>
					</Link>
					<br />
					<Link
						to={"/edit/" + creator.id}
						onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
					>
						<i className='fas fa-pen'></i>
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
