

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p className="italic text-orange-400 text-xl mb-4"> -- {subHeading} --</p>
            <h2 className="text-4xl inline-block uppercase py-5 px-16 border-y-4 border-neutral-content">{heading}</h2>
        </div>
    );
};

export default SectionTitle;