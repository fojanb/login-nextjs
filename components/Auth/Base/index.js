export function BaseAuthLayout(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12">{props.children}</div>
      </div>
    </div>
  );
}
