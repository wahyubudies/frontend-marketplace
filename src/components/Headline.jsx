import React from 'react';

const Headline = ({ type, title }) => {
    const typeBorder = type === "blue" ? "border-b-blue-bonek" : "border-b-white";
    const typeText = type === "blue" ? "text-blue-bonek" : "text-white";

    return (
        <div className={`border-b-4 ${typeBorder}`}>
            <h3 className={`${typeText} mb-2 font-extrabold text-center text-2xl uppercase`}>
                {title}
            </h3>
        </div>
    );
};

export default Headline;