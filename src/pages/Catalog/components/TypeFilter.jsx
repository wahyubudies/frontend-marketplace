const CONTENT = [
    {
        name: "Baru",
        value: 1,
    },
    {
        name: "Terlaris",
        value: 0,
    },
];

const TypeFilter = () => {

    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <nav className="flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 w-full">
                {CONTENT.map(({ name, value }, index) => (
                    <div role="button" key={index}
                    onClick={() => {
                        const urlParams = new URL(window.location.href);
                        const urlProductName = urlParams.searchParams.get('name') || "";
                        const categoryId = urlParams.searchParams.get('categoryId') || "";
                        window.location.href = `/catalog?name=${urlProductName}&type=${value}&categoryId=${categoryId}`;
                    }}
                        className={`flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-green-bonek-1 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-green-bonek-1 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-green-bonek-1`}>
                        <label htmlFor={`${value}_filter`} className="flex items-center w-full px-3 py-2 cursor-pointer">
                            <div className="grid mr-3 place-items-center">
                                <div className="inline-flex items-center">
                                    <label className="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor={`${value}_filter`}>
                                        <input name="typeFilter" id={`${value}_filter`} type="radio"
                                            value={value}
                                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-green-bonek-1 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-green-bonek-1 checked:before:bg-green-bonek-1 hover:before:opacity-0" />
                                        <span
                                            className="absolute text-green-bonek-1 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                                {name}
                            </p>
                        </label>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default TypeFilter;