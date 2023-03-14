import { Link } from 'react-router-dom';

const MocktestCard = ({ mocktest }) => (<div className="card course-card">
    <div className="card-header">
        <div className="course-card-rating">
            <i className="fa fa-star"></i>
            5.0
        </div>
        <a>
            <img
                src="/public/images/placeholder.jpg"
                className="card-img-top course-card-img"
                alt=""
            />
        </a>
    </div>
    <div className="card-body py-2 px-3">
        <button
            type="button"
            className="btn btn-sm tag-yellow mb-1"
        >
            Questions
        </button>
        <button type="button" className="btn mt-3"></button>
        <a>
            <h5 className="card-title my-1">
                {mocktest.title || ''}
            </h5>
        </a>
    </div>
    <div className="card-footer py-1">
        <div className="d-flex justify-content-end">
            <Link to={`/exam/${mocktest.id}`} className="btn btn-text" >
                Participate
            </Link>
        </div>
    </div>
</div >);

export default MocktestCard;