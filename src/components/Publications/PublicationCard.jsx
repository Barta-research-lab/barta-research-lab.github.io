const PublicationCard = ({ publication }) => {
    return (
        <div className=" border border-green-primary rounded-lg shadow-xs p-6 mb-4 transition-all hover:shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2 font-nunito">
                {publication.title}
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-2">
                {publication.authors}
            </p>
            <p className="text-sm text-gray-500 mb-3 italic">
                {publication.publishedIn}
            </p>
            {publication.description && (
                <p className="text-sm text-gray-700 mb-4 border-l-4 border-gray-200 pl-3">
                    {publication.description}
                </p>
            )}
            <div className="flex flex-wrap gap-3 mt-6">
                <a
                    href={publication.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-green-primary text-white hover:bg-green-dark rounded-md font-medium flex items-center"
                >
                    View Pdf
                </a>
                <a
                    href={publication.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-gray-50 text-green-primary hover:text-green-dark rounded-md font-medium border-2 border-green-primary"
                >
                    View Code
                </a>
            </div>
        </div>
    );
};

export default PublicationCard;