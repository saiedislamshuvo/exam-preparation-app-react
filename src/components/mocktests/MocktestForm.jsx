const MocktestForm = ({
    title,
    setTitle,
    mocktestid,
    handleSubmit,
}) => (<div className='app-layout'>
    <div className="bg-app br-20 mt-md-3 mt-1 mb-3 mb-md-0 mx-2" >
        <div className="row p-4">
            <div className="col-12">
                <h2 className="text-secondary-heading1">
                    {(mocktestid != null) ? 'Update' : 'Create'} Mocktest.
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="fw-bold">Title</label>
                        <div className="d-flex align-items-center">
                            <div >
                                <input
                                    type="text"
                                    className="form-control mb-0"
                                    placeholder="Enter Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className='mx-3'>
                                <input type="submit" className="btn btn-dark" value={(mocktestid != null) ? 'Update' : 'Save'} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>)
export default MocktestForm;