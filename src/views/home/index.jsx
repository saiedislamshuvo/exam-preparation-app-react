import { Link } from "react-router-dom";

const Home = () => {
    return <div>
        <div className="bg-app vh-60">
            <div className="container">
                <div className="row py-3 align-items-center">
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="text-heading-hero">
                            On overcoming obstacles
                        </h1>
                        <p className="text-p-hero px-5 px-lg-0">
                            Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.
                        </p>
                        <Link to="/mocktests" className="btn btn-primary">Mocktests</Link>
                    </div>
                    <div className="col-md-6 vh-50-max">
                        <img className="img-fluid br-20" src="/images/img-1.jpg" alt="exam" />
                    </div>
                </div>
            </div >
        </div >
    </div>
}

export default Home;