const Breadcrumb = ({ title, subtitle }) => (<div className="breadcrumbs bg-app px-2 px-md-0">
    <div className="container">
        <div className="row py-4 py-md-5">
            <div className="col-12">
                <h1 className="text-secondary-heading1 fs-fix">
                    {title || ""}
                </h1>
                <p className="text-p mb-0" style={{ fontSize: '20px' }}>{subtitle || ""}</p>
            </div>
        </div>
    </div>
</div >);

export default Breadcrumb;