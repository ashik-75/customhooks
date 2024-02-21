import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Home = () => {
	const ref = useRef<HTMLDivElement | null>(null);
	return (
		<div className="relative">
			<Button
				onClick={() =>
					ref.current?.scrollIntoView({
						behavior: "smooth",
					})
				}
			>
				Move To
			</Button>
			<Button
				className="fixed top-6 right-10"
				onClick={() =>
					window.scrollBy({
						top: window.innerHeight,
						behavior: "smooth",
					})
				}
			>
				Next Page
			</Button>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatem
				iure sit, praesentium doloremque tempore non, sapiente est tenetur odit
				porro suscipit incidunt aperiam ipsam, placeat quae aliquid ipsum.
				Consequuntur nesciunt rerum porro dolores enim dicta ducimus reiciendis
				eligendi sunt, voluptas maiores officia explicabo quia iste, inventore
				similique minus perferendis labore quod cupiditate. Culpa libero maxime
				illo, rem sit veritatis. Nobis, a deleniti. Praesentium beatae
				cupiditate recusandae exercitationem aliquid aperiam ut iure dolorum
				omnis voluptatum odio, quod ipsum nemo. Optio aut incidunt, consectetur
				non eos, ullam magni unde nostrum eum praesentium labore cum libero.
				Libero, magni provident mollitia officiis cumque id commodi aperiam
				facere nemo ipsum architecto sequi, quisquam earum culpa at vero quasi
				minima accusantium dolorum? Similique quaerat, nesciunt tenetur
				quibusdam quia quae vel odit voluptatibus dolorum laborum dolores earum
				magnam, mollitia delectus corrupti? Iusto consequuntur id, blanditiis
				enim, dolorem fuga assumenda quibusdam rerum commodi voluptatum
				consequatur dolor odit ex! Eaque totam eligendi cupiditate itaque
				consectetur vero eum optio molestiae ea libero quia iure consequatur
				pariatur deserunt porro qui, animi quos corrupti! Possimus impedit et
				alias cupiditate quasi magnam laboriosam distinctio nobis rerum? Quos
				eaque et non esse qui. Quam quo minus sed tenetur porro iure dolorem
				cupiditate et!
			</p>

			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatem
				iure sit, praesentium doloremque tempore non, sapiente est tenetur odit
				porro suscipit incidunt aperiam ipsam, placeat quae aliquid ipsum.
				Consequuntur nesciunt rerum porro dolores enim dicta ducimus reiciendis
				eligendi sunt, voluptas maiores officia explicabo quia iste, inventore
				similique minus perferendis labore quod cupiditate. Culpa libero maxime
				illo, rem sit veritatis. Nobis, a deleniti. Praesentium beatae
				cupiditate recusandae exercitationem aliquid aperiam ut iure dolorum
				omnis voluptatum odio, quod ipsum nemo. Optio aut incidunt, consectetur
				non eos, ullam magni unde nostrum eum praesentium labore cum libero.
				Libero, magni provident mollitia officiis cumque id commodi aperiam
				facere nemo ipsum architecto sequi, quisquam earum culpa at vero quasi
				minima accusantium dolorum? Similique quaerat, nesciunt tenetur
				quibusdam quia quae vel odit voluptatibus dolorum laborum dolores earum
				magnam, mollitia delectus corrupti? Iusto consequuntur id, blanditiis
				enim, dolorem fuga assumenda quibusdam rerum commodi voluptatum
				consequatur dolor odit ex! Eaque totam eligendi cupiditate itaque
				consectetur vero eum optio molestiae ea libero quia iure consequatur
				pariatur deserunt porro qui, animi quos corrupti! Possimus impedit et
				alias cupiditate quasi magnam laboriosam distinctio nobis rerum? Quos
				eaque et non esse qui. Quam quo minus sed tenetur porro iure dolorem
				cupiditate et!
			</p>

			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatem
				iure sit, praesentium doloremque tempore non, sapiente est tenetur odit
				porro suscipit incidunt aperiam ipsam, placeat quae aliquid ipsum.
				Consequuntur nesciunt rerum porro dolores enim dicta ducimus reiciendis
				eligendi sunt, voluptas maiores officia explicabo quia iste, inventore
				similique minus perferendis labore quod cupiditate. Culpa libero maxime
				illo, rem sit veritatis. Nobis, a deleniti. Praesentium beatae
				cupiditate recusandae exercitationem aliquid aperiam ut iure dolorum
				omnis voluptatum odio, quod ipsum nemo. Optio aut incidunt, consectetur
				non eos, ullam magni unde nostrum eum praesentium labore cum libero.
				Libero, magni provident mollitia officiis cumque id commodi aperiam
				facere nemo ipsum architecto sequi, quisquam earum culpa at vero quasi
				minima accusantium dolorum? Similique quaerat, nesciunt tenetur
				quibusdam quia quae vel odit voluptatibus dolorum laborum dolores earum
				magnam, mollitia delectus corrupti? Iusto consequuntur id, blanditiis
				enim, dolorem fuga assumenda quibusdam rerum commodi voluptatum
				consequatur dolor odit ex! Eaque totam eligendi cupiditate itaque
				consectetur vero eum optio molestiae ea libero quia iure consequatur
				pariatur deserunt porro qui, animi quos corrupti! Possimus impedit et
				alias cupiditate quasi magnam laboriosam distinctio nobis rerum? Quos
				eaque et non esse qui. Quam quo minus sed tenetur porro iure dolorem
				cupiditate et!
			</p>

			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatem
				iure sit, praesentium doloremque tempore non, sapiente est tenetur odit
				porro suscipit incidunt aperiam ipsam, placeat quae aliquid ipsum.
				Consequuntur nesciunt rerum porro dolores enim dicta ducimus reiciendis
				eligendi sunt, voluptas maiores officia explicabo quia iste, inventore
				similique minus perferendis labore quod cupiditate. Culpa libero maxime
				illo, rem sit veritatis. Nobis, a deleniti. Praesentium beatae
				cupiditate recusandae exercitationem aliquid aperiam ut iure dolorum
				omnis voluptatum odio, quod ipsum nemo. Optio aut incidunt, consectetur
				non eos, ullam magni unde nostrum eum praesentium labore cum libero.
				Libero, magni provident mollitia officiis cumque id commodi aperiam
				facere nemo ipsum architecto sequi, quisquam earum culpa at vero quasi
				minima accusantium dolorum? Similique quaerat, nesciunt tenetur
				quibusdam quia quae vel odit voluptatibus dolorum laborum dolores earum
				magnam, mollitia delectus corrupti? Iusto consequuntur id, blanditiis
				enim, dolorem fuga assumenda quibusdam rerum commodi voluptatum
				consequatur dolor odit ex! Eaque totam eligendi cupiditate itaque
				consectetur vero eum optio molestiae ea libero quia iure consequatur
				pariatur deserunt porro qui, animi quos corrupti! Possimus impedit et
				alias cupiditate quasi magnam laboriosam distinctio nobis rerum? Quos
				eaque et non esse qui. Quam quo minus sed tenetur porro iure dolorem
				cupiditate et!
			</p>

			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatem
				iure sit, praesentium doloremque tempore non, sapiente est tenetur odit
				porro suscipit incidunt aperiam ipsam, placeat quae aliquid ipsum.
				Consequuntur nesciunt rerum porro dolores enim dicta ducimus reiciendis
				eligendi sunt, voluptas maiores officia explicabo quia iste, inventore
				similique minus perferendis labore quod cupiditate. Culpa libero maxime
				illo, rem sit veritatis. Nobis, a deleniti. Praesentium beatae
				cupiditate recusandae exercitationem aliquid aperiam ut iure dolorum
				omnis voluptatum odio, quod ipsum nemo. Optio aut incidunt, consectetur
				non eos, ullam magni unde nostrum eum praesentium labore cum libero.
				Libero, magni provident mollitia officiis cumque id commodi aperiam
				facere nemo ipsum architecto sequi, quisquam earum culpa at vero quasi
				minima accusantium dolorum? Similique quaerat, nesciunt tenetur
				quibusdam quia quae vel odit voluptatibus dolorum laborum dolores earum
				magnam, mollitia delectus corrupti? Iusto consequuntur id, blanditiis
				enim, dolorem fuga assumenda quibusdam rerum commodi voluptatum
				consequatur dolor odit ex! Eaque totam eligendi cupiditate itaque
				consectetur vero eum optio molestiae ea libero quia iure consequatur
				pariatur deserunt porro qui, animi quos corrupti! Possimus impedit et
				alias cupiditate quasi magnam laboriosam distinctio nobis rerum? Quos
				eaque et non esse qui. Quam quo minus sed tenetur porro iure dolorem
				cupiditate et!
			</p>

			<p ref={ref}>
				<img
					src="https://source.unsplash.com/a-man-standing-over-a-woman-laying-on-a-bed-Flp5fQy6Tj0"
					alt=""
				/>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem voluptatem
				iure sit, praesentium doloremque tempore non, sapiente est tenetur odit
				porro suscipit incidunt aperiam ipsam, placeat quae aliquid ipsum.
				Consequuntur nesciunt rerum porro dolores enim dicta ducimus reiciendis
				eligendi sunt, voluptas maiores officia explicabo quia iste, inventore
				similique minus perferendis labore quod cupiditate. Culpa libero maxime
				illo, rem sit veritatis. Nobis, a deleniti. Praesentium beatae
				cupiditate recusandae exercitationem aliquid aperiam ut iure dolorum
				omnis voluptatum odio, quod ipsum nemo. Optio aut incidunt, consectetur
				non eos, ullam magni unde nostrum eum praesentium labore cum libero.
				Libero, magni provident mollitia officiis cumque id commodi aperiam
				facere nemo ipsum architecto sequi, quisquam earum culpa at vero quasi
				minima accusantium dolorum? Similique quaerat, nesciunt tenetur
				quibusdam quia quae vel odit voluptatibus dolorum laborum dolores earum
				magnam, mollitia delectus corrupti? Iusto consequuntur id, blanditiis
				enim, dolorem fuga assumenda quibusdam rerum commodi voluptatum
				consequatur dolor odit ex! Eaque totam eligendi cupiditate itaque
				consectetur vero eum optio molestiae ea libero quia iure consequatur
				pariatur deserunt porro qui, animi quos corrupti! Possimus impedit et
				alias cupiditate quasi magnam laboriosam distinctio nobis rerum? Quos
				eaque et non esse qui. Quam quo minus sed tenetur porro iure dolorem
				cupiditate et!
			</p>

			<Button
				onClick={() =>
					window.scroll({
						top: 0,
						behavior: "smooth",
					})
				}
			>
				Back to Top
			</Button>
		</div>
	);
};

export default Home;
