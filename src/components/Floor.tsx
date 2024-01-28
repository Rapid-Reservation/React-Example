import Table from "./Table";

function Floor() {
  return (
    <>
      <div>
        <h1 className="title">Restaurant Table Floor</h1>
        <div className="container">
          <Table number={1} />
          <Table number={2} />
          <Table number={3} />
        </div>
        <div className="container">
          <Table number={4} />
          <Table number={5} />
          <Table number={6} />
        </div>
        <div className="container">
          <Table number={7} />
          <Table number={8} />
          <Table number={9} />
        </div>
        <div className="container">
          <Table number={10} />
          <Table number={11} />
          <Table number={12} />
        </div>
      </div>
    </>
  );
}

export default Floor;
