import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div className="categories">
            {['APPETIZERS', 'SALADS', 'SANDWICHES', 'ENTREES', 'SIDES', 'DESSERTS'].map((category, id) => <Filter category = {category} key = {id}/>)}
        </div>
    )
}

export default AllCategories;