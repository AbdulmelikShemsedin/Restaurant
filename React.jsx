
const Foods = ({ photoSrc, photoText }) => {
    return (
    <div className="profileDecor">
        <img src={photoSrc} />
        <p>{photoText}</p>
    </div>
    )
}

ReactDOM.createRoot(document.getElementById("page1-table-content")).render(<>
    <Foods photoSrc="./restaurant-foods.jpg" photoText="Tasty foods" />
    <Foods photoSrc="./restaurant-service.jpg" photoText="Top service" />
    <Foods photoSrc="./restaurant-view.jpg" photoText="Great view" />
</>)