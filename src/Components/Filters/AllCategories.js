import Filter from "./Filter";
const AllCategories = () => {
    return (
        <div className="categories">
            {['APPETIZERS', 'SALADS', 'SANDWICHES', 'ENTREES', 'SIDES', 'DESSERTS'].map(category => <Filter category = {category}/>)}
        </div>
    )
}

export default AllCategories;