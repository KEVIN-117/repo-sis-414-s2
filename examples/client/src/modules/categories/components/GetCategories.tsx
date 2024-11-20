import { getCategories } from "../actions/get-categories";
import Categories from "./Categories";

export async function GetCategories() {
    const { data, errors } = await getCategories();
    if (errors) {
        return (
            <div>Something went wrong</div>
        )
    }
    const { categories } = data;
    return (
        <div>
            <Categories categories={categories} status={200} />
        </div>
    );
}
