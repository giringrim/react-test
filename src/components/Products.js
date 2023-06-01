
export default function Products(props) {
	let item = props.children;
	return (
		<div className="products">
			<h1>{item.name}</h1>
			<p>{ item.amount }</p>
			<div>{ item.word }</div>
			<img src={require(`../medias/images/${item.img}`)} alt={item.name}/>
		</div>
	)
}