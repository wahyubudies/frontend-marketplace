const CategoryFilter = ({ categories }) => {
    return (
        <div className='gap-2 grid h-full'>
            <div>
                <p className='text-white font-bold tracking-wider'>
                    Semua Kategori
                </p>
            </div>
            {categories.map(({ name, id }, index) => (
                <div
                    role='presentation'
                    onClick={() => {
                        const urlParams = new URL(window.location.href);
                        const urlProductName = urlParams.searchParams.get('name') || "";
                        const urlProductCategoryId = id || urlParams.searchParams.get('categoryId');
                        const urlType = urlParams.searchParams.get('type') || "";
                        window.location.href = `/catalog?name=${urlProductName}&type=${urlType}&categoryId=${urlProductCategoryId}`;
                    }}
                    className='hover:bg-white text-white hover:text-green-bonek-1 py-2 px-4 rounded-lg cursor-pointer' key={index}>
                    <p
                        className='font-medium tracking-wider'>
                        {name}
                    </p>
                </div>
            ))}

        </div>
    );
};

export default CategoryFilter;