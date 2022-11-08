import "./skeleton.scss";

const Skeleton = () => {
    return (
        <>
            <p className="skeleton-text">
                ничего не найдено, пожалуйста выберите другой фильтр
            </p>
            <div className="skeleton">
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
            </div>
        </>
    );
};

export default Skeleton;
