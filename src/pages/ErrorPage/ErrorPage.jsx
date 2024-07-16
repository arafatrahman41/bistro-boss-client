import error404 from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={error404} alt="" />
        </div>
    );
};

export default ErrorPage;