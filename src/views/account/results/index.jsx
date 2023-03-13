import { useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import AccountLayout from "../components/AccountLayout";

const Results = () => {
    const [getResults] = useStoreActions((actions) => [
        actions.result.getResults
    ]);
    const results = useStoreState((state) => state.result.results);

    useEffect(() => {
        getResults();
    }, []);

    return <AccountLayout>
        <div class="card mocktest-card my-3">
            <div class="card-header py-2 py-md-3 px-2 px-md-3">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="text-body-heading3 mb-0">Results</h5>
                </div>
            </div>
            <div class="card-body h-min-40 mb-5 mb-md-0 p-0">
                {results.length > 0 ? <div style={{ width: '100%', overflowX: 'scroll' }}>
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th scope="col" class="text-start">Mocktest</th>
                                <th scope="col">Total Questions</th>
                                <th scope="col">Total Answered</th>
                                <th scope="col">Correct Answerd</th>
                                <th scope="col">Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map(result => (
                                    <tr>
                                        <td>{result.id}</td>
                                        <td>{result.total_questions || 0}</td>
                                        <td>{result.total_answered || 0}</td>
                                        <td>{result.correct_answered || 0}</td>
                                        <td>{new Date(result.created_at).toDateString()}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div> : <div class="mx-5 my-5">
                    <p class="text-body1">No results yet!</p>
                </div>}
            </div>
        </div >
    </AccountLayout >;

};

export default Results;