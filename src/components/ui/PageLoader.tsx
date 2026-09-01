function PageLoader() {
  return (
    <div
      className="page-loader"
      role="status"
      aria-label="Loading page content"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default PageLoader;
