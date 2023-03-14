import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MocktestCard = ({ mocktest }) => {
    const [category, setCategory] = useState('');

    const topics = [
        'exam', 'ielts', 'programming', 'creative'
    ];

    useEffect(() => {
        const temp = topics[Math.floor(Math.random() * topics.length)];
        setCategory(temp);
    }, [])

    return <div className="card course-card" >
        <div className="card-header" >
            <a>
                <img
                    src={`https://source.unsplash.com/random/800x400/?${category}`}
                    className="card-img-top course-card-img"
                    alt=""
                    style={{ height: '100px' }}
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
    </div >
};

export default MocktestCard;